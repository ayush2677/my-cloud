const functions = require('firebase-functions');

exports.uploadFile = functions.https.onRequest((request, response) => {
    response.send("This is your Cloud Function for uploading files!");
});
