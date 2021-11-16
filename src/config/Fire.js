import { initializeApp } from "firebase/app";
import { getDatabase, ref, onDisconnect } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDoGKHYtgHDh405gIpcmWuu4Wu9O_y-Zs4",
    authDomain: "chicago-blog.firebaseapp.com",
    projectId: "chicago-blog",
    storageBucket: "chicago-blog.appspot.com",
    messagingSenderId: "809105754810",
    appId: "1:809105754810:web:fdb8af0119037eb1edd083",
    databaseURL: 'https://chicago-blog-default-rtdb.firebaseio.com/',
  };

  const app = initializeApp(firebaseConfig);
  console.log(app);
  console.log('dominick');
  

  export const database = getDatabase(app);
  console.log(database);


const presenceRef = ref(database, "disconnectmessage");
// Write a string when this client loses connection
onDisconnect(presenceRef).set("I disconnected!");

// database.ref().once('value')
//     .then(snapshot => snapshot.val())
//     .then(rawData=> {
//       console.log(rawData)
    

//     let blogList = document.getElementById('chiPost')
      
//       rawData.forEach((arrayItem, Index) => {
//         let title = arrayItem.title;
//         let content = arrayItem.content;
//         let image = arrayItem.image
//           blogList.innerHTML += `<img class='postImg />${image}</img>`
//           blogList.innerHTML += `<span class='postTitle />${title}</span>`
//           blogList.innerHTML += `<p class='postDescription />${content}</p>`
//       })
//     })

// const dbRef = ref(getDatabase());
// get(dbRef).then((snapshot) => {
//   if (snapshot.exists()) {
//     let rawData = snapshot.val
//     console.log(snapshot.val(rawData))

//     let blogList = document.getElementById('chiBlog');

//     rawData.forEach((arrayItem, Index) => {
//       let title = arrayItem.title;
//       let content = arrayItem.content;
//       let image = arrayItem.image;

//       blogList.innerHTML += `<img class='postImg />${image}</img>`
//       blogList.innerHTML += `<span class='postTitle />${title}</span>`
//       blogList.innerHTML += `<p class='postDescription />${content}</p>`
//     })


//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
  
  export default app;