import React from "react";

const TransitionInputForm = ({ transition, onSubmit, onChange}) => {
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
                            value={transition.id}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="transition_date" className="form-label">
                            Transition date
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="transition_date"
                            name="transition_date"
                            onChange={onChange}
                            value={transition.transition_date}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="group_id_from" className="form-label">
                            Group id from
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="group_id_from"
                            name="group_id_from"
                            onChange={onChange}
                            value={transition.group_id_from}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="group_id_to" className="form-label">
                            Group id to
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="group_id_to"
                            name="group_id_to"
                            onChange={onChange}
                            value={transition.group_id_to}
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="date_start" className="form-label">
                            Date start
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="date_start"
                            name="date_start"
                            onChange={onChange}
                            value={transition.date_start}
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="date_finish" className="form-label">
                            Date finish
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="date_finish"
                            name="date_finish"
                            onChange={onChange}
                            value={transition.date_finish}
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="children_id" className="form-label">
                            Children id
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="children_id"
                            name="children_id"
                            onChange={onChange}
                            value={transition.children_id}
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

export default TransitionInputForm