import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./table.css";
import arr from "../AllData";
import { useSelector } from "react-redux";


const Table = () => {
    const [data, setData] = useState(useSelector((state) => state.Getdataredducer));

    const navigate = useNavigate();

    function addUser() {
        navigate("/createusers")
    }


    const val = useSelector((state) => state.Getdataredducer);
    useEffect(() => {
        setData(val);
    }, [val])


    const finalData = data.data
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

                            {finalData != undefined ?
                                finalData.map((item, index) => {
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