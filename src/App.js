import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Home from './views/home/HomePage';
import Single from "./views/single/Single";
import Write from "./views/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import app, { database } from './config/Fire'
// import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';

  // const database = getDatabase(app);
  // console.log(database);

  // const dbRef = ref(getDatabase());
  // get(dbRef).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     let rawData = snapshot
  //     console.log(snapshot.val(rawData))
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  // onAuthStateChanged(auth, user => {
  //   if(user != null){
  //     console.log('logged in!');
  //   } else {
  //     console.log('no user')
  //   }
  // })

  // function register (e) {
  //   e.preventDefault();
  //   const first_name = e.target.first_name.value
  //   const last_name = e.target.last_name.value
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   const confirmPass = e.target.confirmPass.value;
  //   if (password !== confirmPass){
  //     alert('Your passwords are not the same')
  //     return
  //   }
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential)
  //       const user = userCredential.user;
  //       console.log(user)
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }

  // authListener = () =>{
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user){
  //       this.setState({user})
  //     } else {
  //       this.setState({user: null})
  //     }
  //   })
  // }

  export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: null
      }
    }
  
    authListener = () =>{
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user){
          this.setState({user})
        } else {
          this.setState({user: null})
        }
      })
    }
  
    componentDidMount(){
      this.authListener()
    }
  
    register = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmPass = e.target.confirmPass.value;
      if (password !== confirmPass){
        alert('Your passwords are not the same')
        return
      }
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential)
          const user = userCredential.user;
          console.log(user)
        })
        .catch(err => {
          console.error(err)
        })
    }

    newPost = (d) => {
      d.preventDefault();

      let postCount = document.getElementById('chiPost').length 

      const title = d.target.title.value;
      const content = d.target.content.value;
      const image = d.target.image.value;

      database.ref('posts/' + postCount.toString()).set({
        id: postCount +1,
        title: title,
        content: content,
        image: image
      })
    }

    

  
    logout = () =>{
      const auth = getAuth();
      signOut(auth).then(()=>{})
        .catch(err => console.error(err));
        // <Redirect to='/' />
    }
  
    login = (e) =>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(u => console.log(u))
        .catch(err => {
          alert(err)
        })
    }
  
    render() {
      console.log(app);
      return (
        <div>
          <Router>
            <Navbar logout={this.logout} user={this.state.user}/>
              <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login login={this.login} user={this.state.user}/>} />
              <Route path='/register' element={<Register register={this.register} user={this.state.user}/>} />
              <Route path='/post/:postId' element={< Single newPost={this.newPost} />} />
              <Route path='/write' element={< Write />} />
            </Routes>
          </Router>
  
        </div>
      )
    }
  }



//   render() {
//     console.log('hello');
//     return (
//       <Router >
//           <Navbar/>
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/login' element={< Login />} />
//             <Route path='/register' element={< Register />} />
//             <Route path='/post/:postId' element={< Single />} />
//             <Route path='/write' element={< Write />} />
//           </Routes>
//       </ Router>
//     );
// }

// const app = initializeApp(firebaseConfig);
// console.log(app)
// console.log('dominick')

// const database = getDatabase(app);
// console.log(database)

// export default App;
