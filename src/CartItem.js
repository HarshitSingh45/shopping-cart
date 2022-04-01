import React from "react";

class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        // if we have multiple event handler we can bin them here
        // this.increaseQty = this.increaseQty.bind(this);
    }
    increaseQty = () => {
        console.log(this.state);
        // naive thought
        // this.state.qty += 1;
        // but this will only increase value in state and not be shown in webpage
        // because react does'nt knows we incread the value
        // so, react gives a sp function to set state value

        // setState form 1 - shallow merging
        // this.setState({
        //     qty: this.state.qty + 1
        // })
        // setState form 2
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        })
    }
    render() {
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
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
                        />
                        <img 
                           alt="delete" 
                           className="action-icons" 
                           src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
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