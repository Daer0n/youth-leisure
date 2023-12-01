import React, { useState, useEffect } from "react";
import api from "../../api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const PartyComponent = () => {
    const [partys, setPartys] = useState([]);
    const [formData, setFormData] = useState({
        id: "", 
        transition_date: "", 
        group_id_from: "", 
        group_id_to: "",
        date_start: "", 
        date_finish: "",
        children_id: "" 
    });
    const [formInputData, setFormInputData] = useState({
        id: "", 
        transition_date: "", 
        group_id_from: "", 
        group_id_to: "",
        date_start: "", 
        date_finish: "",
        children_id: "" 
    });
    const [showPartyForm, setShowPartyForm] = useState(false);
    const [selectedParty, setSelectedParty] = useState(null);
    const [showChangePartyInformationForm, setShowChangePartyInformationForm] =
        useState(false);

    const fetchPartys = async () => {
        const responce = await api.get("operations/party/");
        setPartys(responce.data);
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

    const handlePartyInformation = async (id) => {
        const response = await api.get(`operations/party/${id}/children/`);
        setSelectedParty(response.data);
        setShowPartyForm(true);
    };

    const handleClosePartyForm = () => {
        setShowPartyForm(false);
        setSelectedParty(null);
    };

    const handleChangePartyInformation = async () => {
        setShowChangePartyInformationForm(false);
        await api.patch("operations/party/", formInputData);
        await fetchPartys();
        setFormInputData({
            id: "",
            group_name: "",
            group_number: "",
            circle_id: "",
        });
    };

    return (
        <div>
            <div className="text-center">
                <div className="display-4">Groups</div>
            </div>
            <div className="container">
                <PartyInputForm
                    group={formData}
                    onSubmit={handleFormSubmit}
                    onChange={handleInputChange}
                />

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
                                <td>
                                    <div
                                        className="link"
                                        onClick={() =>
                                            handlePartyInformation(party.id)
                                        }
                                    >
                                        {party.group_name}
                                    </div>
                                </td>
                                <td>{party.group_number}</td>
                                <td>{party.circle_id}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(party.id)}
                                    >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            setShowChangePartyInformationForm(
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
            {showPartyForm && selectedParty && (
                <PartyForm
                    party={selectedParty}
                    onClose={handleClosePartyForm}
                />
            )}

            {showChangePartyInformationForm && formInputData && (
                <PartyInputForm
                    group={formInputData}
                    onSubmit={handleChangePartyInformation}
                    onChange={handleFormInputChange}
                />
            )}
        </div>
    );
};

export default PartyComponent;
