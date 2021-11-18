import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import "./HomePage.css";
import React, { Component } from 'react'
// import { database } from "../../config/Fire";
// import { ref, onValue } from 'firebase/database';


export default class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      // posts: []
    }
  }

  // componentDidMount() {
  //   console.log('hello')
  //   const postsRef = ref(database, '/posts');
  //   console.log(postsRef)
  //   onValue(postsRef, (snapshot) =>{
  //     const data = snapshot.val()
  //     this.setState({posts:data})
  //   })
  // }
  

  render(){
    console.log('this.props', this.props)
  return(
    <>
      <Header />
      <div className="home">
        <Sidebar />
       {this.props.posts.map(p=> <Post post={p} />) }
      </div>
    </>
  );
}
}
