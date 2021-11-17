import './Single.css';

export default function Post(props) {
    return (
        <div className='singP' id='chiPost'>
            <img className='postImg' src={props.post.image} alt=''></img>
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCat">Food</span>
                    <span className="postCat">Music</span>
                    <span className="postCat">Sports</span>
                    <span className="postCat">Outdoors</span>
                </div>
                <span className="postTitle">{props.post.title}</span>
            </div>
            <p className='postdescription'>
                {props.post.content}
            </p>
            <span className='postDate'>january 12th, 2021</span>

            <input className='editButton'type="button" value='Edit'/>
            <input className='deleteButton'type="button" value='Delete'/>

        </div>
    )
}
