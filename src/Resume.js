import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Resume.css";

function Resume() {
  return (
    <>
      <div className="heading">
        <h1 className="dm-serif-display-regular">AARUSH BANSAL</h1>
        <h4 className="nunito-sans">Full-Stack Web Developer</h4>
      </div>

      <hr />

      <div className="container">
        <div>
          <div>
            <h4 className="dm-serif-display-regular">CONTACT</h4>
            <p><i className="bi bi-telephone-fill"></i> 704-791-2210</p>
            <p><i className="bi bi-envelope-fill"></i> aarushban15@gmail.com</p>
            <p><i className="bi bi-geo-alt-fill"></i> Huntersville, NC, United States</p>
            <p><i className="bi bi-globe2"></i> <a href="https://github.com/aarushban-12">github.com/aarushban-12</a></p>
            <p><i className="bi bi-globe2"></i> <a href="https://hackerrank.com/profile/aarushban15">hackerrank.com/profile/aarushban15</a></p>
          </div>
        </div>

        <div>
          <div>
            <h4 className="dm-serif-display-regular">ABOUT ME</h4>
            <p>
              I am a versatile web development passionate student ready to face new
              challenges. I have developed numerous projects over time, including
              web applications for businesses like bakeries, gyms, restaurants,
              retailers, and many more. I am prepared to help companies grow with
              my experience and expertise.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="container">
        <div>
          <div className="education">
            <h4 className="dm-serif-display-regular">EDUCATION</h4>
            <p style={{ fontWeight: "bold" }}>Computer Science</p>
            <p>Hough High School</p>
            <p>2024-2028</p>
          </div>

          <hr />

          <div className="skills">
            <h4 className="dm-serif-display-regular">KEY SKILLS</h4>
            <ul>
              <li>Frontend Development
                <ul>
                  <li>HTML, CSS Javascript, Bootstrap, React.js, jQuery</li>
                </ul>
              </li>
              <li>Backend Development
                <ul>
                  <li>Node.js, Express.js</li>
                </ul>
              </li>
              <li>Database
                <ul>
                  <li>MySQL, SQLite3</li>
                </ul>
              </li>
              <li>Version Control
                <ul>
                  <li>GitHub, Git</li>
                </ul>
              </li>
              <li>Deployment
                <ul>
                  <li>Vercel</li>
                </ul>
              </li>
              <li>Documentation
                <ul>
                  <li>MS Word, Google Docs</li>
                </ul>
              </li>
              <li>IDE
                <ul>
                  <li>VS Code, PyCharm, Terminal</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h4 className="dm-serif-display-regular">PROJECTS</h4>

            <p style={{ fontWeight: "bold", marginTop: "30px" }}><a href="https://github.com/aarushban-12/gympro-fullstack-v2">GYMPRO</a></p>
            <p>
              A gym tracking web application designed to help you through every
              step of your fitness journey.
            </p>

            <p style={{ fontWeight: "bold", marginTop: "30px" }}><a href="https://ecommerce-store-beta-seven.vercel.app/">TRADEHAVEN</a></p>
            <p>
              An online retail platform where you can browse, shop, and purchase
              a wide variety of products easily and securely. Discover great
              deals, enjoy seamless checkout, and have your favorite items
              delivered right to your door.
            </p>

            <p style={{ fontWeight: "bold", marginTop: "30px" }}> <a href="https://tasty-bites-rose.vercel.app/">TASTY BITES</a></p>
            <p>
              A restaurant website where you can browse the menu, discover dishes,
              and order your favorite meals online.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
