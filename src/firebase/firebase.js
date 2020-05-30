import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


















// database.ref('exenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((snap) => {
//         expenses.push({
//             id: snap.key,
//             ...snap.val()
//         });
//     });

//     console.log(expenses);
// });

// //child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_change
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').push({

// })

// // database.ref('expenses').once('value').then((snapshot) => {

// //     const expenses = [];

// //     snapshot.forEach((snap) => {
// //         expenses.push({
// //             id: snap.key,
// //             ...snap.val()
// //         });
// //     });

// //     console.log(expenses);

// // });


// // database.ref('notes').push({
// //     title: 'Second Note',
// //     body: 'This is my note'
// // });


// // database.ref('expenses').push({
// //     description: 'Expense 1',
// //     note: 'this is the note',
// //     amount: 33.33,
// //     createdAt: 123
// // });
// // database.ref('expenses').push({
// //     description: 'Expense 2',
// //     note: 'this is the note',
// //     amount: 33.33,
// //     createdAt: 123
// // });
// // database.ref('expenses').push({
// //     description: 'Expense 3',
// //     note: 'this is the note',
// //     amount: 33.33,
// //     createdAt: 123
// // });

// // database.ref('notes/-M8OrLMS8iKECc77gSAX').update({
// //     body: 'go there'
// // })

// // database.ref('location/city').once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     }).catch((error) => {
// //         console.log(error);
// //     });

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val()
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// //database.ref().off('value');

// // database.ref().set({
// //     name: 'Alberto Lopez Bastos',
// //     age: 33,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Moron',
// //         country: 'Argentina'
// //     }
// // }).then(() => {
// //     console.log('data is saved');
// // }).catch((error) => {
// //     console.log(error);
// // });

// // database.ref().remove()
// //     .then(() => {
// //         console.log('removed!');
// //     }).catch((error) => {
// //         console.log(error);
// //     });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // }).then(() => {
// //     console.log('removed!');
// // }).catch((error) => {
// //     console.log(error);
// // });
