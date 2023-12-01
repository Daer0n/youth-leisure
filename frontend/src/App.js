import React, { useState } from "react";

import TeacherComponent from "./components/TeacherComponent/TeacherComponent";
import ChildrenComponent from "./components/ChildrenComponent/ChildrenComponent";
import PartyComponent from "./components/PartyComponent/PartyComponent";
import CircleComponent from "./components/CircleComponent/CircleComponent";
import TransitionComponent from "./components/TransitionComponent/TransitionComponent";

import "./App.css";

const App = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleLinkClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div className="mainPage">
            <nav className="navbar navbar-expand w-100 navbar-dark bg-primary">
                <a className="navbar-brand text-center w-100" href="#">
                    <span className="logo-text">Youth leisure</span>
                </a>
            </nav>

            <div className="row flex-grow-1">
                <div className="col-3 bg-secondary p-3 d-flex flex-column sidebar">
                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => handleLinkClick("teacher")}
                    >
                        Teachers
                    </button>
                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => handleLinkClick("children")}
                    >
                        Childrens
                    </button>
                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => handleLinkClick("party")}
                    >
                        Groups
                    </button>
                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => handleLinkClick("circle")}
                    >
                        Cirles
                    </button>
                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => handleLinkClick("transition")}
                    >
                        Transitions
                    </button>
                    <div className="mt-auto"></div>
                </div>

                <div className="col-9 p-0">
                    {selectedComponent === "teacher" && <TeacherComponent />}
                    {selectedComponent === "children" && <ChildrenComponent />}
                    {selectedComponent === "party" && <PartyComponent />}
                    {selectedComponent === "circle" && <CircleComponent />}
                    {selectedComponent === "transition" && <TransitionComponent />}
                </div>
            </div>
        </div>
    );
};

export default App;
