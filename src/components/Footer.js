const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-wrapper">
                <div className="footer-help-section">
                    <h2 className="footer-title">Help</h2>
                    <ul className="footer-links">
                        <li className="footer-link underline-hover">Help Center</li>
                        <li className="footer-link underline-hover">Help Forum</li>
                    </ul>
                </div>
                <div className="footer-community-section">
                    <h2 className="footer-title">Community</h2>
                    <ul className="footer-links">
                        <li className="footer-link underline-hover">Blogverse Community</li>
                    </ul>
                </div>
                <div className="footer-developer-section">
                    <h2 className="footer-title">Developers</h2>
                    <ul className="footer-links">
                        <li className="footer-link underline-hover">Blogverse Api</li>
                        <li className="footer-link underline-hover">Developer Forum</li>
                    </ul>
                </div>
            </div>
            <div className="footer-extras">
                <p><span className="underline-hover">Terms of Service</span> | <span className="underline-hover">Privacy</span> | <span className="underline-hover">Content Policy</span></p>
            </div>
        </footer>
    );
}
 
export default Footer;