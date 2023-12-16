import React, { useContext } from 'react'
import './Popular.css'
import { Item } from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

export const Popular = () => {
    const { womenPopular } = useContext(ShopContext);

    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {
                    womenPopular === null ? ("Loading") :
                        (
                            <>
                                {

                                    womenPopular.map((item, i) => {
                                        return <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                                    }
                                    )
                                }
                            </>
                        )
                }
            </div>
        </div>
    )
}
