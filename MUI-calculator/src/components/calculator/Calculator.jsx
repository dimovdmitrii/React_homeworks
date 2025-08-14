import { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };
  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };
  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };
  const handleDivision = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Calculator
      </Typography>
      <TextField
        label="Number 1"
        variant="outlined"
        margin="normal"
        fullWidth
        value={num1}
        onChange={handleNum1Change}
        type="number"
        style={{ marginBottom: "20px" }}
      />
      <TextField
        label="Number 2"
        variant="outlined"
        margin="normal"
        fullWidth
        value={num2}
        onChange={handleNum2Change}
        type="number"
        style={{ marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddition}
        fullWidth
        sx={{ mt: 2 }}
      >
        Сложить
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubtraction}
        fullWidth
        sx={{ mt: 2 }}
      >
        Вычесть
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleMultiplication}
        fullWidth
        sx={{ mt: 2 }}
      >
        Умножить
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDivision}
        fullWidth
        sx={{ mt: 2 }}
      >
        Разделить
      </Button>
      {result !== null && (
        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
          Результат: {result}
        </Typography>
      )}
    </Container>
  );
}
export default Calculator;
