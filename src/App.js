import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import NavBar from "./components/Navbar/NavBar";
import Slogan from "./components/Slogan/Slogan";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.addEventListener("resize", handleSize);
  }, []);
  useEffect(() => {
    if (windowSize.width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);
  return (
    <div className="App">
      <h1 className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to bg-pink-300 dark:text-white text-black md:px-20">
        <NavBar isMobile={isMobile} />
        <Slogan />
        <Content />
      </h1>
    </div>
  );
}

export default App;
