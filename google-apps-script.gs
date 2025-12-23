/**
 * Google Apps Script để nhận dữ liệu từ form đăng ký và lưu vào Google Sheets
 *
 * HƯỚNG DẪN SỬ DỤNG:
 * 1. Mở Google Sheets của bạn
 * 2. Vào Extensions > Apps Script
 * 3. Xóa code mặc định và dán toàn bộ code này vào
 * 4. Thay đổi SPREADSHEET_ID thành ID của Google Sheets của bạn
 * 5. Thay đổi SHEET_NAME thành tên sheet của bạn (mặc định là "Sheet1")
 * 6. Lưu project với tên bạn muốn
 * 7. Deploy > New deployment
 * 8. Chọn type: Web app
 * 9. Execute as: Me
 * 10. Who has access: Anyone
 * 11. Click Deploy
 * 12. Copy URL và thay thế APPS_SCRIPT_URL trong file hero-section.tsx
 *
 * CẤU TRÚC GOOGLE SHEETS:
 * Cột A: Họ và tên (name)
 * Cột B: Số điện thoại (phone)
 * Cột C: Email (email)
 * Cột D: Họ tên phụ huynh (parentName)
 * Cột E: Trường THPT đang theo học (school)
 * Cột F: Bạn đang quan tâm đến vấn đề nào nhất (interest)
 * Cột G: Câu hỏi (question)
 * Cột H: Thời gian đăng ký (timestamp)
 */

// THAY ĐỔI CÁC GIÁ TRỊ SAU THEO SHEET CỦA BẠN
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE"; // Thay bằng ID của Google Sheets của bạn
const SHEET_NAME = "Sheet1"; // Thay bằng tên sheet của bạn

/**
 * Hàm doPost được gọi khi form gửi dữ liệu POST request
 * @param {Object} e - Event object chứa thông tin request
 */
