import { Link } from "react-router-dom"

function NavBarHeader(user) {
    const handleLogout = () => {
        setUser(null); 
      };  return (
    <div className=" fixed top-0 flex-no-wrap flex w-full  lg:flex-wrap lg:justify-start lg:sticky">
        

<div className="navbar bg-base-100">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl" to="/home"><img
    
    src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"
    width={80}
    /></Link>
  </div>

  <div className="flex-none gap-8">
  <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-badge" />
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg> */}
    </div>

    <button className="btn btn-outline rounded-badge ">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="  border border-solid rounded-full border-black" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
<Link to="/Login">Login</Link>
    </button>
  </div>
  <div className="">

  </div>
</div>

    </div>
  )
}

export default NavBarHeader