import React from 'react'

function Card({item}) {
  return (
    <>
    <div>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card
