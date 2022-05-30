import FirstPage from "./Components/Firstpage";
import StateVariables from "./Components/StateVariables";
import ParentComponent from "./Components/LifeCycle/ParentComponent";
import ChangeDivColor from "./Components/ChangeDivColor";

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
    </div>
  );
}

export default App;
