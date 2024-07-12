import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  // const [mode, setMode] = useState("light"); //weather dark mode is enabled or not

  // const toggleMode = ()=>{
  //   if(mode === 'light'){
  //     setMode("dark");
  //   }else{
  //     setMode("light");
  //   }
  // }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <>
      <Router>
        <Navbar title="Textify" about="About" />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm
              heading="Enter the text to analyze below"
              showAlert={showAlert}
            />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
