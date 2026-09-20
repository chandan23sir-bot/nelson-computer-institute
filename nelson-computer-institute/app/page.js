import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="top">
        <div className="brand">
          <div className="logo">NCI</div>

          <div>
            <h1>NELSON COMPUTER INSTITUTE</h1>
            <p>Skill Education • Practical Training • Better Careers</p>
          </div>
        </div>

        <nav>
          <Link className="active" href="/">
            Home
          </Link>

          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#student">Student Zone</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

          <Link className="login" href="/login">
            Admin / Branch Login
          </Link>

          <a className="apply" href="#contact">
            Apply Now →
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <div className="eyebrow">
            SKILL EDUCATION • PRACTICAL TRAINING • BETTER CAREERS
          </div>

          <h2>
            Skill Education for
            <br />
            <span>A Brighter Tomorrow</span>
          </h2>

          <p>
            Build confidence, practical ability and career-ready knowledge
            with supportive training and digital student services at Nelson
            Computer Institute.
          </p>

          <div className="heroBtns">
            <a className="btn primary" href="#courses">
              Explore Courses
            </a>

            <a className="btn outline" href="#contact">
              Apply Now
            </a>
          </div>
        </div>

        <div className="heroCards">
          <div className="sideCard">
            🎓 <b>Long Term Courses</b>
          </div>

          <div className="sideCard">
            🎓 <b>Short Term Courses</b>
          </div>

          <div className="sideCard">
            🎓 <b>NIELIT Courses</b>
          </div>

          <div className="sideCard">
            📝 <b>Apply for Courses</b>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="sectionTitle">
          About Nelson Computer Institute
        </div>

        <h3>Learn practical skills. Build your career.</h3>

        <p>
          Nelson Computer Institute provides computer education and practical
          training with student-focused support and digital services.
        </p>
      </section>

      <section id="courses" className="section alt">
        <div className="sectionTitle">Our Courses</div>

        <div className="courseGrid">
          <div className="course">
            <span>Long Term</span>
            <h4>DCA</h4>
            <p>6 Months • Practical Training</p>
          </div>

          <div className="course">
            <span>Long Term</span>
            <h4>ADCA</h4>
            <p>12 Months • Practical Training</p>
          </div>

          <div className="course">
            <span>NIELIT</span>
            <h4>CCC</h4>
            <p>3 Months • Practical Training</p>
          </div>

          <div className="course">
            <span>Short Term</span>
            <h4>Tally + GST</h4>
            <p>3 Months • Practical Training</p>
          </div>

          <div className="course">
            <span>Short Term</span>
            <h4>MS Office</h4>
            <p>3 Months • Practical Training</p>
          </div>

          <div className="course">
            <span>Long Term</span>
            <h4>Web Development</h4>
            <p>6 Months • Practical Training</p>
          </div>
        </div>
      </section>

      <section id="student" className="section">
        <div className="sectionTitle">Student Zone</div>

        <div className="studentGrid">
          <div>
            🎫
            <b>Admission</b>
            <small>Apply for a new course</small>
          </div>

          <div>
            🔎
            <b>Student Verification</b>
            <small>Verify student details</small>
          </div>

          <div>
            📜
            <b>Certificate</b>
            <small>Certificate services</small>
          </div>

          <div>
            📊
            <b>Results</b>
            <small>View examination results</small>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <div className="sectionTitle">Contact Us</div>

          <h3>Nelson Computer Institute</h3>

          <p>
            Meel Chauraha, Kaisarganj Road, Siddhaur,
            Barabanki, Uttar Pradesh – 225413
          </p>

          <p>
            <b>Mobile:</b> 8707599763 • 9792121300 • 8090851447
          </p>
        </div>

        <div className="contactBox">
          <a href="tel:8707599763">📞 Call Now</a>

          <a
            href="https://wa.me/918707599763"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat with us
          </a>
        </div>
      </section>

      <footer>
        © 2026 Nelson Computer Institute • Developed by{" "}
        <b>Chandan Sir</b>
      </footer>
    </main>
  );
}
