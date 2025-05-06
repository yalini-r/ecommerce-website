import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { useParams } from 'react-router-dom';
// import BreadCrumb from '../components/breadcrumbs/bdcrumb';
import ProductDisplay from '../components/productDisplay/pd';
import RelatedProducts from '../components/related-pd/relatedpd';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Find the product based on the ID
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      {/* <BreadCrumb product={product} /> */}
      <ProductDisplay product={product} />
      
      {/* Pass category to RelatedProducts */}
      <RelatedProducts category={product?.category} />
    </div>
  );
};

export default Product;
