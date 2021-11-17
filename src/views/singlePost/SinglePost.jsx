import './SinglePost.css';
// import Post from "../../components/post/Post";
import React, { Component } from 'react'
import { database } from "../../config/Fire";
import { ref, onValue } from 'firebase/database'
import Single from '../../components/single/Single'

export default class SinglePost extends Component {
    constructor(props){
        super(props);
        this.state = {
          posts: []
        }
      }
    
      componentDidMount() {
        console.log('hello')
        const postsRef = ref(database, '/posts');
        onValue(postsRef, (snapshot) =>{
          const data = snapshot.val()
          this.setState({posts:data})
        })
      }

    render(){
    return (
        <>
                <div className="singlePostWrapper">
                {this.state.posts.map(p=> <Single post={p} />) }
            </div>
        </>
    )
}
}