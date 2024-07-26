import CategoryTable from "./components/CategoryTable";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <Sidebar/> */}
      <Dashboard/>
        <CategoryTable/>
    </div>
  );
}

export default App;
