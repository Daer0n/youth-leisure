import React, { useState, useEffect } from "react";
import api from "../../api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import CircleForm from "./CircleInformation";
import CircleInputForm from "./CircleInputForm";

const CircleComponent = () => {
    const [circles, setCircles] = useState([]);
    const [formData, setFormData] = useState({
        id: "",
        circle_number: "",
        circle_name: "",
        specialization: "",
        teacher_id: "",
    });
    const [formInputData, setFormInputData] = useState({
        id: "",
        circle_number: "",
        circle_name: "",
        specialization: "",
        teacher_id: "",
    });
    const [showCircleForm, setShowCircleForm] = useState(false);
    const [selectedCircle, setSelectedCircle] = useState(null);
    const [showButton, setShowButton] = useState(true);
    const [
        showChangeCircleInformationForm,
        setShowChangeCircleInformationForm,
    ] = useState(false);

    const fetchCircles = async () => {
        const responce = await api.get("operations/circle/");
        setCircles(responce.data);
    };

    useEffect(() => {
        fetchCircles();
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
        setFormInputData((prevFormData) => ({
            ...prevFormData,
            [name]: inputValue,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await api.post("operations/circle/", formData);
        fetchCircles();
        setFormData({
            id: "",
            circle_number: "",
            circle_name: "",
            specialization: "",
            teacher_id: "",
        });
    };

    const handleDelete = async (id) => {
        await api.delete(`operations/circle/${id}/`);
        await fetchCircles();
    };

    const handleCircleInformation = async () => {
        const response = await api.get(`operations/circles`);
        setSelectedCircle(response.data);
        setShowCircleForm(true);
        setShowButton(false);
    };

    const handleCloseCircleForm = () => {
        setShowCircleForm(false);
        setSelectedCircle(null);
        setShowButton(true);
    };

    const handleChangeCircleInformation = async () => {
        setShowChangeCircleInformationForm(false);
        await api.patch("operations/circle/", formInputData);
        await fetchCircles();
        setFormInputData({
            id: "",
            circle_number: "",
            circle_name: "",
            specialization: "",
            teacher_id: "",
        });
    };

    return (
        <div>
            <div className="text-center">
                <div className="display-4">Circles</div>
            </div>
            <div className="container">
                <CircleInputForm
                    circle={FormData}
                    onSubmit={handleFormSubmit}
                    onChange={handleInputChange}
                />

                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <th>Id</th>
                        <th>Circle number</th>
                        <th>Circle name</th>
                        <th>Specialization</th>
                        <th>Teacher id</th>
                    </thead>
                    <tbody>
                        {circles.map((circle) => (
                            <tr key={circle.id}>
                                <td>{circle.id}</td>
                                <td>{circle.circle_number}</td>
                                <td>{circle.circle_name}</td>
                                <td>{circle.specialization}</td>
                                <td>{circle.teacher_id}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(circle.id)}
                                    >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            setShowChangeCircleInformationForm(
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

                {showButton && (
                    <button
                        type="submit"
                        className="btn btn-primary mb-3"
                        onClick={handleCircleInformation}
                    >
                        Get all circles with teachers
                    </button>
                )}

                {showCircleForm && selectedCircle && (
                    <CircleForm
                        circle={selectedCircle}
                        onClose={handleCloseCircleForm}
                    />
                )}

                {showChangeCircleInformationForm && formInputData && (
                    <CircleInputForm
                        circle={formInputData}
                        onSubmit={handleChangeCircleInformation}
                        onChange={handleFormInputChange}
                    />
                )}
            </div>
        </div>
    );
};

export default CircleComponent;
