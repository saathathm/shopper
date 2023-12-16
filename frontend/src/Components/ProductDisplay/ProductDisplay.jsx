import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const imagePath = "http://localhost:3000/Assets/" + product.image;
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={imagePath} alt="" />
                    <img src={imagePath} alt="" />
                    <img src={imagePath} alt="" />
                    <img src={imagePath} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={imagePath} alt="" />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p style={{ marginLeft: '2px' }}> (122) </p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    <p>A lightweight, usually knitted, pullover shirt, close-fitting, a round neck line and short sleeves. Our floral Short Sleeve Casual Shirt for Men, available in sizes M to XL. Made with high-quality viscose material, this shirt is perfect for casual occasions.</p>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product._id) }}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span> Women, T-shirt, Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
            </div>
        </div>
    )
}
