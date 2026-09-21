function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const sheet = SpreadsheetApp.getActiveSheet();
    const timestamp = new Date().toISOString();
    const name = payload.name || 'Sem nome';
    const status = payload.status || 'confirmed';

    sheet.appendRow([timestamp, name, status]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }));
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: error.message })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return HtmlService.createHtmlOutput('<h1>Google Sheets Web App</h1>');
}
