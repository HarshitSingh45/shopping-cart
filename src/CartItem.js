import React from "react";

class CartItem extends React.Component{
    // constructor () {
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     // if we have multiple event handler we can bin them here
    //     // this.increaseQty = this.increaseQty.bind(this);
    // }
    increaseQty = () => {
        console.log(this.state);
        // this.setState is asynchronous 

        // naive thought
        // this.state.qty += 1;
        // but this will only increase value in state and not be shown in webpage
        // because react does'nt knows we incread the value
        // so, react gives a sp function to set state value

        // setState form 1 - shallow merging
        // if i dont require the previous form we use this form
        // like if we just want to change title
        // this.setState({
        //     qty: this.state.qty + 1
        // })
        // if we call this.setState more than one times, the qty should increase by n times 
        // but this does'nt happen, qty is increased only once, beacause of the concept of batching
        // batching - react merges all calls shallowly  
        // react does it for us, in an event handler, if this.setState is executed only once 
        // react combines all this.setState into one
        // whichever this.setState last call & last object is at last will be executed

        // setState form 2
        // when we need to change value according to previous form then we use this 
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        })
        // if we write this.setState 3 times then unlike form 1 here value will increment by 3
        // but page will be rendered only once
        // in this form all callbacks will be stored in a queue and executes in fifo fashion
        // and then page will be rendered

        // since this.setState is asynchronous, what to do if we want to perform any task once this.setState is completed
        // then we use callback like this
        // this.setState((prevState) => {
        //     return{
        //         qty: prevState.qty + 1
        //     }
        // }, () => {
        //     console.log(this.state);
        // })
        // like this we can do in form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // }, () => {
        //    console.log(this.state);
        // })

        // in ajax call or in promises react doesnt do batching for us
    }
    decreaseQty = () => {
        const { qty } = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        })
    }
    
    render() {
        // console.log(this.props);
        // const {price, title, qty} = this.state;
        const {price, title, qty} = this.props.product; 

        return (
            <div className="cart-item">
                {/* {this.props.jsx} */}
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty {qty}</div>
                    <div className="cart-item-actions">
                        {/* Butttons */}
                        <img 
                           alt="increase" 
                           className="action-icons" 
                           src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                           onClick={this.increaseQty}
                        />
                        <img 
                           alt="decrease" 
                           className="action-icons" 
                           src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                           onClick={this.decreaseQty}
                        />
                        <img 
                           alt="delete" 
                           className="action-icons" 
                           src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        //    onClick={this.handleClick}
                        />
                    </div>

                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;