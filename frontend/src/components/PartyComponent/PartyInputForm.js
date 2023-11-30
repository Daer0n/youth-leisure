import React from "react";

const PartyInputForm = ({ group, onSubmit, onChange}) => {
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
                            value={group.id}
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
                            onChange={onChange}
                            value={group.group_name}
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
                            onChange={onChange}
                            value={group.group_number}
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
                            onChange={onChange}
                            value={group.circle_id}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mb-3" onClick={onSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
        
    )
}

export default PartyInputForm