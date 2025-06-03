import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar=() =>{

  const user = useSelector((store)=> store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout= async ()=>{
    try{
      const res = await axios.post(BASE_URL + "/logout", {}, {withCredentials: true});
      dispatch(removeUser());
      return navigate("/Login");
    } catch(err){
      console.log(err);
    }
  }
  return(
    <>
      <div className="navbar bg-neutral shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
        </div>
        {user &&
          <div className="flex gap-2">
          <div className="dropdown dropdown-end mx-5">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                  <img
                  alt="user profile"
                  src={user.profilePictureUrl ?? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}/>
              </div>
            </div>
              <p>{user.userName}</p>
            <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                  <Link to="/profile" className="justify-between">
                  Profile
                  </Link>
              </li>
              <li><a>Settings</a></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        </div>
        }
      </div>
    </>
  )
};
export default NavBar;