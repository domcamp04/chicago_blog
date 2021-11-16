import './Write.css'

export default function Write() {
    return (
        <div className='write'> 
            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"></label>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Share your Chicago adventure...' type='text' className='writeInputText'></textarea>
                </div>
                <div className="bottom">
                <input type="file" id='fileInput' className='fileInput' />
                <button className="writeSubmit">Submit</button>
                </div>
            </form>
        </div>
    )
}
