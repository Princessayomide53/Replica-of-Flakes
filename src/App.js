import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
// import Preloader from "./components/Preloader/Preloader";

function App() {
  return (
    <div className="overflow-hidden">
      {/* <Preloader /> */}
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
