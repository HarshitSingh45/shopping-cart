import React from "react";
import CartItem from "./CartItem";

// class Cart extends React.Component{
    const Cart = (props) => {
    // constructor () {
    //     super();
    //     this.state = {
    //         products: [
    //             {
    //                 price: 999,
    //                 title: 'Mobile Phone',
    //                 qty: 1,
    //                 img: '',
    //                 id: 1
    //             },
    //             {
    //                 price: 10999,
    //                 title: 'Laptop',
    //                 qty: 10,
    //                 img: '',
    //                 id: 2
    //             },
    //             {
    //                 price: 1000,
    //                 title: 'Watches',
    //                 qty: 100,
    //                 img: '',
    //                 id: 3
    //             }
    //         ]
    //     }
    // }
    // handleIncreaseQty = (product) => {
    //     console.log('Hey increase the qty of ', product);
    //     const { products } = this.state;
    //     const index = products.indexOf(product);

    //     products[index].qty += 1;

    //     this.setState({ 
    //         products: products
    //         // or simply write products
    //     })
    // }
    // handleDecreaseQty = (product) => {
    //     const { products } = this.state;
    //     const index = products.indexOf(product);

    //     if(products[index].qty === 0){
    //         return;
    //     }

    //     products[index].qty -= 1;

    //     this.setState({
    //         products
    //     })
    // }
    // handleDeleteProduct = (id) => {
    //     const { products } = this.state;

    //     const items = products.filter((item) => item.id !== id);

    //     this.setState({
    //         products: items
    //     })
    // }
    // render() {
        // how to render list of item in react
        // const arr = [1,2,3,4,5];
        // return (
                //  <div className="cart"> 
                //      {arr}
                // </div>
                // op 12345

                // <div className="cart">
                //     {/* if we want to add 5 to each element */}
                //      {arr.map((item) => {
                //          return item + 5
                //      })}
                // </div>
                // op 678910
        // )

        // props are similar to arguments whivh we pass to the function
        // i can pass prop to CartItem ant it will use prop as arguments 
        // how to pass prop to cartitem
        // <CartItem qty={1} price={99} title={'watch'} img={''} />
        // it will be visible in cartitem check by console.log(this.props)

        const {products } = props;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                       <CartItem 
                          product = {product} 
                          key={ product.id } 
                          onIncreaseQty = { props.onIncreaseQty  }
                          onDecreaseQty = { props.onDecreaseQty }
                          onDeleteProduct = { props.onDeleteProduct }                        //   we can pass almost anything in props
                        //   func = { () => console.log(' Passing function in props ')}
                        //   isLoggedIn = { false }
                        //   jsx = { <h1>Test</h1> } 
                        //   comp = { <CartItem /> }
                        />
                    )
                    // If the parent want to share data with childrens it can  use props  
                    // if we dont use keys we will get warning in console
                    // beacuse react doesnt knows to differetiate between diff cartitems
                    // if we made change in any one cartitem then react doesnt know in which cartitem it shouls make change
                     
                })}
                {/* <CartItem qty={1} price={99} title={'watch'} img={''} /> */}
            </div>
        )
    // }
}

export default Cart;
