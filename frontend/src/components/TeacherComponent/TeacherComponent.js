import React, { useState, useEffect } from "react";
import api from "../../api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CircleForm from "../CircleComponent/CircleInformationComponent";

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
    const [showCircleForm, setShowCircleForm] = useState(false);
    const [selectedCircle, setSelectedCircle] = useState(null);
    const [showButton, setShowButton] = useState(true);

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

    return (
        <div>
            <div className="text-center">
                <div className="display-4">Teachers</div>
            </div>
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="id" className="form-label">
                            Id
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="id"
                            name="id"
                            onChange={handleInputChange}
                            value={formData.id}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="full_name" className="form-label">
                            Full name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="full_name"
                            name="full_name"
                            onChange={handleInputChange}
                            value={formData.full_name}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">
                            Gender
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="gender"
                            name="gender"
                            onChange={handleInputChange}
                            value={formData.gender}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="passport" className="form-label">
                            Passport
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="passport"
                            name="passport"
                            onChange={handleInputChange}
                            value={formData.passport}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="birthday" className="form-label">
                            Birthday
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="birthday"
                            name="birthday"
                            onChange={handleInputChange}
                            value={formData.birthday}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="family_status" className="form-label">
                            Family_status
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="family_status"
                            name="family_status"
                            onChange={handleInputChange}
                            value={formData.family_status}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="education" className="form-label">
                            Education
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="education"
                            name="education"
                            onChange={handleInputChange}
                            value={formData.education}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="specialization" className="form-label">
                            Specialization
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="specialization"
                            name="specialization"
                            onChange={handleInputChange}
                            value={formData.specialization}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="adress" className="form-label">
                            Adress
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="adress"
                            name="adress"
                            onChange={handleInputChange}
                            value={formData.adress}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mb-3">
                        Submit
                    </button>
                </form>

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
            </div>
        </div>
    );
};

export default TeacherComponent;
