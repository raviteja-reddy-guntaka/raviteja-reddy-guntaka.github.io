import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="profile-picture">
        <img src="resources/ProfilePicture.jpg" alt="Profile Picture" />
      </div>
      <div className="profile-info">
        <h1>Raviteja Guntaka</h1>
        <h2>Software Engineer</h2>
        <p>
        <strong>
          Hi, I am a Software Engineer experienced in building robust microservices and web applications, adept at integrating data from various sources and third-party APIs to streamline processes and enhance functionality. Proven ability to design and implement scalable REST webservices to meet business requirements. Passionate about leveraging technology to drive innovation and deliver exceptional user experiences.
        </strong>
        </p>
        {/* <p>
          Proud winner of the 3rd prize in the ESRI Intern Hackathon 2023.
        </p> */}
        <div className="profile-description">
          <strong>
          <ul>
            <li>Proud winner of the 3rd prize in the ESRI Intern Hackathon 2023.</li>
            <li>Achieved AIR 1921 in IIT JEE 2013, ranking in the top 0.1 percentile out of 1.5 million candidates.</li>
            <li>Served as General Secretary, Kameng Hostel, Students Gymkhana Council, IIT Guwahati (2015-16).</li>
          </ul>
          </strong>
        </div>
        <br></br>
        <div className="social-links">
          <a href="https://github.com/raviteja-reddy-guntaka" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ravi-teja-reddy/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://leetcode.com/u/twitch_tv_code_love/" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-code"></i> LeetCode
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
