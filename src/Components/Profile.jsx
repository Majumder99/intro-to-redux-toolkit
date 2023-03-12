import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  //it is saying which state are you going to use? means which reducer
  //used fo accessing valuess
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
  return (
    <>
      <div style={{ color: theme }}>
        <h1>Profile page</h1>
        <p>Name : {user.name}</p>
        <p>Age : {user.age}</p>
        <p>Email : {user.email}</p>
      </div>
    </>
  );
};

export default Profile;
