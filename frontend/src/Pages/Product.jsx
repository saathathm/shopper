import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { BreadCrum } from '../Components/BreadCrums/BreadCrum.jsx';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const { loading, data } = useContext(ShopContext);
  const { productId } = useParams();
  
 const product = data.find((e) => e._id === productId); 
  
  return (
    
    <div>
      {loading ? (
        "Loading Please Wait"
      ) : (
      <>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts product={product} />
      </>)}
    </div>
  )
}
