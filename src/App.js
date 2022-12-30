import React,{useState, useEffect} from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Header from "./Components/global/Header";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/projects";
import About from "./Components/aboutMe/aboutMe";
import Footer from "./Components/global/Footer";
import { AnimatePresence } from "framer-motion";
import ReactGa from "react-ga";
import "./App.css";

function App() {
    const location = useLocation();

    useEffect(() => {        
        ReactGa.initialize('UA-198105493-1');
        ReactGa.pageview(window.location.pathname + window.location.search);
        ReactGa.pageview("/website");
        ReactGa.pageview("/website/projects");       
    }, []);
    
    return (
        <div className="App">
        <Header/>
        <AnimatePresence exitBeforeEnter>            
            <Switch location={location} key={location.key}>                
                <Route path="/website/projects" component={Projects} />
                <Route path="/website/about" component={About} />
                <Route path="/website" component={Home} />
                <Redirect to="/website" />
            </Switch>            
        </AnimatePresence>
        <Footer/>
        </div>
    );
}

export default App;
