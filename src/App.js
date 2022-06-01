import FirstPage from "./Components/Firstpage";
import StateVariables from "./Components/StateVariables";
import ParentComponent from "./Components/LifeCycle/ParentComponent";
import ChangeDivColor from "./Components/ChangeDivColor";
import APIRequest from "./Components/APIRequest";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <FirstPage />
      <hr />
      <StateVariables />
      <hr />
      <ChangeDivColor />
      <hr />
      <ParentComponent />
      <hr />
      <APIRequest />
      <hr />
      <Login />
    </div>
  );
}

export default App;
