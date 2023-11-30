import React from "react";
import "./ChildrenInformation.css"

const ChildrenForm = ({ child, onClose }) => {
    return (
        <div className="container child_form">
            <h2 className="text-center mt-100">Children Information</h2>
            <table className="table table-striped table-bordered table-hover"> 
                <thead>
                    <tr>
                        <th>Full name</th>
                        <th>Age</th>
                        <th>Circle name</th>
                        <th>Group name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{child.full_name}</td>
                        <td>{child.age}</td>
                        <td>{child.circle_name}</td>
                        <td>{child.group_name}</td>
                    </tr>
                </tbody>
            </table>
            <button type="submit" className="btn btn-primary mb-3" onClick={onClose}>CLose</button>
        </div>
    );
};

export default ChildrenForm;
