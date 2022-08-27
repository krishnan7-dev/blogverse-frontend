import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogUrl } from "../apiurls";

const BlogPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        fetch(`${ blogUrl }/${ id }`)
            .then(res => res.text())
            .then(data => {
                const { title, content, author } = JSON.parse(data)[0];
                setTitle(title);
                setContent(content);
                setAuthor(author);
            });
    }, [id]);

    return (
        <div className="blog-wrapper">
            <div className="blog-post-container">
                <div className="blog-title">
                    <h1>{ title }</h1>
                    <h2>Written by: { author }</h2>
                </div>
                <p className="blog-content">{ content }</p>
            </div>
        </div>
    );
}
 
export default BlogPost;