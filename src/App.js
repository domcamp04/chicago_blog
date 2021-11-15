import Navbar from "./components/navbar/Navbar";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Home from './routes/home/HomePage';
import Single from "./routes/single/Single";
import Write from "./routes/write/Write";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes  } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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

const database = getDatabase(app);
console.log(database);

const dbRef = ref(getDatabase());
get(dbRef).then((snapshot) => {
  if (snapshot.exists()) {
    let rawData = snapshot
    console.log(snapshot.val(rawData))

    let kekambasList = document.getElementById;

    rawData.forEach((arrayItem) => {
        let firstName = arrayItem.first_name;
        let lastName = arrayItem.last_name;
        kekambasList.innerHTML += `li class='list-group-item'>${firstName} ${lastName}`
    })

  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

const auth = getAuth(app);
console.log(auth);

onAuthStateChanged(auth, user => {
  if(user != null){
    console.log('logged in!');
  } else {
    console.log('no user')
  }
})

function App() {
  console.log('hello');
  return (
    <Router >
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={< Login />} />
          <Route path='/register' element={< Register />} />
          <Route path='/post/:postId' element={< Single />} />
          <Route path='/write' element={< Write />} />
        </Routes>
    </ Router>
  );
}

// const app = initializeApp(firebaseConfig);
// console.log(app)
// console.log('dominick')

// const database = getDatabase(app);
// console.log(database)

export default App;
