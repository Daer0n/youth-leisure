import React, { useState, useEffect } from "react";
import api from "../../api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import ChildForm from "./ChildrenInformationComponent";
import ChangeChildInformationForm from "./ChildrenChangeInformation";

const ChildrenComponent = () => {
    const [childrens, setChildren] = useState([]);
    const [formData, setFormData] = useState({
        id: "",
        full_name: "",
        age: "",
        school_number: "",
        grade: "",
        birthday_certificate_information: "",
        address: "",
        home_phone: "",
        parents_information: "",
        group_id: "",
    });
    const [showChildForm, setShowChildForm] = useState(false);
    const [selectedChild, setSelectedChild] = useState(null);
    const [showChangeChildInformationForm, setShowChangeChildInformationForm] =
        useState(false);

    const fetchChildrens = async () => {
        const response = await api.get("operations/children/");
        setChildren(response.data);
    };

    useEffect(() => {
        fetchChildrens();
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
        await api.post("operations/children/", formData);
        fetchChildrens();
        setFormData({
            id: "",
            full_name: "",
            age: "",
            school_number: "",
            grade: "",
            birthday_certificate_information: "",
            address: "",
            home_phone: "",
            parents_information: "",
            group_id: "",
        });
    };

    const handleDelete = async (id) => {
        await api.delete(`operations/children/${id}/`);
        await fetchChildrens();
    };

    const handleChildrenInformation = async (id) => {
        const response = await api.get(`operations/children/${id}`);
        setSelectedChild(response.data);
        setShowChildForm(true);
    };

    const handleCloseChildForm = () => {
        setShowChildForm(false);
        setSelectedChild(null);
    };

    const handleChangeChildrenInformation = async () => {
        setShowChangeChildInformationForm(true);
        await api.patch('operations/children', formData);
        setFormData({
            id: "",
            full_name: "",
            age: "",
            school_number: "",
            grade: "",
            birthday_certificate_information: "",
            address: "",
            home_phone: "",
            parents_information: "",
            group_id: "",
        });
        fetchChildrens();

    };

    const handleCloseChangeChildFormInformation = () => {
        setShowChangeChildInformationForm(false);
        setSelectedChild(null);
    };

    return (
        <div>
            <div className="text-center">
                <div className="display-4">Childrens</div>
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
                        <label htmlFor="age" className="form-label">
                            Age
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="age"
                            name="age"
                            onChange={handleInputChange}
                            value={formData.age}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="school_number" className="form-label">
                            School number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="school_number"
                            name="school_number"
                            onChange={handleInputChange}
                            value={formData.school_number}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="grade" className="form-label">
                            Grade
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="grade"
                            name="grade"
                            onChange={handleInputChange}
                            value={formData.grade}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="birthday_certificate_information"
                            className="form-label"
                        >
                            Birthday certificate information
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="birthday_certificate_information"
                            name="birthday_certificate_information"
                            onChange={handleInputChange}
                            value={formData.birthday_certificate_information}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            onChange={handleInputChange}
                            value={formData.address}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="home_phone" className="form-label">
                            Home phone
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="home_phone"
                            name="home_phone"
                            onChange={handleInputChange}
                            value={formData.home_phone}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="parents_information"
                            className="form-label"
                        >
                            Parents information
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="parents_information"
                            name="parents_information"
                            onChange={handleInputChange}
                            value={formData.parents_information}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="group_id" className="form-label">
                            Group id
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="group_id"
                            name="group_id"
                            onChange={handleInputChange}
                            value={formData.group_id}
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
                        <th>Age</th>
                        <th>School number</th>
                        <th>Grade</th>
                        <th>Birthday certificate</th>
                        <th>Address</th>
                        <th>Home phone</th>
                        <th>Parents information</th>
                        <th>Group id</th>
                    </thead>
                    <tbody>
                        {childrens.map((children) => (
                            <tr key={children.id}>
                                <td>{children.id}</td>
                                <td>
                                    <div
                                        className="link"
                                        onClick={() =>
                                            handleChildrenInformation(
                                                children.id
                                            )
                                        }
                                    >
                                        {children.full_name}
                                    </div>
                                </td>
                                <td>{children.age}</td>
                                <td>{children.school_number}</td>
                                <td>{children.grade}</td>
                                <td>
                                    {children.birthday_certificate_information}
                                </td>
                                <td>{children.address}</td>
                                <td>{children.home_phone}</td>
                                <td>{children.parents_information}</td>
                                <td>{children.group_id}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDelete(children.id)
                                        }
                                    >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={
                                            handleChangeChildrenInformation
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
            {showChildForm && selectedChild && (
                <ChildForm
                    child={selectedChild}
                    onClose={handleCloseChildForm}
                />
            )}

            {showChangeChildInformationForm && FormData && (
                <ChangeChildInformationForm 
                    child={FormData}
                    onClose={handleCloseChangeChildFormInformation}
                    onSubmit={handleChangeChildrenInformation}
                    onChange={handleInputChange}
                />
            )

            }


        </div>
    );
};

export default ChildrenComponent;
