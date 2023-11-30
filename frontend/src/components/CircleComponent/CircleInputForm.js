import React from "react";

const CircleInputForm = ({ circle, onSubmit, onChange }) => {
    return (
        <div>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="id" className="form-label">
                            Id
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="id"
                            name="id"
                            onChange={onChange}
                            value={circle.id}
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
                            onChange={onChange}
                            value={circle.circle_number}
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
                            onChange={onChange}
                            value={circle.circle_name}
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
                            onChange={onChange}
                            value={circle.specialization}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="teacher_id" className="form-label">
                            Tacher id
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="teacher_id"
                            name="teacher_id"
                            onChange={onChange}
                            value={circle.teacher_id}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary mb-3"
                        onClick={onSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CircleInputForm;
