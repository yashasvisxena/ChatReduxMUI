import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import {store} from "./store/store.js";
import ChatInterface from "./components/Chat";
import Navbar from "./components/Navbar.jsx";
import MessageInput from "./components/Input.jsx";

const theme = createTheme({
  // Customize your theme here
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
        <ChatInterface />
        <MessageInput/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
