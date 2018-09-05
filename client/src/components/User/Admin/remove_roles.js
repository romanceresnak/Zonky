import React, { Component } from "react";
import UserLayout from "../../../hoc/user";
import { connect } from "react-redux";
import { getCasualUsers } from "../../../actions/user_actions";
import { Button } from "@material-ui/core";
class RemoveRoles extends Component {
  state = {};

  componentDidMount = () => {
    this.props.dispatch(getCasualUsers());
  };

  showUsers = () =>
    this.props.user.casualUsers
      ? this.props.user.casualUsers.map((item, i) => (
          // <div className="category_item" key={item._id}>
          <Button name="adsas" text="adsa" />
          // {/* {item.name} {item.lastname} {item._id} */}
          // </div>
        ))
      : null;

  render() {
    return (
      <UserLayout>
        <h2>Removing roles</h2>
        <div className="left">
          <div className="brands_container">{this.showUsers()}</div>
        </div>
      </UserLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(RemoveRoles);
