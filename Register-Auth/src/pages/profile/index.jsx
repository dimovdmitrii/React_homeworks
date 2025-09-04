import { jwtDecode } from "jwt-decode";
import { logout } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const tokenData = token ? jwtDecode(token) : null;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={styles.profileContainer}>
      {" "}
      <p>{tokenData ? tokenData.user.id : "Login in to account"}</p>
      <button onClick={handleLogout} className={styles.logoutBtn}>
        {" "}
        Logout
      </button>
    </div>
  );
}

export default Profile;
