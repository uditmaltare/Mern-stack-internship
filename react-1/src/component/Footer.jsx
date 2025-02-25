import React from 'react'
import Companyname from './Companyname'

export default function Footer() {
    return (
        <div className='text-white bg-gray-800 text-xl  p-1 flex justify-center items-center'>
            &copy; <Companyname />
        </div>
    )
}
