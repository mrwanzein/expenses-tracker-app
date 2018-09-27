import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA6HYWa3LZs7DA1cX1yN5u0TzZJs2xTu-s",
    authDomain: "expensia-fb6fa.firebaseapp.com",
    databaseURL: "https://expensia-fb6fa.firebaseio.com",
    projectId: "expensia-fb6fa",
    storageBucket: "expensia-fb6fa.appspot.com",
    messagingSenderId: "358471648381"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

/****** Creating first set of data ******/

// database.ref().set({
//     name: 'Teh ultimate one',
//     age: 24,
//     isSingle: true,
//     location: {
//         galaxy: 'Aroxia-2b',
//         distanceFromEarth: '4 million LY'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((err) => {
//     console.log('This failed', err);
// });

// database.ref().set('This is some data'); will override everything

// database.ref('notes').set(notes);

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React, Angular and python'
// });

// database.ref('expenses').push({
//         description: 'Some description',
//         note: 'Get sht done',
//         amount: 2300,
//         createdAt: 1203412903
// });

// database.ref('expenses').push({
//     description: 'Some description1',
//     note: 'Get sht done',
//     amount: 2300,
//     createdAt: 1203412903
// });

// database.ref('expenses').push({
//     description: 'Some description2',
//     note: 'Get sht done',
//     amount: 2300,
//     createdAt: 1203412903
// });

// database.ref('expenses').once('value')
// .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

/****** asyncronous actions ******/

// database.ref('age').set(24);
// database.ref('location/distanceFromEarth').set('20 LY');

// database.ref('attributes').set({
//     powers: ['Fly', 'Matter Manipulation'],
//     needRecharge: true
// });

// database.ref('isSingle').remove(); or set(null)

// database.ref().update({  can update, create and delete with update()
//     'location/city': 'Kripchy'
// });

/****** fetching data ******/

// database.ref().once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((err) => {
//     console.log('Error fetching data', err);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val()); on() lets you subscribe to dynamic changes and off() to unsubscribe
// }, (err) => {
//     console.log('Error with data fetching', err);
// });

// you can trace value that changed, removed and added with 
// on.('child_changed'), on.('child_removed'), on.('child_added')