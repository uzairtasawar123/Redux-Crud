import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch } from "react-redux";
import {deleteCustomer} from './Redux/Reducer/CustomerSlice'
import { toast } from "react-toastify";
import Zoom from 'react-reveal/Zoom'

const Home = () => {
  const customers = useSelector((state) => state.customer);
  const dispatch = useDispatch()

  //////////////////////////////////////////
  const HandleDelete = (id)=>{
          dispatch(deleteCustomer(id))
  }

  /////////////////////////////////////////
  return (
    <>
      <div className="row">
        <div className="col-md-2 px-5 py-5 ">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>

        <div
          className="col-md-10  p-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <Zoom cascade duration={2000}>
          <table className="table table-hover table-bordered table-dark table-striped">
            <thead className="text-white bg-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Phone No</th>
                <th>Some Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer)=>{
                return(
                <tr key={customer.id}>
                  <td>
                     {customer.id + 1}
                  </td>
                  <td>
                    {customer.name}
                  </td>
                  <td>
                    {customer.email}
                  </td>
                  <td>
                    {customer.city}
                  </td>
                  <td>
                    {customer.phone}
                  </td>
                  <td>
                    <Link to={`/edit/${customer.id+1}`} className='btn btn-dark mx-2'>Edit</Link>
                    <button type="button" className='btn btn-danger' onClick={()=> HandleDelete(customer.id)}>Delete</button>
                  </td>
                </tr>
                )

              })}
              
            </tbody>
          </table>
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default Home;
