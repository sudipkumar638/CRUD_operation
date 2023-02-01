import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createUserData } from '../Actions/Action';
import { createuser } from '../Services/ApiCalls';
import { updateUserApi } from '../Services/ApiCalls';
const Modal = ({ data, action }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    async function addUser(data) {
        const userData = {
            status: data.status,
            name: data.name,
            email: data.email,
            phoneno: data.phoneno,
            address: data.address,

        }

        try {
            const res = await createuser(userData);
            dispatch(createUserData(userData));
            navigate('/');
        }
        catch (e) {
            console.log("Error creating user")
        }

    }
    async function UpdateUser(data) {
        console.log(id)
        const updatedUserData = {
            data: data,
            id: id
        }
        try {
            const res = await updateUserApi(updatedUserData);

            navigate('/');
        }
        catch (e) {
            console.log("Error updating user")
        }
    }

    return (
        <div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                {action == "add" ? "Add User" : "Update User"}
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Create User</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {action == "add" ? "Are You Sure to Create a new User?" : "Are You Sure to Update Current User Details?"}

                        </div>
                        <div className="modal-footer">
                            {action == "add" ? <>
                                <button type="button" onClick={() => addUser(data)} data-bs-dismiss="modal" className="btn btn-primary">Yes</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            </> : <>
                                <button type="button" onClick={() => UpdateUser(data)} data-bs-dismiss="modal" className="btn btn-primary">Yes</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            </>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal