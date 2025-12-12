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
 * Cột F: Câu hỏi (question)
 * Cột G: Thời gian đăng ký (timestamp)
 */

// THAY ĐỔI CÁC GIÁ TRỊ SAU THEO SHEET CỦA BẠN
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE"; // Thay bằng ID của Google Sheets của bạn
const SHEET_NAME = "Sheet1"; // Thay bằng tên sheet của bạn

/**
 * Hàm doPost được gọi khi form gửi dữ liệu POST request
 */
function doPost(e) {
  try {
    // Lấy dữ liệu từ request
    const postData = JSON.parse(e.postData.contents);

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

    // Tạo header nếu sheet trống (chỉ thêm header nếu dòng đầu tiên trống)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Họ và tên",
        "Số điện thoại",
        "Email",
        "Họ tên phụ huynh",
        "Trường THPT đang theo học",
        "Câu hỏi",
        "Thời gian đăng ký",
      ]);

      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4285f4");
      headerRange.setFontColor("#ffffff");
    }

    // Chuẩn bị dữ liệu để thêm vào sheet
    const rowData = [
      postData.name || "",
      postData.phone || "",
      postData.email || "",
      postData.parentName || "",
      postData.school || "",
      postData.question || "",
      postData.timestamp ||
        new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
    ];

    // Thêm dữ liệu vào sheet
    sheet.appendRow(rowData);

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
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
