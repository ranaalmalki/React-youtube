import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom";

function Login(setUse) {
    const [username,setUser]=useState("")
    const [password,setPassword]=useState("")
const {userId}=useParams()
const navigate = useNavigate()




    const inputUserName=(e)=>{
        e.preventDefault();
        setUser(e.target.value)

    }

    const inputPassowrd =(e)=>{
        e.preventDefault();
        setPassword(e.target.value)
    }

    const submitSend=(e)=>{
        if(username.trim()!=="" && password.trim()!==""){
            
        e.preventDefault();
        axios.get(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/login`)

        .then((res)=>{
            console.log(res);
            const user = res.data.find(user =>user.username === username && user.password ===password);
            if(user){
                Swal.fire({
                    title: `Wellcome back ${user.username}!`,
                    icon: "success"
                }).then(() => {
                    setUser(user);
                    console.log("Navigating to user page with ID:", user.id);
                    navigate(`/userpage/${user.id}`, { state: { username: user.username } }); // تأكد من أن هذا السطر في داخل then
                });
            }else{
                alert("invalid")
            }
              
            })
            
        }else{
            alert("plese fill in both username and password")
        }
    }
    
  return (
    <div className="flex justify-center items-center p-64 ">
        <div className="card w-96 border-8 ">
            
            <div className="card-body text-center">
                <h1 className="bg-blue-700 text-white text-2xl">Login</h1>
<form onSubmit={submitSend} className=" flex flex-col gap-3">
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Username" value={username} onChange={inputUserName}/>
</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" placeholder="password" value={password} onChange={inputPassowrd} />
</label>
<button className="btn">Login</button>
</form>
<Link to="/signup">Signup ?</Link>

</div>
    </div>
    </div>
  )
}

export default Login