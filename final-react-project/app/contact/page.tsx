export default function Home(){
return(
<>
    <header>
        <header>
            <ul className = "navigation">
                <li className = "navigation-option"><a href="index.html">Home</a></li>
                <li className = "navigation-option"><a href="about.html">About</a></li>
                <li className = "navigation-option"><a href="projects.html">Projects</a></li>
                <li className = "navigation-option"><a href="contact.html">Contact</a></li>
                <li className = "navigation-option"><a href="socials.html">Socials</a></li>
                <li className = "navigation-option"><a href="novels.html">Novels</a></li>
            </ul>
        </header>
    </header>
    <body>
        <section id="contact">
            <h2>Have Questions? Send Me A Message.</h2>
            <form method = "POST">
                <div className = "input-row">
                    <div className = "input-group">
                        <label htmlFor = "first-name">First Name</label>
                        <input id = "first-name" type = "text" placeholder = "Enter your first name" required/>
                    </div>
                    <div className = "input-group">
                        <label htmlFor = "last-name">Last Name</label>
                        <input id = "last-name" type = "text" placeholder = "Enter your last name" required/>
                    </div>
                </div>
                <div className = "input-row">
                    <div className = "input-group">
                        <label htmlFor = "subject">Subject</label>
                        <select id = "subject">
                            <option value = "general" selected>General</option>
                            <option value = "delivery">Coding Related</option>
                            <option value = "refund">Writing Related</option>
                        </select>
                    </div>
                    <div className = "input-group">
                        <label htmlFor = "email">Email</label>
                        <input id = "email" type = "text" placeholder = "Enter your email" required/>
                    </div>
                </div>
                <div className = "input-group">
                    <label htmlFor = "message">Message</label>
                    <textarea id = "message" name = "message" placeholder = "Enter a message" required></textarea>
                </div>
                <button>Contact Me</button>
            </form>
        </section>
    </body>
    <footer>
        <p>Copyright 2024</p>
    </footer>
</>
);
}