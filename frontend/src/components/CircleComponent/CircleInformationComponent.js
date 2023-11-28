import React from "react";
import "./CircleInformationComponent.css";

const CircleForm = ({ circle, onClose }) => {
  return (
    <div className="container circle_form">
      <h2 className="text-center mt-100">Circles Information</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Circle name</th>
            <th>Teacher name</th>
          </tr>
        </thead>
        <tbody>
          {circle.map((item, index) => (
            <tr key={index}>
              <td>{item.teacher_name}</td>
              <td>{item.circle_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit" className="btn btn-primary mb-3" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default CircleForm;