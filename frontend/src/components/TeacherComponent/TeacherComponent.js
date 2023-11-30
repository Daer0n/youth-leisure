import React, { useState, useEffect } from "react";
import api from "../../api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import CircleForm from "../CircleComponent/CircleInformationComponent";
import TeacherInputForm from "./TeacherInputForm";

const TeacherComponent = () => {
    const [teachers, setTeachers] = useState([]);
    const [formData, setFormData] = useState({
        id: "",
        full_name: "",
        gender: "",
        passport: "",
        birthday: "",
        family_status: "",
        education: "",
        specialization: "",
        adress: "",
    });
    const [formInputData, setFormInputData] = useState({
        id: "",
        full_name: "",
        gender: "",
        passport: "",
        birthday: "",
        family_status: "",
        education: "",
        specialization: "",
        adress: "",
    });
    const [showCircleForm, setShowCircleForm] = useState(false);
    const [selectedCircle, setSelectedCircle] = useState(null);
    const [showButton, setShowButton] = useState(true);
    const [
        showChangeTeacherInformationForm,
        setShowChangeTeacherInformationForm,
    ] = useState(false);

    const fetchTeachers = async () => {
        const responce = await api.get("operations/teacher/");
        setTeachers(responce.data);
    };

    useEffect(() => {
        fetchTeachers();
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
        await api.post("operations/teacher/", formData);
        fetchTeachers();
        setFormData({
            id: "",
            full_name: "",
            gender: "",
            passport: "",
            birthday: "",
            family_status: "",
            education: "",
            specialization: "",
            adress: "",
        });
    };

    const handleDelete = async (id) => {
        await api.delete(`operations/teacher/${id}/`);
        await fetchTeachers();
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

    const handleChangeTeacherInformation = async () => {
        setShowChangeTeacherInformationForm(false);
        await api.patch("operations/teacher/", formInputData);
        await fetchTeachers();
        setFormInputData({
            id: "",
            full_name: "",
            gender: "",
            passport: "",
            birthday: "",
            family_status: "",
            education: "",
            specialization: "",
            adress: "",
        });
    };

    return (
        <div>
            <div className="text-center">
                <div className="display-4">Teachers</div>
            </div>
            <div className="container">

                <TeacherInputForm
                    teacher={formData}
                    onSubmit={handleFormSubmit}
                    onChange={handleInputChange}
                />

                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <th>Id</th>
                        <th>Full name</th>
                        <th>Gender</th>
                        <th>Passport</th>
                        <th>Birthday</th>
                        <th>Family status</th>
                        <th>Education</th>
                        <th>Specialization</th>
                        <th>Adress</th>
                    </thead>
                    <tbody>
                        {teachers.map((teacher) => (
                            <tr key={teacher.id}>
                                <td>{teacher.id}</td>
                                <td>{teacher.full_name}</td>
                                <td>{teacher.gender}</td>
                                <td>{teacher.passport}</td>
                                <td>{teacher.birthday}</td>
                                <td>{teacher.family_status}</td>
                                <td>{teacher.education}</td>
                                <td>{teacher.specialization}</td>
                                <td>{teacher.adress}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(teacher.id)}
                                    >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            setShowChangeTeacherInformationForm(
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

                {showChangeTeacherInformationForm && formInputData && (
                    <TeacherInputForm
                        teacher={formInputData}
                        onSubmit={handleChangeTeacherInformation}
                        onChange={handleFormInputChange}
                    />
                )}
            </div>
        </div>
    );
};

export default TeacherComponent;
