import Footer from "./components/Footer.jsx";
import GameWindow from "./components/GameWindow.jsx";

function App() {
  return (
    <>
      <div className="d-flex vh-100 vw-100 justify-content-center align-items-center">
        <div
          className="bg-light border d-flex justify-content-center align-items-center"
          style={{ width: "75vw", height: "75vh" }}
        >
          <GameWindow />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
