import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Home from './views/home/HomePage';
import Single from "./components/single/Single";
import Write from "./views/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  { database } from './config/Fire'
import {  ref, set, onValue, remove } from "firebase/database";
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
        user: null,
        posts: []
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

    componentDidMount() {
      console.log('hello')
      this.authListener()
      const postsRef = ref(database, '/posts');
      console.log('postsRef', postsRef)
      onValue(postsRef, (snapshot) =>{
        const data = snapshot.val()
        this.setState({posts:data})
      })
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

    // newPost = (d) => {
    //   d.preventDefault();

    //   let postCount = document.getElementById('chiPost').length 

    //   const title = d.target.title.value;
    //   const content = d.target.content.value;
    //   const image = d.target.image.value;

    //   database.ref('posts/' + postCount.toString()).set({
    //     id: postCount +1,
    //     title: title,
    //     content: content,
    //     image: image
    //   })  
    // }


    newPost = (inputValues) => {
      // d.preventDefault();
      const { title, content, image } = inputValues

      // let postCount = 100

      // const title = title;
      // const content = content;
      // const image = image;

      console.log(title)

      // database.ref('posts/' + postCount.toString()).set({
      //   id: postCount +1,
      //   title: title,
      //   content: content,
      //   image: image
      // })  

      set(ref(database, 'posts/' + this.state.posts.length.toString()), {
        id: this.state.posts.length +1,
        title: title,
        content: content,
        image: image
      });
      console.log(title)
    }

    deletePost = () => {
      let postsId = 1
      console.log('clicked')
      remove(ref(database, '/posts/' + postsId)).then(() => {
          console.log('this worked')
      })
    }

  //   handleRemove = () => {
  //     return firebase.database().ref('posts/').child('id').remove();
  // }
  
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
      console.log('state', this.state);
      return (
        <div>
          <Router>
            <Navbar logout={this.logout} user={this.state.user}/>
              <Routes>
              <Route path='/' element={<Home posts={this.state.posts}/>} />
              <Route path='/login' element={<Login login={this.login} user={this.state.user}/>} />
              <Route path='/register' element={<Register register={this.register} user={this.state.user}/>} />
              {/* <Route path='/post/:postid' element={< Single posts={this.post} deletePost={this.deletePost}/>} /> */}
              <Route path='/post/:postid' component={Single} element={< Single posts={this.post} deletePost={this.deletePost}/>} />

              <Route path='/write' element={< Write newPost={this.newPost} user={this.state.user} />} />
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
