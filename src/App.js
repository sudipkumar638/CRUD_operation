import AllRoutes from "./AllRoutes/AllRoutes";
import CreateUser from "./CreateUser/CreateUser";
import Navbar from "./Navbar/Navbar";
import Table from "./Table/Table";
import Getdataredducer from "./Reducers/Getdataredducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import arr from "./AllData"
import { getData } from "./Actions/Action";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getData(arr));

  }, [])
  return (
    <div className="App ">
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
      {/* <Table></Table> */}

    </div>
  );
}

export default App;
