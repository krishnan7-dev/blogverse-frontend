const Create = () => {
    return (
        <div className="create">
            <div className="create-container">
                <h1 className="create-title">Create Blog</h1>
                <form>
                    <input type="text" placeholder="Blog Title" />
                    <textarea name="" cols="30" rows="10" placeholder="Write Blog Here..."></textarea>
                </form>
                <button>Publish</button>
            </div>
        </div>
    );
}
 
export default Create;