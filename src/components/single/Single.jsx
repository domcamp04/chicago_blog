import './Single.css';

export default function Post(props) {
    
    return (
        <div className='singP' id='chiPost'>
            <img className='postImg' src='' alt=''></img>
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCat">Food</span>
                    <span className="postCat">Music</span>
                    <span className="postCat">Sports</span>
                    <span className="postCat">Outdoors</span>
                </div>
                <span className="postTitle">'</span>
            </div>
            <p className='postdescription'>
                ''
            </p>
            <span className='postDate'>january 12th, 2021</span>

            <input className='editButton'type="button" value='Edit'/>
            <input className='deleteButton'type="button" onClick={props.deletePost} value='Delete'/>

        </div>
    )
}
