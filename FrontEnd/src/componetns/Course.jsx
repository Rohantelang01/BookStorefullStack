import React from 'react'
import Card from './Card'
import List from '../../public/List.json'
import { Link } from 'react-router-dom'
function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>
          We're delighted to have you {" "} <span className='text-pink-500'>Here! :</span>
        </h1>
        <p className='mt-12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum harum architecto nobis ad perferendis recusandae
           cum aperiam dolore a, quis, blanditiis nam veritatis, ipsam officiis culpa nulla eaque incidunt.
        </p>
      <Link to='/'> <button className='bg-pink-500 text-white px-6 py-2 mt-9 hover:bg-pink-300 duration-300'>Back</button></Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          List.map((item)=>(
            <Card key={item.id} item={item} />
          ))
        }
      </div>
      </div></>
  )
}

export default Course