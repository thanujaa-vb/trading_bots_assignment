import { Component } from "react";
import history from './History.js';
import { connect } from "react-redux";
class BotDetails extends Component {
    render() {
        return (
            <div className="container">
                <p>select the best algo suited for your needs</p>
                {this.props.bots.map((bot, index) => {
                    return (<div>
                        <div className="table">
                            <div className="column1">{bot.bot}</div>
                            <div className="column2"><span id="colT">Index Value</span><br />
                                <span id="colV">{bot.indexvalue}</span></div>
                            <div className="column3" ><span id="colT">CAGR</span>
                                <br /><span id="colP">{bot.cagr}</span></div>
                            <div className="column4"><button onClick={() => { this.props.item(index); history.push('/bot-details/id:'+(bot.id)) }}>View algo</button><br />
                                <button onClick={() => this.props.addCart(bot.id)}>Buy</button></div>
                        </div>
                        <hr />
                    </div>
                    )
                })};
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        bots: state.bots,
        cart: state.cart
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addCart: () => { dispatch({ type: 'ADD_CART' }) },
        item: (index) => { dispatch({ type: 'EACH_DATA', payload: index }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BotDetails);