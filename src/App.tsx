import Avatar from "./components/Avatar";
import SocialLinks from "./components/SocialLinks";
import "./assets/styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <h1>Hans Garcia</h1>
        <p>Full Stack Developer - Blockchain - UX/UI Designer</p>
        <SocialLinks />
      </div>
    </div>
  );
}
