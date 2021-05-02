import './App.css';
import SlotM from "./SlotMach";
function App() {
  return (
    <>
      <h1 className="heading_style"> Welcome to <span style={{fontWeight:"bold"}}>Slot Machine </span> </h1>
      <div>
      <SlotM x='A' y='A' z='B'/>
      <SlotM x='A' y='A' z='B'/>
      <SlotM x='A' y='A' z='B'/>
       </div>      
    </>
  );
}

export default App;
