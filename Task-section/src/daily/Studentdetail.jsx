import React from 'react'

export default function Studentdetail({ name, surname, age, address }) {
    return (
        <div className=' bg-indigo-500 p-4 m-3 rounded-2xl'>
            <h1>Name: {name} {surname}</h1>
            <h1>Age: {age}</h1>
            <h1>Address: {address} </h1>
        </div>
    )
}
