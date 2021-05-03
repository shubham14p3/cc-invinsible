import './App.css';
import SlotM from "./SlotMach";
function App() {
  return (
    <>
      <h1 className="heading_style"> 🎰 Welcome to <span style={{fontWeight:"bold"}}>Slot Machine 🎰 </span> </h1>
      <div>
      <SlotM x='😃' y='😃' z='😃'/>
      <SlotM x='😃' y='😈' z='😈'/>
      <SlotM x='😈' y='😈' z='😈'/>
      <SlotM x='😃' y='🐌' z='🐌'/>
       </div>       
    </>
  );
}

export default App;
