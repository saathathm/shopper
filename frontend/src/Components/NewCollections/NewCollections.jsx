import React, { useContext } from 'react'
import './NewCollections.css'
import { Item } from '../Item/Item'
import { ShopRandomProductsContext } from '../../Context/ShopRandomProductsContext'

export const NewCollections = () => {
    const { data } = useContext(ShopRandomProductsContext);
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {data.map((item, i) => {
                    return <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}
