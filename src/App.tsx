import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./context/Context";
import { router } from "./routes/Routes";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ContextProvider>
  );
}

export default App;
