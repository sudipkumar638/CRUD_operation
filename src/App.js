import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "./Actions/Action";
import { getAllData } from './Services/ApiCalls';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getUserDetails()
  }, [])

  async function getUserDetails() {
    try {
      const userData = await getAllData();
      console.log(userData)
      dispatch(getData(userData));
    }
    catch (e) {
      console.log("Some Error Occure During ApiCall")
    }
  }




  return (
    <div className="App ">
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
    </div>
  );
}


export default App;
