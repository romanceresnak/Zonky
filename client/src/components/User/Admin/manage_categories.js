import React from "react";
import UserLayout from "../../../hoc/user";
import ManagaBrands from "./manage_brands";
import ManageWoods from "./manage_woods";

const ManageCategories = () => {
  return (
    <UserLayout>
      <ManagaBrands />
      <ManageWoods />
    </UserLayout>
  );
};

export default ManageCategories;
