import { Add, FeaturedVideo, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './Cart.css'
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../requestMethod'
import { useNavigate } from 'react-router-dom';
const KEY = "pk_test_51KVFslSAFCHgE8koTn4mf1dxrLAalw71Jo4JMlqnyO9efXY8GTNYQqnoP2VKOOVsv8EmfzGnqO9T6Hj9gjrUncbn00eUIND7bJ"

function loadScript(src) {
    return new Promise((resolve) => {

        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }

        document.body.appendChild(script)
    })
}

function Cart() {
    
    const quantity=useSelector(state=> state.cart.quantity);

    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate()


    const onToken = (token) => {
        setStripeToken(token);
    }

    // RazorPay setup --------------------------
    async function displayRazorpay() {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")


        if (!res) {
            alert('Razorpay SDK failed to load')
            return
        }

        const data = await fetch('http://localhost:8001/razorpay', { method: 'POST' })
            .then((t) => t.json())
        console.log(data)
        const options = {
            key: "rzp_test_Ll5QrBYLjadWiE",
            amount: data.amount.toString(),
            currency: "INR",
            name: "ASH_TECH",
            description: "Trust is the key to beleive",
            image: "https://cdn.dribbble.com/users/121405/screenshots/14505164/media/110202d29fb9385a6725179308197de2.png",
            order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        const paymentObject = new window.Razorpay(options)
        paymentObject.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        paymentObject.open()
    }


    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });

                history.push("/success", {
                    data: res.data
                    ,
                    products: cart
                });
            } catch (err) {

            }
        }
        stripeToken && cart.total >= 1 && makeRequest();
    }, [stripeToken, cart.total, history])
    return (
        <div className='cart'>
            <Navbar />
            <div className='cart__wrapper'>
                <h1> YOUR BAG</h1>
                <div className='cart__top'>
                    <Link to='/'>

                    <button> CONTINUE SHOPPING</button>
                    </Link>
                    <div className='cart__topTexts'>
                        <span> Shopping Bag({quantity})</span>
                        <span> Your Wishlist(0)</span>

                    </div>
                    <button style={{ border: "filled", backgroundColor: "black", color: "white" }}> CHECKOUT NOW</button>

                </div>
                <div className='cart__bottom'>

                    <div className='cart__info'>

                        {cart.products.map((product) =>
                        (<div className='cart__product'>
                            <div className='cart_productDetail'>
                                <img src={product.img} />
                                <div className='cart__details'>
                                    <span className='cart_productName'> <b>Product:</b> {product.title}</span>
                                    <span className='cart_productID'> <b>ID:</b>{product._id}</span>
                                    {/* <div className='cart__productColor' style={{ backgroundColor: `${product.color}` }} /> */}
                                    {/* <span className='cart_productSize'> <b>Size:</b> {product.size}</span> */}
                                </div>
                            </div>
                            <div className='cart_priceDetail'>
                                <div className='cart__productAmountContainer'>
                                    {/* <Add /> */}
                                    <span className='cart__productAmount'>x {product.quantity}</span>
                                    {/* <Remove /> */}
                                </div>
                                <span className='cart__productPrice'>₹ {product.price * product.quantity}</span>
                            </div>
                        </div>))}
                        <hr />

                    </div>
                    <div className='cart__summary'>
                        <h1 className='cart__summaryTitle'>ORDER SUMMARY</h1>
                        <div className='cart__summaryItem'>
                            <span className='cart__itemtext'> Subtotal</span>
                            <span className='cart__itemprice'>₹ {cart.total}</span>
                        </div>
                        <div className='cart__summaryItem'>
                            <span className='cart__itemtext'> Estimated</span>
                            <span className='cart__itemprice'> ₹ 50.90</span>
                        </div>
                        <div className='cart__summaryItem'>
                            <span className='cart__itemtext'> Shipping Discount</span>
                            <span className='cart__itemprice'> ₹ -50.90</span>
                        </div>
                        <div className='cart__summaryItem' style={{ fontSize: "24px", fontWeight: "500" }}>
                            <span className='cart__itemtext' > Total</span>
                            <span className='cart__itemprice'> ₹ {cart.total}</span>
                        </div>
                        {/* 
                        <StripeCheckout
                            name="AshTech"
                            image="https://cdn.dribbble.com/users/121405/screenshots/14505164/media/110202d29fb9385a6725179308197de2.png"
                            billingAddress
                            shippingAddress
                            description={`Your total is ₹ ${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}  >
                            <button className='checkout_button'> CHECKOUT NOW</button>
                        </StripeCheckout> */}

                        <button className='checkout_button' onClick={displayRazorpay}> CHECKOUT NOW</button>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart








// SECRET_RAZORPAY_KEY=BL50WgJuJaatAb3KgCjjh9r5
//AP__KEY=rzp_test_Ll5QrBYLjadWiE