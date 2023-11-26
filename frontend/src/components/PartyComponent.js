import React, { useState, useEffect } from "react";
import api from "../api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PartyComponent = () => {
    const [partys, setPartya] = useState([]);
    const [formData, setFormData] = useState({
        id: "",
        group_name: "",
        group_number: "",
        circle_id: "",
    });

    const fetchPartys = async () => {
        const responce = await api.get("operations/party/");
        setPartya(responce.data);
    };

    useEffect(() => {
        fetchPartys();
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
        await api.post("operations/party/", formData);
        fetchPartys();
        setFormData({
            id: "",
            group_name: "",
            group_number: "",
            circle_id: "",
        });
    };

    const handleDelete = async (id) => {
        await api.delete(`operations/party/${id}/`);
        await fetchPartys();
    };

    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Youth leisure
                    </a>
                </div>
            </nav>

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
                        <label htmlFor="group_name" className="form-label">
                            Group name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="group_name"
                            name="group_name"
                            onChange={handleInputChange}
                            value={formData.group_name}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="group_number" className="form-label">
                            Group number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="group_number"
                            name="group_number"
                            onChange={handleInputChange}
                            value={formData.group_number}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="circle_id" className="form-label">
                            Circle id
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="circle_id"
                            name="circle_id"
                            onChange={handleInputChange}
                            value={formData.circle_id}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mb-3">
                        Submit
                    </button>
                </form>

                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <th>Id</th>
                        <th>Group name</th>
                        <th>Group number</th>
                        <th>Circle id</th>
                    </thead>
                    <tbody>
                        {partys.map((party) => (
                            <tr key={party.id}>
                                <td>{party.id}</td>
                                <td>{party.group_name}</td>
                                <td>{party.group_number}</td>
                                <td>{party.circle_id}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(party.id)}
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

export default PartyComponent;
