import { useLocation } from "react-router-dom"

function UserPage() {
    const location =useLocation()
    const {username}=location.state || {}
  return (
    <div>UserPage
wellcom {username}
    </div>
  )
}

export default UserPage