import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

function CatImage() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCatImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      if (response.data && response.data.length > 0) {
        setImageUrl(response.data[0].url);
      } else {
        setError("Loading image of the cat failed.");
      }
    } catch (err) {
      console.error("Error by getting image.", err);
      setError("Error loading image. Please, try one more time");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.continer}>
      <h2 className={styles.title}>Random Cats!</h2>
      <div className={styles.imageWrapper}>
        {loading && <p>Loading image...</p>}
        {error && <p className={styles.error}>{error}</p>}
        {!loading && !error && imageUrl && (
          <img src={imageUrl} alt="random cat" className={styles.image} />
        )}
      </div>

      <button onClick={fetchCatImage} className={styles.button}>
        Load new Image
      </button>
    </div>
  );
}
export default CatImage;
