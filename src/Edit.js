import React, { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {editCustomer} from './Redux/Reducer/CustomerSlice'


const Edit = () => {
  const { id } = useParams();
  const customers = useSelector((state) => state.customer);
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  /// console.warn("Cus :", customers);
  ///////////////////////////////////////
  ////////////////////////////////////////
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  //////////////////////////////////////////
  const response = customers.find((f) => {
    if(f.id == id){
      return f
    }
  } );
  console.warn("Res", response);
  ////////////////////////////////////////

  //////////////////////////////////////

  ////////////////////////////
  const HandleEdit = (e) => {
    e.preventDefault();

    const Email = customers.find((f) => f.email === email);
    const Number = customers.find((f) => f.phone === phone);

    if (!name || !email || !city || !phone) {
      return toast.warning("Please Fill out all input fields");
    }
    if (Email) {
      return toast.error(`Email is already taken`);
    }
    if (Number) {
      return toast.error("Phone No is already taken");
    }

    const edit = {
      id: id-1,
      name,
      email,
      city,
      phone
    }
    dispatch(editCustomer(edit))
    toast.success("Customer Updated successfully")
    Navigate('/')

  
   };
  ////////////////////////////
  return (
    <>
      <div className="container">
        <h1 className="my-5 text-center">Edit Customer {id}</h1>
        <div className="row ">
          <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={HandleEdit}>
              <div className=" mb-2">
                <label>Enter your Name</label>
                <i className="fa-solid fa-users mx-1"></i>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Enter your Email</label>
                <i className="fa-solid fa-envelope mx-1"></i>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Enter your City name</label>
                <i class="fa-solid fa-location-dot mx-1"></i>
                <input
                  type="text"
                  placeholder="City"
                  className="form-control"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Enter your Phone Number</label>
                <i className="fa-solid fa-phone mx-1"></i>
                <input
                  type="number"
                  placeholder="Phone No"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-dark w-50">
                  Update Customer
                </button>
                <Link to="/" className="m-1 btn btn-danger">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
