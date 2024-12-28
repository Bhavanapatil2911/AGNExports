const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp();

// Firebase Realtime Database or Firestore reference
const db = admin.firestore(); // Firestore example, or you can use admin.database() for Realtime Database

// Firebase Function to handle form submission
exports.submitForm = functions.https.onCall(async (data, context) => {
  const { name, email, message } = data;

  // Create a document reference for Firestore
  const newLeadRef = db.collection('leads').doc(); // For Firestore, we can dynamically create a document
  const newLead = {
    name,
    email,
    message,
    timestamp: admin.firestore.FieldValue.serverTimestamp(), // Automatically adds a timestamp
  };

  try {
    // Store the form data in Firestore
    await newLeadRef.set(newLead);

    return { message: 'Form submitted successfully!' };
  } catch (error) {
    console.error('Error saving form data to Firestore:', error);
    return { message: 'Failed to submit the form. Please try again later.' };
  }
});
