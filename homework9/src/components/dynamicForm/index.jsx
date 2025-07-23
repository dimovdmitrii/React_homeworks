import React from "react";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

function DynamicForm() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const firstFieldValue = watch("firstField");
  const isSecondFieldVisible = firstFieldValue && firstFieldValue.length >= 5;

  const onSubmit = (data) => {
    console.log(data);
    alert("The Form was success send!");
  };

  return (
    <div className={styles.container}>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="firstField">First Field :</label>
          <input
            id="firstField"
            {...register("firstField", {
              required: "This field is required",
              minLength: {
                value: 5,
                message: "Min length - 5 character!",
              },
            })}
            className={errors.firstField ? styles.inputError : ""}
          />
          {errors.firstField && (
            <p className={styles.errorMessage}>{errors.firstField.message}</p>
          )}
        </div>
        {isSecondFieldVisible && (
          <div className={styles.formGroup}>
            <label htmlFor="secondField">Second Field:</label>
            <input
              id="secondField"
              {...register("secondField", {
                required: "This field is required",
              })}
              className={errors.secondField ? styles.inputError : ""}
            />
            {errors.secondField && (
              <p className={styles.errorMessage}>
                {errors.secondField.message}
              </p>
            )}
          </div>
        )}
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default DynamicForm;
