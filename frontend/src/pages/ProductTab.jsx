import React, { useEffect, useState } from 'react'
import './ProductTab.css'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, CleaningServices, Remove } from '@mui/icons-material'
import { publicRequest, userRequest } from '../requestMethod'
import { useLocation } from 'react-router-dom'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux';
function ProductTab() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();



  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);

        setProduct(res.data.product);
      } catch (err) {

      }

    }

    getProducts();
  }, [id]);
  const handleClickAdd2Basket = () => {
    //update cart
    try{
      console.log(product);
      dispatch(addProduct({...product,quantity,color,size}))
    
    }
    catch(err){
      console.log(err);
    }
    console.log(quantity);
  };
  return (
    <div className='productTab'>
      <Navbar />

      <div className='productTab__wrapper'>
        <div className='productTab__imgContainer'>
          <img src={product.img} />
        </div>


        <div className='productTab__infoContainer'>
          <h1> {product.title}</h1>
          <p> {product.desc} </p>
          <span> ₹ {product.price}</span>

          <div className='productTab__filterContainer'>
            <div className='productTab__filter'>
              {/* <span> Color</span>
              {product.color?.map((c) => {
                console.log(c);
                <div className='productTab__filterColor' key={c} style={{ backgroundColor:`${c}`}} onClick={() => setColor(c)} />
              })} */}


            </div>
            <div className='productTab__filter'>
              {/* <span> Size</span>
              <select className='productTab__filterSize' onChange={(e) => setSize(e.target.value)}>

                {product.size?.map((sz) => (
                  <option className='productTab__filterSizeOption' key={sz}> {sz}</option>

                ))}
              </select> */}

            </div>
          </div>

          <div className='productTab__addContainer'>
            <div className='productTab__amountContainer'>
              <Remove onClick={() => quantity > 1 && setQuantity(quantity - 1)} />
              <span className='productTab__amount'>{quantity}</span>
              <Add onClick={() => setQuantity(quantity + 1)} />
            </div>

            <button onClick={handleClickAdd2Basket}>Add To Basket</button>
          </div>

        </div>

      </div>

      <Newsletter />
      <Footer />

    </div>
  )
}

export default ProductTab