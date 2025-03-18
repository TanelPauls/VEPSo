import Footer from "./components/Footer.jsx";
import "./App.css";
import Gamewindow from "./components/Gamewindow.jsx";

function App() {
  return (
    <>
      <div className="containerWholeScreen">
        <div className="containerForContent">
          <div className="containerNotFooter">
            <div className="containerGameWindow">
              <Gamewindow />
            </div>
          </div>
          <div className="containerFooter">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
