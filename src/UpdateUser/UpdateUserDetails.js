import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { useState } from 'react';
const UpdateUserDetails = () => {

    const userDetails = useSelector((state) => state.Getdataredducer.data)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState("Active")
    const [allData, setAllData] = useState({});
    const data = {
        name: name,
        email: email,
        phoneno: phoneno,
        address: address,
        status: status
    }

    const { id } = useParams();


    function getData() {

        const result = userDetails?.filter((item) => {
            return item._id == id
        })

        setAllData(result ? result[0] : {})
        setName(result ? result[0].name : "")
        setAddress(result ? result[0].address : "")
        setEmail(result ? result[0].email : "")
        setPhoneno(result ? result[0].phoneno : "")
    }


    useEffect(() => {
        getData();
    }, [allData])







    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 formsubmit'>
                    <h1>Update User Details</h1>
                    <div className="mb-3 my-4">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
                        <input type="email" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
                        <input type="email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Phoneno:</label>
                        <input type="number" value={phoneno} onChange={(e) => { setPhoneno(e.target.value) }} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phoneno" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                        <textarea value={address} onChange={(e) => {
                            setAddress(e.target.value)
                        }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <Modal data={data} action="update"></Modal>



                </div>
            </div>

        </div>
    )
}

export default UpdateUserDetails