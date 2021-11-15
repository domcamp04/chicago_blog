import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img className='postImg' src='https://via.placeholder.com/150' alt=''></img>
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCat">Food</span>
                    <span className="postCat">Music</span>
                    <span className="postCat">Sports</span>
                    <span className="postCat">Outdoors</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <p className='postdescription'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ullam omnis ea at esse incidunt ducimus porro quam nemo qui! Modi voluptatibus error expedita nihil beatae id labore at harum?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ullam omnis ea at esse incidunt ducimus porro quam nemo qui! Modi voluptatibus error expedita nihil beatae id labore at harum?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ullam omnis ea at esse incidunt ducimus porro quam nemo qui! Modi voluptatibus error expedita nihil beatae id labore at harum?
            </p>
            <span className='postDate'>january 12th, 2021</span>

        </div>
    )
}
