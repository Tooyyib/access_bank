import ReactDOM from 'react-dom/client'
import './index.css'
import PageNotFound from './pages/pageNotfound/PageNotFound.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Signup from './pages/signup/Signup.jsx';
import Login from './pages/login/Login.jsx';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/home/Home.jsx';




const router = createBrowserRouter([
{
  path: "/",
  element: <Home />
},
{
  path: "/home",
  element: <Home />
},
{
  path: "/login",
  element: <Login />
},
{
  path: "/signup",
  element: <Signup />
},
{
  path: "/dashboard",
  element: <Dashboard />
},
{
  path: "/*",
  element: <PageNotFound />
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);