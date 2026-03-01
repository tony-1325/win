import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import "./App.css";

function App() {
  // RouterProvider merender rute yang sudah Anda definisikan
  return <RouterProvider router={router} />;
}

export default App;
