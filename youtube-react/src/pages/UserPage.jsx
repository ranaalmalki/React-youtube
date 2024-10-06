import NavBarHeader from "../components/NavBarHeader"
import { useParams, useLocation } from "react-router-dom";
import Home from "./Home";
import VideoBehiend from "./VideoBehiend";
import VideoUser from "./VideoUser";

function UserPage() {
    const { id } = useParams(); 
    const location = useLocation();
    const { username } = location.state || {};
     return (
    <div className="flex flex-wrap justify-center">
        <NavBarHeader user={username}/>
        {username ? <p>Welcome, {username}!</p> : <p>Loading...</p>}
        <VideoUser/>
        </div>
  )
}

export default UserPage