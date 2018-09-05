import React, { Component } from "react";
import UserLayout from "../../../hoc/user";
import { connect } from "react-redux";
import { getCasualUsers } from "../../../actions/user_actions";
class AddRoles extends Component {
  state = {};

  componentDidMount = () => {
    this.props.dispatch(getCasualUsers());
  };

  showUsers = () =>
    this.props.user.casualUsers
      ? this.props.user.casualUsers.map((item, i) => (
          <div key={item._id}>
            {item.name} {item.lastname} {item._id}
          </div>
        ))
      : null;
  render() {
    return (
      <UserLayout>
        <h2>Adding roles</h2>
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

export default connect(mapStateToProps)(AddRoles);
