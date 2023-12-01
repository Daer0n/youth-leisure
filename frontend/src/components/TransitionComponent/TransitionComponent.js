import React, { useState, useEffect } from "react";
import api from "../../api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import TransitionInputForm from "./TransitionInputForm";

const TransitionComponent = () => {
    const [transitions, setTransitions] = useState([]);
    const [formData, setFormData] = useState({
        id: "",
        transition_date: "",
        group_id_from: "",
        group_id_to: "",
        date_start: "",
        date_finish: "",
        children_id: "",
    });
    const [formInputData, setFormInputData] = useState({
        id: "",
        transition_date: "",
        group_id_from: "",
        group_id_to: "",
        date_start: "",
        date_finish: "",
        children_id: "",
    });
    const [showTransitionForm, setShowTransitionForm] = useState(false);
    const [selectedTransition, setSelectedTransition] = useState(null);
    const [
        showChangeTransitionInformationForm,
        setShowChangeTransitionInformationForm,
    ] = useState(false);

    const fetchTransitions = async () => {
        const responce = await api.get("operations/transition/");
        setTransitions(responce.data);
    };

    useEffect(() => {
        fetchTransitions();
    }, []);

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: inputValue,
        }));
    };

    const handleFormInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        setFormInputData((prevInputFormData) => ({
            ...prevInputFormData,
            [name]: inputValue,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await api.post("operations/transition/", formData);
        fetchTransitions();
        setFormData({
            id: "",
            transition_date: "",
            group_id_from: "",
            group_id_to: "",
            date_start: "",
            date_finish: "",
            children_id: "",
        });
    };

    const handleDelete = async (id) => {
        await api.delete(`operations/transition/${id}/`);
        await fetchTransitions();
    };

    const handleChangeTransitionInformation = async () => {
        setShowChangeTransitionInformationForm(false);
        await api.patch("operations/transition/", formInputData);
        await fetchTransitions();
        setFormInputData({
            id: "",
            transition_date: "",
            group_id_from: "",
            group_id_to: "",
            date_start: "",
            date_finish: "",
            children_id: "",
        });
    };

    return (
        <div>
            <div className="text-center">
                <div className="display-4">Groups</div>
            </div>
            <div className="container">
                <TransitionInputForm
                    transition={formData}
                    onSubmit={handleFormSubmit}
                    onChange={handleInputChange}
                />

                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <th>Id</th>
                        <th>Transition date</th>
                        <th>Group id from</th>
                        <th>Group id to</th>
                        <th>Date start</th>
                        <th>Date finish</th>
                        <th>Children id</th>
                    </thead>
                    <tbody>
                        {transitions.map((transition) => (
                            <tr key={transition.id}>
                                <td>{transition.id}</td>
                                <td>{transition.transition_date}</td>
                                <td>{transition.group_id_from}</td>
                                <td>{transition.group_id_to}</td>
                                <td>{transition.date_start}</td>
                                <td>{transition.date_finish}</td>
                                <td>{transition.children_id}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(transition.id)}
                                    >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            setShowChangeTransitionInformationForm(
                                                true
                                            )
                                        }
                                    >
                                        <FontAwesomeIcon icon={faPencilAlt} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showChangeTransitionInformationForm && formInputData && (
                <TransitionInputForm
                    group={formInputData}
                    onSubmit={handleChangeTransitionInformation}
                    onChange={handleFormInputChange}
                />
            )}
        </div>
    );
};

export default TransitionComponent;
