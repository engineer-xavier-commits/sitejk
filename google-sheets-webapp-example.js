function doPost(e) {
  // Handle CORS preflight
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const payload = JSON.parse(e.postData.contents || '{}');

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('Convidados');

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false, error: 'Aba "Convidados" não encontrada' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const name = String(payload.name || 'Sem nome').trim();
    const status = payload.status || 'confirmed';

    sheet.appendRow([name, status]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }));
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: error.message })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ ok: true, message: 'Google Sheets Web App is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
