import WriteImage from '../images/write.jpg';
import InfoImage from '../images/info.jpg';
import CommunityImage from '../images/community.jpg'

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <section>
                <div className="home-content">
                    <h1 className="home-title">Write Amazing Blogs</h1>
                    <p className="home-body">Share you knowledge with the people out there. Don't be afraid, there will be others who share the same interests.</p>
                </div>
                <img src={ WriteImage } alt="" />
            </section>
            <section>
                <img src={ InfoImage } alt="" />
                <div className="home-content">
                    <h1 className="home-title">Explore Topics</h1>
                    <p className="home-body">Be updated on the current trends or learn something new.</p>
                </div>
            </section>
            <section>
                <div className="home-content">
                    <h1 className="home-title">Join</h1>
                    <p className="home-body">Sign Up now and be a part of this wonderful community.</p>
                    <Link to="/signup">Join Us</Link>
                </div>
                <img src={ CommunityImage } alt="" />
            </section>
        </div>
    );
}
 
export default Home;