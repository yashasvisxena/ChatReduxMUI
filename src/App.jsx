import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import {store} from "./store/store.js";
import ChatInterface from "./components/Chat";
import Navbar from "./components/Navbar.jsx";
import MessageInput from "./components/Input.jsx";



function App() {
  return (
    <Provider store={store}>
        <CssBaseline />
        <Navbar/>
        <ChatInterface />
        <MessageInput/>
    </Provider>
  );
}

export default App;
