const functions = require('firebase-functions');
const { google } = require('googleapis');
const path = require('path');
const admin = require('firebase-admin');
const serviceAccount = require(path.join(__dirname, 'path-to-your-service-account-file.json'));

// Initialize Firebase Admin SDK
admin.initializeApp();

// Authenticate Google Sheets API
const sheets = google.sheets('v4');
const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'], // Correct scope for Sheets API
});

// Define your Google Sheet ID and sheet name
const SPREADSHEET_ID = '1YZ8LICXO1GkruOMJndUjTh4tdIh5qVnOGaEaf8NYFU0'; // Correct Spreadsheet ID
const SHEET_NAME = 'Sheet1'; // Replace with the name of the sheet/tab in your spreadsheet

// Firebase Function to handle form submission
exports.submitForm = functions.https.onCall(async (data, context) => {
  const { name, email, message } = data;

  // Get the Google Sheets API client
  const client = await auth.getClient();

  // Define the data to append to the sheet
  const newRow = [
    name,
    email,
    message,
    new Date().toISOString(), // Timestamp for when the data is added
  ];

  try {
    // Append data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`, // Adjust range depending on columns
      valueInputOption: 'RAW',
      resource: {
        values: [newRow],
      },
      auth: client,
    });

    return { message: 'Form submitted successfully!' };
  } catch (error) {
    console.error('Error writing to Google Sheets:', error);
    return { message: 'Failed to submit the form. Please try again later.' };
  }
});
