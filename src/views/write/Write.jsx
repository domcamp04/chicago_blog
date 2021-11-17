import './Write.css'

export default function Write() {
    return (
        <div className='write'> 
            <form className='writeForm'>
                <div className="writeFormGroup">
                    {/* <label htmlFor="fileInput"></label> */}
                    <input type="text" name ='title' placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Share your Chicago adventure...' name='content' type='text' className='writeInputText'></textarea>
                </div>
                <div className="writeFormGroup">
                    {/* <label htmlFor="fileInput"></label> */}
                    <input type="text" placeholder='Image URL' name='image' className='writeInput' autoFocus={true} />
                </div>
                <div className="bottom">
                    <button className="writeSubmit">Submit</button>
                </div>
            </form>
        </div>
    )
}
