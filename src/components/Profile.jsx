import React from "react";
import { useSelector } from "react-redux";
function Profile(){
  const user = useSelector((store) => store.user);
  return(
    <>
      <h1>this is Profile</h1>
    </>
  )
};
export default Profile;