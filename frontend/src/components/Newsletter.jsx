import { Send } from '@mui/icons-material'
import React from 'react'
import './Newsletter.css'
function Newsletter() {
  return (
    <div className='newsletter'>
        <h1>
            Newsletter
        </h1>
        <div className='newsletter__desc'>
            Get timely updates from your favourite products.
        </div>
        <div className='newsletter__inputContainer'>
            <input placeholder='Your email'/>
            <button>
                <Send />
            </button>
        </div>

    </div>
  )
}

export default Newsletter