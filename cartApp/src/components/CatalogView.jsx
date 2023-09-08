import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";


// eslint-disable-next-line react/prop-types
export const CatalogView = ( { handler } )=>{
    const [products, setProducts] = useState([]);

    const findAll = async() =>{
      const productsBackend = await getProducts();
         setProducts(productsBackend);
       
     }
       useEffect(() => {
         findAll();
       }, []);

    return(
        <>
        <div className="row">
          {products.map(prod => (
            <div className="col-3" style={{marginBottom: '2px'}} key={prod.id}>
              <ProductCardView 
              handler={ handler}
              id={prod.id}
              image={prod.image}
              name={prod.name} 
              description={prod.description} 
              price={prod.price}/>
            </div>
          ))};
        </div>
        </>
    )
}