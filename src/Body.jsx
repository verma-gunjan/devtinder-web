import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import axios from "axios";
import { BASE_URL } from "./utils/constants";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./utils/userSlice";
function Body(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const fetchUser = async () =>{
    try{
      if (userData) return;
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));

    } catch(err){
      if (err.status == 401){
        navigate("/Login");
      }
      console.log(err);
    }
  };
  useEffect(()=>{
      fetchUser();
  }, []);
  return(
    <>
      <NavBar/>
      {/* any children route of body will render in outlet */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;