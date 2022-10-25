import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";
import { ContextProvider } from "./ContextProvider";
import { ContextProviderStates } from "./ContextProviderStates";
import { useContext } from "react";

function App() {
  const value = ContextProviderStates();
  const theme = useContext(value);

  return (
    //TODO: fix data-theme
    <ContextProvider.Provider value={value} data-theme={theme}>
      <div className="app">
        {/* <section> */}
        <Navbar />
        <Home />
        {/* </section>
        <section> */}
        <Skills />

        <Projects />

        <Contact />
        {/* </section> */}
      </div>
    </ContextProvider.Provider>
  );
}

export default App;
