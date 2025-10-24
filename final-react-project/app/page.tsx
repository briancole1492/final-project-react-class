import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <header>
          <ul className="navigation">
            <li className="navigation-option">
              <a href="index.html">Home</a>
            </li>
            <li className="navigation-option">
              <a href="about.html">About</a>
            </li>
            <li className="navigation-option">
              <a href="projects.html">Projects</a>
            </li>
            <li className="navigation-option">
              <a href="contact.html">Contact</a>
            </li>
            <li className="navigation-option">
              <a href="socials.html">Socials</a>
            </li>
            <li className="navigation-option">
              <a href="novels.html">Novels</a>
            </li>
          </ul>
        </header>
        <body>
          <div className="portfolio-title">
            <h1> Brian Xavier Cole </h1>
            <h2 className="portfolio-subtitle"> Front-End Web Developer </h2>
          </div>
          <img
            src="https://m.media-amazon.com/images/S/amzn-author-media-prod/f06vjji6s9dnojghu15fkbcost.jpg"
            className="profile-pic"
          />
        </body>
        <footer>
          <p>Copyright 2024</p>
        </footer>
      </main>
    </>
  );
}
