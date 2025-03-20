import Footer from "./components/Footer.jsx";
import "./App.css";
import Gamewindow from "./components/Gamewindow.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* display notification to the user */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            fontSize: "1.2rem",
            padding: "16px",
          },
        }}
      />
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
