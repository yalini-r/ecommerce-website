import React from 'react';
import './newcol.css';
import new_cts from '../assets/new_collections';
import Items from '../items/items';
import { useNavigate } from 'react-router-dom';

const NewCollections = () => {
  const navigate = useNavigate();
    // Navigate to the correct ShopCategory page
    const handleExploreMore = () => {
      
        navigate('/products');
      
    };
  return (
    <div className='new-cts'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='cts'>
           {new_cts.map((item , i)=>{
          return  <Items 
                     Key={i}  
                     id={item.id} 
                     name={item.name}
                     image={item.image}
                     new_price ={item.new_price}
                     old_price ={item.old_price}
                    />
           })}
        </div>
        <div className='shp-ctg-loadmore' onClick={handleExploreMore}>
        Explore More
      </div>
    </div>
  )
}

export default NewCollections;