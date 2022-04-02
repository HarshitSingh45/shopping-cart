import Cart from "./Cart";
import Navbar from "./NavBar";
import React from "react";

// function App() {
class App extends React.Component{
  constructor () {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 10999,
                    title: 'Laptop',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 1000,
                    title: 'Watches',
                    qty: 100,
                    img: '',
                    id: 3
                }
            ]
        }
    }
    handleIncreaseQty = (product) => {
      console.log('Hey increase the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({ 
          products: products
          // or simply write products
      })
  }
  handleDecreaseQty = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return;
      }

      products[index].qty -= 1;

      this.setState({
          products
      })
  }
  handleDeleteProduct = (id) => {
      const { products } = this.state;

      const items = products.filter((item) => item.id !== id);

      this.setState({
          products: items
      })
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  render() {
    const { products } = this.state; 
    return (
        <div className="App">
          <Navbar count = {this.getCartCount()} />
          <Cart 
              products = {products} 
              onIncreaseQty = { this.handleIncreaseQty  }
              onDecreaseQty = { this.handleDecreaseQty }
              onDeleteProduct = { this.handleDeleteProduct }     
  />
        </div>
    );
  }
  
}

export default App;
