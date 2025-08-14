import "./App.css";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Приветственный текст</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Добро пожаловать в приложение! Нажмите кнопку ниже, чтобы открыть
          диалоговое окно.
        </Typography>
        <Button variant="contained" onClick={handleOpen}>
          Открыть диалоговое окно
        </Button>
      </Container>
      <Dialog open={open}>
        <DialogTitle>Это диалоговое окно с приветственным текстом</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это пример диалогового окна, созданного с использованием
            Material-UI. Нажмите кнопку "закрыть", чтобы закрыть его.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="error">
            закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
