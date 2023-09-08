

export const getProducts =  async() => {

const response = await fetch('https://fakestoreapi.com/products/');

const products = await response.json();

        return products;
}

export const calculateTotal = (items) => {
   return items.reduce((accumulator, item) => accumulator + item.product.price * item.quantity, 0);
}