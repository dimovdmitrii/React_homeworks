import { connect } from "react-redux";
import { useState } from "react";
import { setUserInfo } from "../../redux/actions";
import styles from "./styles.module.css";

function UserForm({ setUserInfo }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !status.trim()) {
      setError("Both fields are required!");
      return;
    }
    setUserInfo({ name, status });
    setName("");
    setStatus("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>Update user Info</h2>
      {error && <label style={{ color: "red" }}>{error}</label>}
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter name"
      />
      <input
        type="text"
        value={status}
        onChange={(event) => setStatus(event.target.value)}
        placeholder="Enter Status"
      />
      <button type="submit">Update</button>
    </form>
  );
}

const mapDispatchToProps = {
  setUserInfo,
};

export default connect(null, mapDispatchToProps)(UserForm);
