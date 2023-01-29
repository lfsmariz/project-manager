import "./App.css";
import { ContextProvider } from "./context/Context";
import Home from "./pages/Home/Home";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Home />
      </div>
    </ContextProvider>
  );
}

export default App;
