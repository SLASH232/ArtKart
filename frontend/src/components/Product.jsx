import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
function Product({ item }) {
    return (
        <div className='product'>

            <div className='product__circle'>


            </div>

            <img src={item.img} className='product__image' />

            <div className='product__info'>

                <div className='product__icon'>
                    <ShoppingCartOutlined />
                </div>
                <div className='product__icon'>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined />
                    </Link>

                </div>
                <div className='product__icon'>
                    <FavoriteBorderOutlined />
                </div>



            </div>
        </div>
    )
}

export default Product