import { Link } from "react-router-dom";

const Blog = ({ title, author }) => {
    return (
        <div>
            <Link to='/blogs'><h1>{ title }</h1></Link>
            <h2>{ author }</h2>
        </div>
    );
}
 
export default Blog;