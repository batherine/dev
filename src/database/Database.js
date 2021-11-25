//import { initializeApp } from "firebase/app";
//import { getDatabase, onValue, ref } from "firebase/database";

//const app = initializeApp(firebaseConfig);
//const db = getDatabase(app);

//const firebase = require("firebase-admin");
// console.log(getDatabase(app));
// const db = getDatabase();
// console.log(ref(db, "books/" + 1));
// set(ref(db, "users/" + "hippo"), {
//   username: "hippo",
//   email: "hippo@gmail.com",
// });
//const hippoRef = ref(db, "users/hippo");
//onValue(hippoRef, (snapshot) => {
//  console.log(snapshot.val());
//});

// function newDatabase() {
//firebase.database().goOnline();
//   const root = firebase.database(); //getDatabase(firebase).ref();
//   console.log(root);
//   var rootRef = root.ref();
//   rootRef.once("value").then(function (snapshot) {
//     return snapshot.exists();
//   });
// }
//export default db;
