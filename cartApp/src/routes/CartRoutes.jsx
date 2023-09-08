/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"

export const CartRoutes = ({ handlerAddProductCart, handlerDeleteProduct, cartItems }) => {
  return (
    <>
           <Routes>
          <Route
            path="catalog"
            element={
              <CatalogView
                handler={(product) => handlerAddProductCart(product)}
              />
            }
          />

          <Route
            path="cart"
            element={
              cartItems?.length <= 0 ? (
                <div className="container-fluid alert alert-warning my-4 w-50">
                  No hay productos en el carrito de compras!
                </div>
              ) : (
                <div className="container-fluid my-4 w-50">
                  <CartView
                    items={cartItems}
                    handlerDelete={handlerDeleteProduct}
                  />
                </div>
              )
            }
          />

          <Route path="/" element={<Navigate to={"/catalog"} />} />
        </Routes>
    </>
  )
}
