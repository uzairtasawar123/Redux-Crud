import { createSlice, current } from "@reduxjs/toolkit";

const customer = [
  {
    id: 0,
    name: "Uzair Tasawar",
    email: "uzair@gmail.com",
    city: "Khanewal",
    phone: "090078601",
  },
  {
    id: 1,
    name: "Umair Tasawar",
    email: "umair@gmail.com",
    city: "Lahore",
    phone: "090078602",
  },
  {
    id: 2,
    name: "Zohaib Tasawar",
    email: "zohaib@gmail.com",
    city: "Peshawar",
    phone: "090078603",
  },
];
const CustomerSlice = createSlice({
  name: "customer",
  initialState: customer,
  reducers: {
    addCustomer: (state, { payload }) => {

      state =  state.push(payload)
    },
    editCustomer: (state, { payload }) => {
      let update = state.map((m) => {
        if (m.id === payload.id) {
          return payload;
        } else {
          return m;
        }
      });
      return update;
    },
    deleteCustomer: (state, { payload }) => {
      let deleteCustomer = state.filter((f) => {
        if (f.id !== payload) {
          console.log("UHDIDGIS")
          return f
        }
      });
      return deleteCustomer;
    },
  },
});

export const { addCustomer, editCustomer, deleteCustomer } =
  CustomerSlice.actions;
export default CustomerSlice.reducer;
