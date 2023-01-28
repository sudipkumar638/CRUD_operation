import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./table.css";

import { useSelector } from "react-redux";


const Table = () => {
    const [data, setData] = useState([]);
    console.log(data)
    const navigate = useNavigate();

    function addUser() {
        navigate("/createusers")
    }


    const val = useSelector((state) => state.Getdataredducer.data);
    useEffect(() => {
        setData(val);
    }, [val])




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
                            </tr>
                        </thead>
                        <tbody>

                            {data != undefined ?
                                data.map((item, index) => {
                                    return (<tr key={index} >
                                        <th scope="row">{index}</th>
                                        <td>{item.status}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phoneno}</td>
                                        <td>{item.address}</td>
                                    </tr>)
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