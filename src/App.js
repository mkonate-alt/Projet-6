import AppRouter from "./AppRouter";
import React from "react"; 
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer';

import "./App.css"


function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;