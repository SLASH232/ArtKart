import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryItem.css'
function CategoryItem({ item }) {
  return (
    <div className='categoryItem'>
      <Link to={`/products/${item.cat}`}>
        <img
        className='categoryItem__img'
          src={item.img}
        />
        <div className='categoryItem__Info'>
          <h1>{item.title}</h1>
          <button> Shop Now!</button>
        </div>
      </Link>

    </div>
  )
}

export default CategoryItem