import { useState } from "react";
import jwt_decode from "jwt-decode";

const Create = () => {
    const accessToken = localStorage.getItem('accessToken');
    const decodedToken = jwt_decode(accessToken);
    const author_id = decodedToken.id;
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const publishBlog = () => {
        fetch('http://localhost:5000/blog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content, author_id })
        })
            .then((res) => res.text())
            .then((data) => {
                setTitle('');
                setContent('');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="create">
            <div className="create-container">
                <h1 className="create-title">Create Blog</h1>
                <form>
                    <input type="text" placeholder="Blog Title" onChange={ e => setTitle(e.target.value) } />
                    <textarea placeholder="Write Blog Here..." onChange={ e => setContent(e.target.value) }></textarea>
                </form>
                <button onClick={ publishBlog }>Publish</button>
            </div>
        </div>
    );
}
 
export default Create;