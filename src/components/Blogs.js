import { useEffect, useState } from "react";

import Blog from "./Blog";

import { blogUrl } from "../apiurls";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(blogUrl)
            .then(res => res.text())
            .then(blogs => setBlogs(JSON.parse(blogs)));
    });

    return (
        <div className="blogs-container">
            {blogs.map(blog =>  <Blog title={ blog.title } author={ blog.author }/>)}
        </div>
    );
}
 
export default Blogs;