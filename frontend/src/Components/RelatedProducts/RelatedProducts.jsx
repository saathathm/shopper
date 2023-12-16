import React, { useContext, useEffect } from 'react'
import './RelatedProducts.css'
import { Item } from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

export const RelatedProducts = (props) => {
    const { setGotData, relatedProducts } = useContext(ShopContext);
    const { product } = props;

    useEffect(() => {
        // Move the setGotData call to useEffect
        setGotData([product.category,product._id]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product._id]); // Only run when product.category changes

    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {relatedProducts.map((item, i) => (
                    <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
        </div>
    )
}
