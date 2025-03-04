import Avatar from "./components/Avatar";
import SocialLinks from "./components/SocialLinks";
import "./assets/styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <h1>HansXX Garcia</h1>
        {/* <div className="row">
          <h3>Desarrollador Full Stack | Blockchain | Docker</h3> */}
        <p>Full Stack Developer | Blockchain | Docker</p>
        {/* </div> */}
        <SocialLinks />
      </div>
    </div>
  );
}