function doPost(e) {
  try {
    // Log để debug - kiểm tra ngay từ đầu
    Logger.log("=== doPost called ===");
    Logger.log("Arguments length: " + arguments.length);

    // Kiểm tra e có tồn tại không - nếu không có thì thử lấy từ arguments
    if (typeof e === "undefined" || e === null) {
      Logger.log("Warning: e is undefined, trying to get from arguments");
      if (arguments.length > 0) {
        e = arguments[0];
        Logger.log("Got e from arguments[0]");
      } else {
        Logger.log("Error: No arguments provided");
        return ContentService.createTextOutput(
          JSON.stringify({
            status: "error",
            message:
              "Không nhận được request. Vui lòng kiểm tra lại deployment và URL.",
          })
        ).setMimeType(ContentService.MimeType.JSON);
      }
    }

    Logger.log("e type: " + typeof e);
    Logger.log("e keys: " + (e ? Object.keys(e).join(", ") : "none"));

    // Kiểm tra và lấy dữ liệu từ request
    let postData = {};

    // Thử lấy dữ liệu từ nhiều nguồn khác nhau
    // Ưu tiên e.postData.contents vì đang gửi dưới dạng JSON
    if (e.postData && e.postData.contents) {
      // Dữ liệu được gửi dưới dạng JSON trong body
      try {
        const contents = e.postData.contents;
        Logger.log("Raw contents: " + contents);
        postData = JSON.parse(contents);
        Logger.log("✅ Parsed JSON data: " + JSON.stringify(postData));
        Logger.log("✅ Interest value: " + (postData.interest || "NOT FOUND"));
      } catch (parseError) {
        Logger.log("Parse error: " + parseError.toString());
        Logger.log("Contents that failed to parse: " + e.postData.contents);
        return ContentService.createTextOutput(
          JSON.stringify({
            status: "error",
            message: "Lỗi phân tích dữ liệu JSON: " + parseError.toString(),
          })
        ).setMimeType(ContentService.MimeType.JSON);
      }
    } else if (e.parameter && Object.keys(e.parameter).length > 0) {
      // Dữ liệu được gửi dưới dạng form parameters (URL-encoded)
      postData = e.parameter;
      Logger.log("✅ Using parameters: " + JSON.stringify(postData));
      Logger.log("✅ Number of parameters: " + Object.keys(postData).length);
      Logger.log("✅ Interest value: " + (postData.interest || "NOT FOUND"));
    } else {
      // Không có dữ liệu - log để debug
      Logger.log("❌ No data received.");
      Logger.log("e.postData: " + JSON.stringify(e.postData));
      Logger.log("e.parameter: " + JSON.stringify(e.parameter));
      Logger.log("e.parameters: " + JSON.stringify(e.parameters));
      Logger.log("Full e object keys: " + Object.keys(e || {}));

      return ContentService.createTextOutput(
        JSON.stringify({
          status: "error",
          message: "Không nhận được dữ liệu từ form. Vui lòng kiểm tra lại.",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    Logger.log("Final postData: " + JSON.stringify(postData));

    // Mở Google Sheets
    const sheet =
      SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    // Kiểm tra nếu sheet không tồn tại
    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({
          status: "error",
          message: "Sheet không tồn tại. Vui lòng kiểm tra tên sheet.",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Kiểm tra và tạo/cập nhật header nếu cần
    const expectedHeaders = [
      "Họ và tên",
      "Số điện thoại",
      "Email",
      "Họ tên phụ huynh",
      "Trường THPT đang theo học",
      "Bạn đang quan tâm đến vấn đề nào nhất",
      "Câu hỏi",
      "Thời gian đăng ký",
    ];

    if (sheet.getLastRow() === 0) {
      // Sheet trống, tạo header mới
      sheet.appendRow(expectedHeaders);

      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, expectedHeaders.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4285f4");
      headerRange.setFontColor("#ffffff");
    } else {
      // Kiểm tra xem header có đúng không
      const currentHeaderRow = sheet
        .getRange(1, 1, 1, sheet.getLastColumn())
        .getValues()[0];
      const headerMatches =
        currentHeaderRow.length === expectedHeaders.length &&
        currentHeaderRow[5] === expectedHeaders[5]; // Kiểm tra cột interest

      if (!headerMatches) {
        // Header không đúng, cập nhật lại
        sheet.getRange(1, 1, 1, sheet.getLastColumn()).clear();
        sheet
          .getRange(1, 1, 1, expectedHeaders.length)
          .setValues([expectedHeaders]);

        // Format header row
        const headerRange = sheet.getRange(1, 1, 1, expectedHeaders.length);
        headerRange.setFontWeight("bold");
        headerRange.setBackground("#4285f4");
        headerRange.setFontColor("#ffffff");
      }
    }

    // Chuẩn bị dữ liệu để thêm vào sheet
    // Đảm bảo thứ tự đúng với header
    const rowData = [
      postData.name || "",
      postData.phone || "",
      postData.email || "",
      postData.parentName || "",
      postData.school || "",
      postData.interest || "", // Trường này phải được lưu
      postData.question || "",
      postData.timestamp ||
        new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
    ];

    // Log để debug
    Logger.log("=== Preparing to save data ===");
    Logger.log("Received postData: " + JSON.stringify(postData));
    Logger.log("Interest value: " + (postData.interest || "EMPTY"));
    Logger.log("Row data to append: " + JSON.stringify(rowData));
    Logger.log("Number of columns: " + rowData.length);

    // Thêm dữ liệu vào sheet
    try {
      sheet.appendRow(rowData);
      Logger.log("✅ Data appended successfully to row: " + sheet.getLastRow());

      // Xác nhận dữ liệu đã được lưu
      const lastRow = sheet.getLastRow();
      const savedData = sheet
        .getRange(lastRow, 1, 1, rowData.length)
        .getValues()[0];
      Logger.log("✅ Confirmed saved data: " + JSON.stringify(savedData));
    } catch (appendError) {
      Logger.log("❌ Error appending row: " + appendError.toString());
      throw appendError;
    }

    // Trả về kết quả thành công
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Đăng ký thành công!",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Xử lý lỗi
    Logger.log("Error: " + error.toString());

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: "Có lỗi xảy ra: " + error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Hàm doGet để test kết nối (tùy chọn)
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "success",
      message: "Google Apps Script đang hoạt động!",
      received: e ? "Event object received" : "No event object",
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Hàm test để kiểm tra xem doPost có nhận được e không
 */
function testDoPost() {
  // Tạo một event object giả để test
  const testEvent = {
    parameter: {
      name: "Test",
      phone: "123456789",
      email: "test@test.com",
      parentName: "Test Parent",
      school: "Test School",
      interest: "Test Interest",
      question: "Test Question",
      timestamp: new Date().toLocaleString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
      }),
    },
  };

  // Gọi doPost với event object giả
  const result = doPost(testEvent);
  Logger.log("Test result: " + result.getContent());
}
