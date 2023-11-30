import React from "react";

const TeacherInputForm = ({ teacher, onSubmit, onChange }) => {
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
                            value={teacher.id}
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
                            onChange={onChange}
                            value={teacher.full_name}
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
                            onChange={onChange}
                            value={teacher.gender}
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
                            onChange={onChange}
                            value={teacher.passport}
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
                            onChange={onChange}
                            value={teacher.birthday}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="family_status" className="form-label">
                            Family status
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="family_status"
                            name="family_status"
                            onChange={onChange}
                            value={teacher.family_status}
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
                            onChange={onChange}
                            value={teacher.education}
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
                            value={teacher.specialization}
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
                            onChange={onChange}
                            value={teacher.adress}
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

export default TeacherInputForm;
