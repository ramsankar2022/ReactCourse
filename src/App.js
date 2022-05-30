import FirstPage from "./Components/Firstpage";
import StateVariables from "./Components/StateVariables";
import ParentComponent from './Components/LifeCycle/ParentComponent'
import ChangeDivColor from './Components/ChangeDivColor'

function App() {
  return (
    <div    
      
    >
      <FirstPage />
      <hr />
      <StateVariables />
      <hr />
      <ParentComponent />      
      <hr />
      <ChangeDivColor />
    </div>
  );
}

export default App;
