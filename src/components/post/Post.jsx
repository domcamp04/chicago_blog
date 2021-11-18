import './post.css'
import { Link } from 'react-router-dom'

export default function Post(props) {
    return (
        <div className='post' id='chiPost'>
            <img className='postImg' src={props.post.image} alt=''></img>
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCat">Food</span>
                    <span className="postCat">Music</span>
                    <span className="postCat">Sports</span>
                    <span className="postCat">Outdoors</span>
                </div>
                {/* <Link to='/post/{props.posts.index}' className="postTitle">{props.post.title}</Link> */}
                <Link to={`/post/${props.post.id}`}>{props.post.title} </Link>
            </div>
            <p className='postdescription'>
                {props.post.content}
            </p>
            <span className='postDate'>january 12th, 2021</span>

        </div>
    )
}
