import { Component } from "react";
import { connect } from "react-redux";
class Product extends Component {
    render() {
        return (
            <div className="productBox">
                <div className="productName">
                    <h5>{this.props.selectedBot.bot}</h5>
                    <p>{this.props.selectedBot.description}</p>
                    <button id="riskbtn">ModerateRisk</button>
                    <button id="buybtn" onClick={() => this.props.addCart()}>Buy</button>
                </div>
                <div className="productval">
                    <span id="colT">Index Value</span><br />
                    <span id="colV" style={{ fontWeight: "bold" }}>{this.props.selectedBot.indexvalue}</span>
                </div>
                <div className="productper">
                    <span id="colT">CAGR</span>
                    <br /><span id="colP" style={{ fontWeight: "bold" }}>{this.props.selectedBot.cagr}</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        bots: state.bots,
        cart: state.cart,
        selectedBot: state.selectedBot
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addCart: () => { dispatch({ type: 'ADD_CART' }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);