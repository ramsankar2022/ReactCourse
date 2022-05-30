// import FirstPage from "./Components/Firstpage";
// import StateVariables from "./Components/StateVariables";
import ParentComponent from './Components/LifeCycle/ParentComponent'
import ChangeDivColor from './Components/ChangeDivColor'

function App() {
  return (
    <div
      className="App"
      style={{
        marginLeft: 500,
        marginTop: 50,
        borderColor: "black",
        borderStyle: "solid",
        padding:10,
        width:400,
        textAlign:"left"
      }}
    >
      {/* <FirstPage />
      <StateVariables /> */}
      <ParentComponent />      
      <hr />
      <ChangeDivColor />
    </div>
  );
}

export default App;
