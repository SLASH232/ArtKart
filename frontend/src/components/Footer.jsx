import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>

            <div className='footer__left'>
                <h3>ASHTECH.</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                    nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
                    tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                </p>
                <div className='footer__socialContainer'>
                    <div className='footer__socialIcon' style={{ backgroundColor: '#3B5999' }}>
                        <Facebook />
                    </div>
                    <div className='footer__socialIcon' style={{ backgroundColor: '#E4405F' }}>
                        <Instagram />
                    </div>
                    <div className='footer__socialIcon' style={{ backgroundColor: '#55ACEE' }}>
                        <Twitter />
                    </div>
                </div>
            </div>
            <div className='footer__center'>
                <h3>
                    Useful Links
                </h3>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Man Fashion</li>
                    <li>Woman Fashion</li>
                    <li>Accesories</li>
                    <li>My Account</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className='footer__right'>
                <h3> Contact</h3>
                <div className='footer__contactDetail'> 
                   <Room style={{marginRight:"10px"}}/> 55/ block A sector 32 Electronic City, Banglore, 242341
                </div> 
                <div className='footer__contactDetail'> 
                       <Phone style={{marginRight:"10px"}} /> +91 443122333
                </div>
                <div className='footer__contactDetail'> 
                      <MailOutline style={{marginRight:"10px"}} />  contact@ashtech.dev
                </div>
                <img className='footer__payment' src='https://user-images.githubusercontent.com/55404656/160160442-6b09c0ce-dd8c-4071-9913-592abe5e9189.png'/>
            </div>

        </div>
    )
}

export default Footer