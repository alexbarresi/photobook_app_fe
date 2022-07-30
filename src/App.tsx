import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import PhotoView from "./pages/PhotoView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Photobook APP</h1>
        <p>
          Use this app to view albums of photos, you can also filter them by
          user ID
        </p>
      </header>
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photoView/" element={<PhotoView />} />
      </Routes>
        
      </>
      
    </div>
  );
}

export default App;
