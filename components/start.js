import React from 'react';
import { Link } from 'react-router-dom';
import './start.css';

const Start = () => {
  return (
    <div className="start-page">
      {/* Header Section */}
      <header className="start-header">
        <div className="header-container">
          <h1 className="site-title">Qonnect</h1>
          <div className="header-right">
            <nav className="nav-bar">
              <ul>
                <li><Link to="/politics">Politics</Link></li>
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/health">Health</Link></li>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/entertainment">Entertainment</Link></li>
                <li><Link to="/science">Science</Link></li>
                <li><Link to="/lifestyle">Lifestyle</Link></li>
              </ul>
            </nav>
            <div className="auth-buttons">
              <Link to="/signup" className="signup-btn">Sign Up</Link>
              <Link to="/login" className="login-btn">Login</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Tagline Section */}
      <div className="tagline">
        <h3>Welcome to the world of <span>ideas</span> & perspectives!</h3>
      </div>

      {/* Live Updates Section */}
      <div className="live-updates">
        <span className="red-dot"></span>
        <p>Write a brief description of the article to spark people's interest.</p>
      </div>

      {/* Main Content Section */}
      <div className="content-container">
        {/* Left Sidebar */}
       

        {/* Center Content */}
        <main className="center-content">
          {/* Image Placeholder - Insert Background in CSS */}
        </main>

        {/* Right Sidebar */}
       
      </div>
    </div>
  );
};

export default Start;
