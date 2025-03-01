import React, { useState } from 'react'
import Studentdetail from './Studentdetail'
var student = [{
    name: "John",
    surname: "Doe",
    age: 20,
    address: "123 Main St"
}, {
    name: "Jane",
    surname: "Smith",
    age: 22,
    address: "456 Oak St"
}, {
    name: "Michael",
    surname: "Johnson",
    age: 21,
    address: "789 Pine St"
}, {
    name: "Emily",
    surname: "Davis",
    age: 23,
    address: "101 Maple St"
}, {
    name: "David",
    surname: "Wilson",
    age: 24,
    address: "202 Elm St"
}]
export default function Studentlist() {
    const [deletelist, setdeletelist] = useState(student)
    const deletedata = (index) => {
        deletelist.splice(index, 1)
        setdeletelist([...deletelist])
    }
    return (

        <>
            {
                deletelist.map((data, i) => <div> <Studentdetail
                    name={data.name}
                    surname={data.surname} age={data.age} address={data.address}
                />
                    <button className=' bg-blue-400 p-2 ml-5 rounded-2xl' onClick={() => deletedata(i)}>Delete</button>
                </div>)

            }
        </>
    )
}
