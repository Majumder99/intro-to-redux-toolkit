import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  //it is saying which state are you going to use? means which reducer
  const user = useSelector((state) => state.user.value);
  return (
    <>
      <div>Profile page</div>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p>Email : {user.email}</p>
    </>
  );
};

export default Profile;
