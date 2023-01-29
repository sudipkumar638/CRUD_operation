import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
const UpdateUserDetails = () => {
    const { id } = useParams();
    const userDetails = useSelector((state) => state.Getdataredducer.data)
    const result = userDetails?.filter((item) => {
        return item._id == id
    })


    console.log(result)
    return (
        <div>
            {
                result?.map((item, id) => {
                    return (
                        <div key={id}>
                            <h1>{item.name}</h1>
                            <h1>{item.email}</h1>
                            <h1>{item.phone}</h1>
                            <h1>{item.address}</h1>
                        </div>
                    )

                })
            }

        </div>
    )
}

export default UpdateUserDetails