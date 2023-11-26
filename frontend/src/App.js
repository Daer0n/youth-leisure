import React, { useState, useEffect } from "react";
import api from "./api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import TeacherComponent from "./components/TeacherComponent";
import ChildrenComponent from "./components/ChildrenComponent";
import PartyComponent from "./components/PartyComponent";

const App = () => {
    return (
        <div>
            <TeacherComponent />

            <ChildrenComponent />

            <PartyComponent />
        </div>
    );
};

export default App;
