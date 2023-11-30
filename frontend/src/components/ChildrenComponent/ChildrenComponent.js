import React, { useState, useEffect } from "react";
import api from "../../api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt, faL } from "@fortawesome/free-solid-svg-icons";

import ChildrenForm from "./ChildrenInformation";
import ChildrenInputForm from "./ChildrenInputForm";

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
    const [formInputData, setFormInputData] = useState({
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
    const [showChangeChildInformationForm, setShowChangeChildInformationForm] = useState(false);

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
        setShowChangeChildInformationForm(false);
        await api.patch("operations/children/", formInputData);
        await fetchChildrens();
        setFormInputData({
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

    return (
        <div>
            <div className="text-center">
                <div className="display-4">Childrens</div>
            </div>
            <div className="container">
                <ChildrenInputForm
                    child={formData}
                    onSubmit={handleFormSubmit}
                    onChange={handleInputChange}
                />

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
                                        onClick={() => {
                                            setShowChangeChildInformationForm(true);
                                        }}
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
                <ChildrenForm
                    child={selectedChild}
                    onClose={handleCloseChildForm}
                />
            )}

            {showChangeChildInformationForm && formInputData && (
                <ChildrenInputForm
                    child={formInputData}
                    onSubmit={handleChangeChildrenInformation}
                    onChange={handleFormInputChange}
                />
            )}
        </div>
    );
};

export default ChildrenComponent;
