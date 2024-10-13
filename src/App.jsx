import { Provider } from "react-redux";
import Chat from "./components/Chat";
import MessageInput from "./components/Input";
import { store } from "./store/store";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <Chat />
        <MessageInput />
      </>
    </Provider>
  );
}

export default App;
