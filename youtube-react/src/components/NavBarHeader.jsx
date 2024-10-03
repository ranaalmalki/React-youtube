import { Link } from "react-router-dom"

function NavBarHeader() {
  return (
    <div>
        
        NavBarHeader
        <br/>
<Link to="/home">Home</Link>
<br/>

<Link to="/Login">Login</Link>
<br/>

<Link to="/signup">siginup</Link>

    </div>
  )
}

export default NavBarHeader