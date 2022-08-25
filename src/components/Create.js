import { useState } from "react";
import jwt_decode from "jwt-decode";

import { blogUrl } from "../apiurls";

const Create = () => {
    const accessToken = localStorage.getItem('accessToken');
    const decodedToken = jwt_decode(accessToken);
    const author = decodedToken.username;
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const publishBlog = () => {
        fetch(blogUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content, author })
        })
            .then((res) => res.text())
            .then((data) => {
                setTitle('');
                setContent('');
                alert('Blog published successfully');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="create">
            <div className="create-container">
                <h1 className="create-title">Create Blog</h1>
                <form>
                    <input type="text" placeholder="Blog Title" value={ title } onChange={ e => setTitle(e.target.value) } />
                    <textarea placeholder="Write Blog Here..." value={ content } onChange={ e => setContent(e.target.value) }></textarea>
                </form>
                <button onClick={ publishBlog }>Publish</button>
            </div>
        </div>
    );
}
 
export default Create;