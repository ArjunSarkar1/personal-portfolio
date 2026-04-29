import React from "react";
import Footer from "./Footer.jsx";
import { footerLinks } from "../data.js";

export default function Volunteering() {
  return (
    <div>
      <section className="blog-section">
        <div className="container">
          <div className="section-title centered">
            <span className="tagline">Extracurricular</span>
            <h2>Volunteering</h2>
            <p>Learn about my volunteering experiences and community impact.</p>
          </div>
          <div className="blog-grid">
            <article className="blog-card">
              <div className="card-content">
                <h3 style={{ color: "var(--color-text-dark)" }}>
                  Organizations & Roles
                </h3>
                <ul
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    color: "var(--color-text-dark)",
                  }}
                >
                  <li>
                    🫶 <strong> Volunteer </strong> <em> - 2025 to Present</em>{" "}
                    <br /> ↳ Assisting with the proofreading letter and
                    assisting with social media related tasks for Start With
                    Mothers.
                  </li>{" "}
                  <br />
                  <li>
                    🌎 <strong> Secretary </strong> <em> - 2024 to Present</em>{" "}
                    <br /> ↳ Assisting with the organizational needs of the
                    group for the Manitoba GIS User Group.
                  </li>{" "}
                  <br />
                  <li>
                    ♟️ <strong>Chess Club Member</strong>{" "}
                    <em> - 2024 to Present</em> <br /> ↳ Engaged in chess
                    tournaments and practices at the University of Manitoba
                  </li>{" "}
                  <br />
                  <li>
                    👨‍💻 <strong>Code Mentor</strong> <em> - 2021 to 2023</em>{" "}
                    <br /> ↳ Taught programming to high school students
                  </li>{" "}
                  <br />
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer footerLinks={footerLinks} />
    </div>
  );
}
