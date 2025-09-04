// src/pages/login/index.jsx
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css"; // Импортируем стили

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const { token, status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, [token, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleChange}
          className={styles.input}
        />
        <input type="submit" value="Login" className={styles.submitBtn} />{" "}
      </form>
    </div>
  );
}

export default Login;
