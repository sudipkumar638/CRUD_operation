import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./table.css";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { deleteUserApi, getAllData } from '../Services/ApiCalls';
import { useDispatch } from 'react-redux';
import { deleteUserData } from '../Actions/Action';
import { getData } from '../Actions/Action';


const Table = () => {
    const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const val = useSelector((state) => state.Getdataredducer.data);
    let deletedcount = useSelector((state) => state.Getdataredducer.deletedcount);
    console.log(deletedcount)
    useEffect(() => {
        setData(val);
    }, [val])

    useEffect(() => {
        getUserDetails()
        console.log("hello sudip")
    }, [deletedcount])

    function addUser() {
        navigate("/createusers")
    }

    async function deleteUser(id) {
        const deletedId = await deleteUserApi(id)
        console.log(deletedId)
        dispatch(deleteUserData(deletedId))

    }

    function navigateToUpdate(id) {
        navigate(`/updateusers/${id}`)
    }

    async function getUserDetails() {
        try {
            const userData = await getAllData();

            dispatch(getData(userData));
        }
        catch (e) {
            console.log("Some Error Occure During ApiCall")
        }
    }









    // let sortedarray = data?.sort((val1, val2) => {

    //     if (val1.name.toUpperCase() > val2.name.toUpperCase()) {
    //         return 1;

    //     }
    //     else if (val1.name.toUpperCase() < val2.name.toUpperCase()) {
    //         return -1;
    //     }
    //     else {
    //         return 0
    //     }
    // }
    // )

    // console.log(sortedarray)



    return (
        <div className='container my-5 '>
            <div className='row'>
                <div className='col-12 '>
                    <table className="table  table-hover ">
                        <thead>

                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Status</th>
                                <th scope="col">Name</th>

                                <th scope="col">Email</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Address</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {data != undefined ?
                                data.map((item, index) => {
                                    return (

                                        <tr key={index}  >
                                            <th scope="row">{index}</th>
                                            <td>{item.status}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phoneno}</td>
                                            <td>{item.address}</td>
                                            <td> <button type="button" onClick={() => { navigateToUpdate(item._id) }} className="btn btn-warning">Update</button></td>
                                            <td> <button type="button" onClick={() => { deleteUser(item._id) }} className="btn btn-danger">Delete</button></td>
                                        </tr>

                                    )
                                })
                                : <>

                                </>
                            }

                        </tbody>
                    </table>
                </div>




            </div>
            <div className='d-flex justify-content-center'>
                <button type="button" onClick={addUser} className="btn btn-primary my-4">Create Users</button>
            </div>

        </div>
    )
}

export default Table