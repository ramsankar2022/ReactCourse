import FirstPage from "./Components/Firstpage";
import StateVariables from "./Components/StateVariables";
import ParentComponent from "./Components/LifeCycle/ParentComponent";
import ChangeDivColor from "./Components/ChangeDivColor";
import APIRequest from "./Components/APIRequest";
import Login from "./Components/Login";
import MaterialUISample from "./Components/MaterialUISample";

function App() {
  return (
    <div>
      <FirstPage />

      <StateVariables />

      <ChangeDivColor />

      <ParentComponent />

      <APIRequest />

      <Login />

      <MaterialUISample />
    </div>
  );
}

export default App;
