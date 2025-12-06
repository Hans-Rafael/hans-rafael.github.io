import Avatar from "./components/Avatar";
import "./assets/styles.css";

export default function App() {
  const copyEmail = () => {
    navigator.clipboard.writeText('hansgarcia@tutamail.com');
    alert('Email copiado al portapapeles!');
  };

  return (
    <div className="card">
      <Avatar />
      <h1>HANS GARCIA</h1>
      
      <div className="content-grid">
        <div className="roles">
          <p>Full Stack Web Developer & Blockchain</p>
          <p>UX/UI Web and Mobile Designer</p>
          <p>Tester QA</p>
        </div>
        
        <div className="projects">
          <a href="https://github.com/Hans-Rafael" target="_blank">GitHub Projects</a>
          <a href="https://gist.github.com/Hans-Rafael" target="_blank">GistHub Projects</a>
          <div className="center-buttons">
            <a href="https://www.behance.net/hans_garcia" target="_blank" className="behance-btn">Behance Projects</a>
            <a href="#" target="_blank" className="qa-btn">QA Projects</a>
          </div>
        </div>
      </div>
      
      <div className="contact">
        <h3>Contact me</h3>
        <div className="contact-buttons">
          <a href="https://linkedin.com/in/hans-garcia-developer" target="_blank">LinkedIn</a>
          <button onClick={copyEmail} className="email-btn">Email</button>
        </div>
      </div>
    </div>
  );
}
