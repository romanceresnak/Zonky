import React from "react";
import UserLayout from "../../hoc/user";
import UpdatePresonalInfo from "./update_person_info";
const UpdateProfile = () => {
  return (
    <UserLayout>
      <h1>Profile</h1>
      <UpdatePresonalInfo />
    </UserLayout>
  );
};

export default UpdateProfile;
