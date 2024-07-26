import CategoryTable from "./components/CategoryTable";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      {/* <Sidebar/> */}
      <Navbar/>
      <Dashboard/>
        <CategoryTable/>
    </div>
  );
}

export default App;
