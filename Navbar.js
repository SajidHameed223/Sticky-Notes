import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <header>

<nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
  <div className="position-sticky">
    <div className="list-group list-group-flush my-5">
      <Link
        to={"/"}
        className="list-group-item list-group-item-action my-2 ripple active"
        aria-current="true"
      >
       <h2>TASKS</h2>
      </Link>
      <Link to={"/"} className="list-group-item list-group-item-action py-2 ripple ">
      <span>Upcoming</span>
      </Link>
      <Link to={"/"} className="list-group-item list-group-item-action py-2 ripple"
        ><span>Today</span></Link
      >
      <Link to={"/"} className="list-group-item list-group-item-action py-2 ripple"
        ><span>Calander</span></Link
      >
      <Link to={"/"} className="list-group-item list-group-item-action py-2 ripple">
        <span>Sticky Wall</span>
      </Link>
      <Link to={"/"} className="list-group-item list-group-item-action ripple active"
        ><h2>Tags</h2></Link
      >
      <Link to={"/"} className="list-group-item list-group-item-action py-2 ripple"
        ><span>Personal</span></Link
      >
      <Link to={"/"} className="list-group-item list-group-item-action py-2 ripple"
        ><span>Work</span></Link
      >
      <Link to={"/"} className="list-group-item list-group-item-action py-2 ripple"
        ><span>List</span></Link
      >
      <Link to={"/"} className="list-group-item list-group-item-action py-2 ripple"
        ><span>Click For New</span></Link
      >
    </div>
  </div>
  <div className=''>
<button className='btn btn-danger ms-4 mt-5 w-50'>Sign Out</button>
<button className='btn btn-success ms-4 mt-2 w-50'><Link to={'auth/login' } className='text-decoration-none text-white'>LogIn</Link></button>
<button className='btn btn-info ms-4 mt-2 w-50'>My Profile</button>
</div>
</nav>


<nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

 
   
    <form className="d-none d-md-flex input-group w-auto my-auto">
      <input
        autoComplete="off"
        type="search"
        className="form-control rounded"
        placeholder='Search (ctrl + "/" to focus)'
        style={{minWidth: "225px"}}
      />
      <span className="input-group-text border-0"><button className='btn btn-primary'>Search </button></span>
    </form>
  </div>
</nav>
</header>
    </>
  )
}
