import Avatar from "./components/Avatar";
import SocialLinks from "./components/SocialLinks";
import "./assets/styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <h1>Hans Rafael</h1>
        {/* <div className="row">
          <h3>Desarrollador Full Stack | Blockchain | Docker</h3> */}
        <p>Desarrollador Full Stack | Blockchain | Docker</p>
        {/* </div> */}
        <SocialLinks />
      </div>
    </div>
  );
}
