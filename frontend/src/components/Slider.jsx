import React from 'react'
import './Slider.css'
import Carousel from 'react-material-ui-carousel'
import banner  from '../data/data.js';
function Slider() {
      return (
        <div className='slider'>
            <Carousel>
                {banner.map((prop) => (
                    <div className='slider_container' style={{backgroundColor:`${prop.bg}`}}>
                        <div className='slider__imgContainer'>
                            <img
                                className='slider__img'
                                src={prop.image}

                            />
                        </div>
                        <div className='slider__infoContainer'>
                            <h1>{prop.Title}</h1>
                            <p className='slider__desc'>
                                {prop.desc}
                            </p>
                            <button>
                                Shop Now!
                            </button>
                        </div>
                    </div>
                )
                )
                }
            </Carousel>


        </div>
    )
}

export default Slider