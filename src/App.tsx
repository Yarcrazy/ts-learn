import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Languages from "./components/Languages";

const App = () => {
    return <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Experience/>
        <Languages/>
    </div>
}

export default App;