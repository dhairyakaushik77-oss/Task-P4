import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="banner">
        <img src="/images/Uni.jpg" alt="Personal website banner" />
        <div className="banner-text">Hey, I'm Dhairya Kaushik</div>
      </section>

      <section id="about" className="profile">
        <h2>About Me</h2>
        <h3>Dhairya Kaushik</h3>
        <p>I am studying Bachelor of Artificial Intelligence and Machine Learning.</p>
        <h3>My Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
        </ul>
      </section>

      <section id="work" className="portfolio">
        <h2>My Projects</h2>
        <div className="projects">
          <div className="project">
            <img src="/images/Grade-Checker.png" alt="Student Grade Checker" />
            <h3>Student Grade Checker</h3>
            <p>A simple project that checks student marks and displays the grade and pass or fail status.</p>
          </div>
          <div className="project">
            <img src="/images/Calculator.png" alt="Simple Calculator" />
            <h3>Simple Calculator</h3>
            <p>A simple calculator project that can be used to perform basic mathematical calculations.</p>
          </div>
          <div className="project">
            <img src="/images/Registration-Form.png" alt="Student Registration Form" />
            <h3>Student Registration Form</h3>
            <p>A registration form designed to collect student information such as name, email, mobile number and department.</p>
          </div>
        </div>
      </section>

      <section className="education">
        <h2>Education Details</h2>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>University</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bachelor of Artificial Intelligence and Machine Learning</td>
              <td>Deakin University</td>
              <td>Currently Studying</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="gallery" className="gallery">
        <h2>My Gallery</h2>
        <div className="gallery-container">
          <img src="/images/deakin-university.webp" alt="Deakin University" />
          <img src="/images/Laptop.webp" alt="Laptop" />
          <img src="/images/Desert.jpg" alt="Mountain" />
          <img src="/images/Myself.jpeg" alt="Personal photo" />
          <img src="/images/Outom.jpg" alt="Outdoor view" />
          <img src="/images/waterfall.jpg" alt="Waterfall" />
        </div>
      </section>
    </div>
  );
}

export default Home;