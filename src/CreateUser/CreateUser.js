import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import "./createuser.css"
const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [address, setAddress] = useState("");

    const data = {
        name: name,
        email: email,
        phoneno: phoneno,
        address: address
    }

    return (
        <div className='container submission'>
            <div className='row'>
                <div className='col-12 formsubmit'>
                    <h1>Create User</h1>
                    <div className="mb-3 my-4">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
                        <input type="email" onChange={(e) => { setName(e.target.value) }} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
                        <input type="email" onChange={(e) => {
                            setEmail(e.target.value)
                        }} className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Phoneno:</label>
                        <input type="number" onChange={(e) => { setPhoneno(e.target.value) }} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phoneno" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                        <textarea onChange={(e) => {
                            setAddress(e.target.value)
                        }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <Modal data={data}></Modal>

                </div>

            </div>


        </div>
    )
}

export default CreateUser