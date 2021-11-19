import './Single.css';
import React, { Component } from 'react'
import Sidebar from '../sidebar/Sidebar'


export default class Post extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
    return (
        <>
        <div className='singP' id='chiPost'>
            <img className='postImg' src="https://img1.10bestmedia.com/Images/Photos/242411/p-MagMil8_54_990x660_201404250120.jpg" alt=''></img>
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCat">Food</span>
                    <span className="postCat">Music</span>
                    <span className="postCat">Sports</span>
                    <span className="postCat">Outdoors</span>
                </div>
                <span className="postTitle">The Mag Mile Lights Festival</span>
            </div>
            <p className='postdescription'>
            "The magic of the holidays, Chicago style, is captured once again for viewers around the country with musical performances, beloved Walt Disney World characters, and dazzling fireworks, as more than a million twinkling Michigan Avenue lights set the stage for the holiday season and the broadcast of the spectacular 30th annual BMO Harris Bank, Magnificent Mile Lights Festival.
            </p>
            <span className='postDate'>january 12th, 2021</span>

            <input className='editButton'type="button" value='Edit'/>
            <input className='deleteButton'type="button" onClick={this.props.deletePost} value='Delete'/>

        </div>
        <Sidebar className='singSide'/>
        </>
    )
}
}