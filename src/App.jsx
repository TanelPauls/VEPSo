import Footer from "./components/Footer.jsx";
import GameWindow from "./components/GameWindow.jsx";

function App() {
  return (
    <>
      <div
        className="justify-content-center w-75 border border-dark "
        style={{ height: "75vh" }}
      >
        <GameWindow />
      </div>
      <Footer />
    </>
  );
}

export default App;
