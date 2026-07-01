/**
 * Contact form backend for the Ossinova website.
 *
 * Stores each submission as a new row in a Google Sheet, keeping everything
 * free and unlimited. Paste this into Extensions > Apps Script of your sheet
 * and deploy it as a "Web app". See README.md for the step-by-step guide.
 *
 * The website posts these fields: name, clinic, email, phone, mode, message.
 * A hidden "_gotcha" field is used as an anti-spam honeypot.
 */

// Response columns, in this order (after the timestamp).
var FIELDS = ['name', 'clinic', 'email', 'phone', 'mode', 'message'];
var HEADERS = ['Fecha', 'Nombre', 'Clínica', 'Email', 'Teléfono', 'Modalidad', 'Mensaje'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // avoid clashes if two people submit at once

  try {
    var p = (e && e.parameter) || {};

    // Honeypot: silently accept and ignore bots.
    if (p._gotcha) {
      return json({ result: 'success' });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    var row = [new Date()];
    for (var i = 0; i < FIELDS.length; i++) {
      row.push(p[FIELDS[i]] || '');
    }
    sheet.appendRow(row);

    return json({ result: 'success' });
  } catch (err) {
    return json({ result: 'error', error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the URL in the browser to check it is alive.
function doGet() {
  return json({ result: 'ok', message: 'Ossinova contact endpoint activo' });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
