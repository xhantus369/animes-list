const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const firebase_key = require('../FIREBASE_KEY.json');

initializeApp({
    credential: cert(firebase_key)
});

const db = getFirestore();

module.exports = db;