import './Write.css'
import React, { Component } from 'react'
// import {  Navigate } from 'react-router-dom'

export default class Write extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: '',
          content: '',
          image: ''
        }
    }

    handleInputChange = (value, inputName) => {
        console.log('value = ', value)
        console.log('inputName = ', inputName)
        this.setState({ [inputName]: value })
    }

    render(){
    return (
        <div className='write'> 
            <form className='writeForm'>
                <div className="writeFormGroup">
                    {/* <label htmlFor="fileInput"></label> */}
                    <input type="text" name ='title' onChange={(e) => this.handleInputChange(e.target.value, 'title')} value={this.state.title} placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Share your Chicago adventure...' name='content' type='text' onChange={(e) => this.handleInputChange(e.target.value, 'content')} value={this.state.content} className='writeInputText'></textarea>
                </div>
                <div className="writeFormGroup">
                    {/* <label htmlFor="fileInput"></label> */}
                    <input type="text" onChange={(e) => this.handleInputChange(e.target.value, 'image')} value={this.state.image} placeholder='Image URL' name='image' className='writeInput' autoFocus={true} />
                </div>
                <div className="bottom">
                    <button className="writeSubmit" onClick={() => this.props.newPost(this.state)}>Submit</button>
                </div>
            </form>
        </div>
    )
}
}