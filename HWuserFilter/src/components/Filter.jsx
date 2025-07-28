import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import React from "react";
import styles from "../styles/Filter.module.css";

const Filter = ({ setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="filterInput">Filter of name:</label>
      <input
        type="text"
        id="filterInput"
        onChange={handleFilterChange}
        placeholder="Enter the name"
        className={styles.filterInput}
      />
    </div>
  );
};
const mapDispatchToProps = {
  setFilter,
};
export default connect(null, mapDispatchToProps)(Filter);
