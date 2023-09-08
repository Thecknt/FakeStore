/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import '../cartView.css'
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const CartView = ({ handlerDelete, items }) => {

  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    setTotal(calculateTotal(items));
    sessionStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const onDeleteProduct=(id) => {
    handlerDelete(id);
  }

  const onCatalog = ()=>{
navigate('/catalog');
  }


  return (
    <>
      <h3 className="textH3">Carro de Compras</h3>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.product.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteProduct(item.product.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          ;
        </tbody>
        <tfoot className="foot">
          <td colSpan="3" className="text-end fw-bold">
            Total  
          </td>
          <td colSpan="2" className="text-start fw-bold total">
            ${total}
          </td>
        </tfoot>
      </table>
      <button className="btn btn-success"
      onClick={ onCatalog }>Volver a la Tienda</button>
    </>
  );
};
