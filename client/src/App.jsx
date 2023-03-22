import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";



const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/admin", element: <Admin /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
