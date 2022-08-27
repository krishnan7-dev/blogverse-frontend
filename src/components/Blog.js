import { Link } from "react-router-dom";

const Blog = ({ id, title, author }) => {
    return (
        <div className='blog-link'>
            <Link to={ `/blogs/${ id }` }><h1>{ title }</h1></Link>
            <h2>{ author }</h2>
        </div>
    );
}
 
export default Blog;