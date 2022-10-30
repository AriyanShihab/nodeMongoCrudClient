import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact";
import Home from "./components/Home";
import Update from "./components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch(`http://localhost:5000/contacts`),
  },
  {
    path: "/addContact",
    element: <AddContact></AddContact>,
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/contacts/${params.id}`),
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
