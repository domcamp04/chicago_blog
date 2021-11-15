import './SinglePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://via.placeholder.com/150" alt="" className="singlePostImage" />
                <h1 className='singlePostTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
            <p className='singlePostDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloremque esse molestias itaque id recusandae incidunt illo, blanditiis tenetur, possimus, molestiae consectetur iste suscipit commodi facere corporis et facilis sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloremque esse molestias itaque id recusandae incidunt illo, blanditiis tenetur, possimus, molestiae consectetur iste suscipit commodi facere corporis et facilis sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloremque esse molestias itaque id recusandae incidunt illo, blanditiis tenetur, possimus, molestiae consectetur iste suscipit commodi facere corporis et facilis sapiente.</p>
            <br></br>
            <div className="singPostInfo">
                <span className='singlePostAuthor'>Author: Dominick</span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
                <input className='editButton'type="button" value='Edit'/>
                <input className='deleteButton'type="button" value='Delete'/>
        </div>
    )
}
