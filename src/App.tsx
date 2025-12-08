import Avatar from "./components/Avatar";
import "./assets/styles.css";

export default function App() {
  const handleEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = 'contact@hans-rafael.dev';
    window.location.href = `mailto:${email}`;
    setTimeout(() => {
      navigator.clipboard.writeText(email);
      alert('Email copiado al portapapeles!');
    }, 1000);
  };

  return (
    <div className="card">
      <Avatar />
      <h1>HANS GARCIA</h1>
      
      <div className="content-grid">
        <div className="role-row">
          <p>Full Stack Web Developer & Blockchain</p>
          <div className="buttons-row">
            <a href="https://github.com/Hans-Rafael" target="_blank">GitHub Projects</a>
            <a href="https://gist.github.com/Hans-Rafael" target="_blank">GistHub Projects</a>
          </div>
        </div>
        
        <div className="role-row">
          <p>UX/UI Web and Mobile Designer</p>
          <a href="https://www.behance.net/hans-rafael" target="_blank" className="behance-btn">Behance Projects</a>
        </div>
        
        <div className="role-row">
          <p>Tester QA</p>
          <a href="https://github.com/Hans-Rafael/QA-Projects" target="_blank" className="qa-btn">QA Projects</a>
        </div>
      </div>
      
      <div className="contact">
        <h3>Contact me</h3>
        <div className="contact-buttons">
          <a href="https://www.linkedin.com/in/hans-developer" target="_blank">LinkedIn</a>
          <a href="mailto:contact@hans-rafael.dev" onClick={handleEmail} className="email-btn">Email</a>
        </div>
      </div>
    </div>
  );
}
