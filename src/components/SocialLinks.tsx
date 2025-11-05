export default function SocialLinks() {
  const copyEmail = () => {
    navigator.clipboard.writeText('hansgarcia@tutamail.com');
    alert('Email copiado al portapapeles!');
  };

  return (
    <div className="social-links">
      <a href="https://github.com/Hans-Rafael" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/hans-garcia-developer" target="_blank">LinkedIn</a>
      <a href="https://gist.github.com/Hans-Rafael " target="_blank">GistHub</a>
      <a href="https://www.behance.net/hans_garcia " target="_blank" rel="noopener noreferrer" className="behance-btn">Behance</a>
      <button onClick={copyEmail} className="email-btn">Email</button>
    </div>
  );
}
