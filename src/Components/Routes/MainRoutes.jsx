import react,{useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { About } from "../pages/About"
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
import { RequiredAuth } from "./RequiredAuth";

const Mainroutes = () => {
 

  return (
    <>
      <Navbar/>
      <Routes>
       {/* keep all the routes here  */}
       <Route path="/" element={<Home/>}/>
       <Route path="About" element={<About/>}/>
       <Route path="Login" element={<Login/>}/>
       <Route path="books/:id" element={<SingleBook/>}/>
       <Route path="Logout" element={<Logout/>}/>
       <Route path="books/:id/edit" element={<EditBookData/>}/>
       {/* /books/* route need to be protected */}
       <Route
          path="/books"
          element={
            <RequiredAuth>
              <Books />
            </RequiredAuth>
          }
        ></Route>
      </Routes>
    </>
  );
};
export default Mainroutes;
