import React, { useState } from "react";

import TeacherComponent from "./components/TeacherComponent";
import ChildrenComponent from "./components/ChildrenComponent";
import PartyComponent from "./components/PartyComponent";

const App = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleLinkClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div className="h-100 d-flex flex-column">
            <nav className="navbar navbar-expand w-100 navbar-dark bg-primary">
                <a className="navbar-brand text-center w-100" href="#">
                    <span className="logo-text">Youth leisure</span>
                </a>
            </nav>

            <div className="row flex-grow-1">
                <div className="col-3 bg-secondary p-3 d-flex flex-column">
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
                    <div className="mt-auto"></div>
                </div>

                <div className="col-9 p-3">
                    {selectedComponent === "teacher" && <TeacherComponent />}
                    {selectedComponent === "children" && <ChildrenComponent />}
                    {selectedComponent === "party" && <PartyComponent />}
                </div>
            </div>
        </div>
    );
};

export default App;