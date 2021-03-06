import React from 'react'
import './Categories.css'
import {categories} from '../data/data'
import CategoryItem from './CategoryItem'
function Categories() {
  return (
    <div className='categories'>
    
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Categories