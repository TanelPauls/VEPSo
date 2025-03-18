import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="containerWholeScreen">
        <div className="containerForContent">
          <div className="containerNotFooter">asd</div>
          <div className="containerFooter">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
