import React from "react";

const ChangeTeacherInformationForm = ({
    teacher,
    onCLose,
    onSubmit,
    onChange,
}) => {
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
                        <label htmlFor="age" className="form-label">
                            Age
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="age"
                            name="age"
                            onChange={onChange}
                            value={teacher.age}
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
                            onChange={onChange}
                            value={teacher.school_number}
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
                            onChange={onChange}
                            value={teacher.grade}
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
                            onChange={onChange}
                            value={teacher.birthday_certificate_information}
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
                            onChange={onChange}
                            value={teacher.address}
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
                            onChange={onChange}
                            value={teacher.home_phone}
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
                            onChange={onChange}
                            value={teacher.parents_information}
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
                            onChange={onChange}
                            value={teacher.group_id}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mb-3" onClick={onCLose}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangeTeacherInformationForm