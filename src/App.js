import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src="https://www.youtube.com/embed/ZUPL69dox-4"
        title="Embedded Convai Character"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}

export default App;
