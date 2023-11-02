import React from 'react';
//import Login from './auth/Login';
//import Signup from './auth/Signup';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Noteverse Homepage</h1>
      </header>
      <section className="dashboard-main">
        <div className="dashboard-row">
          <div className="dashboard-card card-notes">
            <h2>Your Notes</h2>
            <p>View, edit, and organize your notes here. Stay organized in style.</p>
          </div>
          <div className="dashboard-card card-collaboration">
            <h2>Collaboration</h2>
            <p>Collaborate with others on shared notebooks. Work together seamlessly.</p>
          </div>
        </div>
        <div className="dashboard-row">
          <div className="dashboard-card card-search">
            <h2>Search</h2>
            <p>Quickly find the notes you need with powerful search. Find what you're looking for in an instant.</p>
          </div>
          <div className="dashboard-card card-creativity">
            <h2>Creativity</h2>
            <p>Express your ideas with colorful notes. Unleash your creativity and make your notes come alive.</p>
          </div>
        </div>
      </section>
      <section className="dashboard-animations">
        {/* Add your crazy and satisfying animations here */}
      </section>
      <footer className="dashboard-footer">
        <p>Start taking organized notes with Noteverse today!</p>
      </footer>

      <div className="login-signup-buttons">
        <button className="dashboard-button">Login</button>
        <button className="dashboard-button colorful-button">Signup</button>
      </div>
    </div>
  );
};

export default Dashboard;
