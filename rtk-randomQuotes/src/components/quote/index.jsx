import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./styles.module.css";
import { fetchRandomQuote } from "../../features/quote/quoteSlice";

const Quote = () => {
  const dispatch = useDispatch();

  const { quote, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, []);

  const handleNewQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div className={styles.container}>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeded" && (
        <>
          <p className={styles.quote}>"{quote}"</p>
          <p className={styles.author}>- {author}</p>
        </>
      )}
      <button onClick={handleNewQuote} className={styles.button}>
        New Quote
      </button>
    </div>
  );
};

export default Quote;
