/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
function Lend() {

  const [form,setForm] = useState()

  const handleForm =(e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();       
    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
     const data = await response.json();
     console.log(data)
  }


  
  const getLenders = async () =>{
    const response = await fetch('http://localhost:8080/demo',{
      method:'GET',
    })
     const data = await response.json();
     console.log(data)
  }
  
  useEffect(()=>{
    getLenders();
  },[])

  return ( 
  <div>
<form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <p>{JSON.stringify(form)}</p>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      Name:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username" type="text" name="username" onChange={handleForm} />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
      Type:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="type" type="text" name="type" onChange={handleForm} />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
      Amount:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="amount" type="Decimal128" name="amount" onChange={handleForm} />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phno">
      Contact Number:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="phno" type="Number" name="phno" onChange={handleForm} />
  </div>
  <div className="flex items-center justify-between">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit">
      Submit
    </button>
  </div>
</form>


  </div>
  )
}

export default withAuthenticationRequired(Lend, {
  onRedirecting: () => <div>Loading...</div>,
});
