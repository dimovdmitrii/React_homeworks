import { connect } from "react-redux";
import styles from "./styles.module.css";

function User(userdata) {
  return (
    <div className={styles.userInfo}>
      <h2>User Info</h2>
      <p>Name: {userdata.name} </p>
      <p>Status: {userdata.status}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    status: state.status,
  };
};

export default connect(mapStateToProps)(User);
