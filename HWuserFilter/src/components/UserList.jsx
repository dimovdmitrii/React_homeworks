import React from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";
import styles from "../styles/UserList.module.css";

const UserList = ({ users, filter }) => {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.userListContainer}>
      {filteredUsers.length > 0 ? (
        <ul className={styles.userList}>
          {filteredUsers.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p className={styles.noUsers}>Users not find.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps)(UserList);
