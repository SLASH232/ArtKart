import React, { useState } from 'react'
import './ProductList.css'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import { useLocation } from 'react-router-dom';

function ProductList() {
    const location=useLocation();
    const [filters,setFilter]=useState({});
    
    const [sort,setSort]=useState("newest");
    const cat=location.pathname.split('/')[2];
    console.log(cat)
    const handleFilters=(e)=>{
        const value=e.target.value;
        setFilter({
            ...filters,
            [e.target.value]:value,
        });
    };
    
    return (
        <div className='productList'>
            <Navbar />
            <h1 style={{textTransform: 'uppercase'}}>
                {cat?cat:"Dresses"}
            </h1>

            <div className='productList__filterContainer'>
                <div className='productList__filter'>
                    {/* <span >
                        Filter Products:
                    </span>

                    <select name="color" onChange={handleFilters}>
                        <option  disabled >
                            Color
                        </option>
                        <option>white</option>
                        <option>black</option>
                        <option>red</option>
                        <option>blue</option>
                        <option>yellow</option>
                        <option>greeen</option>
                    </select>

                    <select name="size" onChange={handleFilters} >
                        <option  disabled >
                            Size
                        </option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select> */}
                </div>
                <div className='productList__filter'>
                    <span >
                        Sort Products:
                    </span>

                    <select onChange={e=>setSort(e.target.value)}>
                        <option value="newest"> Newest </option>
                        <option value="asc"> Price (asc)</option>
                        <option value="desc"> Price (desc)</option>

                    </select>

                </div>

            </div>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter />
            <Footer />

        </div>
    )
}

export default ProductList