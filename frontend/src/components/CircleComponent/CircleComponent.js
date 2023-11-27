import React, { useState, useEffect } from "react";
import api from "../../api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CircleComponent = () => {
    const [circles, setCircles] = useState([]);
    const [formData, setFormData] = useState({
        id: "",
        circle_number: "",
        circle_name: "",
        specialization: "",
        teacher_id: "",
    });

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

    return (
        <div>
            <div className="text-center">
                <div className="display-4">Circles</div>
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
                        <label htmlFor="circle_number" className="form-label">
                            Circle number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="circle_number"
                            name="circle_number"
                            onChange={handleInputChange}
                            value={formData.circle_number}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="circle_name" className="form-label">
                            Circle name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="circle_name"
                            name="circle_name"
                            onChange={handleInputChange}
                            value={formData.circle_name}
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
                        <label htmlFor="teacher_id" className="form-label">
                            Teacher id
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="teacher_id"
                            name="teacher_id"
                            onChange={handleInputChange}
                            value={formData.teacher_id}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mb-3">
                        Submit
                    </button>
                </form>

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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CircleComponent;
