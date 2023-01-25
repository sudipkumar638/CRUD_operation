import React from 'react'
import { useNavigate } from 'react-router-dom';

const Modal = ({ data }) => {
    const navigate = useNavigate();
    function addUser(data) {
        console.log(data);
        navigate("/")

    }
    return (
        <div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add User
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Create User</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are You Sure to Create a new User?
                        </div>
                        <div className="modal-footer">

                            <button type="button" onClick={() => addUser(data)} data-bs-dismiss="modal" className="btn btn-primary">Yes</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal