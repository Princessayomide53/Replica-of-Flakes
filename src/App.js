import "./App.css";
import Hero from "./components/Hero/Hero";
import Data from "./components/Main/Data";
import NavBar from "./components/NavBar/NavBar";
// import Preloader from "./components/Preloader/Preloader";

function App() {
  return (
    <div className="overflow-hidden">
      {/* <Preloader /> */}
      <NavBar />
      <Hero />
      <Data />
    </div>
  );
}

export default App;
