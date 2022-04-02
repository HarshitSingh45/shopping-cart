import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    render() {
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

        return (
            <div className="cart">
                <CartItem qty={1} price={99} title={'watch'} img={''} />
            </div>
        )
    }
}

export default Cart;
