import React from "react";
import UpdateSiteInfo from "./update_site_info";
import UserLayout from "../../../hoc/user";
const ManageSite = () => {
  return (
    <div>
      <UserLayout>
        <UpdateSiteInfo />
      </UserLayout>
    </div>
  );
};

export default ManageSite;
