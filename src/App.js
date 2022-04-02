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
                    img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80',
                    id: 1
                },
                {
                    price: 100,
                    title: 'Laptop',
                    qty: 10,
                    img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
                    id: 2
                },
                {
                    price: 1000,
                    title: 'Watches',
                    qty: 2,
                    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
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
  getTotalPrice = () => {
    const { products } = this.state;
    let tPrice = 0;
    products.forEach((product) => {
      let price = product.qty * product.price;
      tPrice += price;
    })
    return tPrice;
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
          <div style={ {padding: 10, fontSize: 30, fontWeight: 'bold'} }>Total Price: Rs {this.getTotalPrice()}</div>
        </div>
    );
  }
  
}

export default App;
