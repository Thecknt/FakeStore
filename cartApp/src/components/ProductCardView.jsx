import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const ProductCardView = ({
  handler,
  id,
  image,
  name,
  description,
  price,
}) => {
  const ProductCard = ({ productId }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${productId}/image`)
        .then((response) => response.blob())
        .then((blob) => setImage(blob));
    }, [productId]);
    console.log(setImage);
    if (image === null) {
      return <div>Loading...</div>;
    }
  };

  const navigate = useNavigate();
  const onAddProduct = (product) => {
    handler(product);
    navigate("/cart");
  };

  return (
    <>
            <div className="card">
              <img
                src={image}
                className="card-img-top custom-card-img" 
                alt="Image of product"
              />
              <div className="card-body">
                <h5 className="card-title"> {name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    onAddProduct({ id, image, name, description, price })
                  }
                >
                  Agregar
                </button>
              </div>
            </div>
    </>
  );
};
