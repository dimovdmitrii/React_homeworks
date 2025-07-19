import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10");

      // Берем случайного пользователя из массива results
      const users = response.data.results;
      const randomUser = users[Math.floor(Math.random() * users.length)];

      setUser(randomUser);
    } catch (error) {
      console.error("Error by loading data of user: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div className={styles.profileContainer}>
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className={styles.profileImage}
      />
      <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={fetchUser} className={styles.button}>
        Load New User
      </button>
    </div>
  );
}

export default UserProfile;
