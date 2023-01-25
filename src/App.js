import AllRoutes from "./AllRoutes/AllRoutes";
import CreateUser from "./CreateUser/CreateUser";
import Navbar from "./Navbar/Navbar";
import Table from "./Table/Table";

function App() {
  return (
    <div className="App ">

      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
      {/* <Table></Table> */}

    </div>
  );
}

export default App;
