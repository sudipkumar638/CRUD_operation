import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CreateUser from '../CreateUser/CreateUser';
import Table from '../Table/Table';
const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Table />}></Route>
                <Route path='/createusers' element={<CreateUser />}></Route>

            </Routes>
        </>
    )
}

export default AllRoutes