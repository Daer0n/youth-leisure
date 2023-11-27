
import React from "react";

import "./PartyInformationComponent.css"

const PartyForm = ({ party, onClose }) => {
    return (
        <div className="container party_form">
            <h2 className="text-center mt-100">Group Information</h2>
            {party.map((item, index) => (
                <table key={index} className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Group name</th>
                            <th>Circle name</th>
                            <th>Children name</th>
                            <th>Children age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{item.group_name}</td>
                            <td>{item.circle_name}</td>
                            <td>{item.children_name}</td>
                            <td>{item.children_age}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
            <button
                type="submit"
                className="btn btn-primary mb-3"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    );
};

export default PartyForm;