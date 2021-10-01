import { Component } from "react";
import { connect } from "react-redux";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div id="dashboard" >Dashboard</div>
          <div id="cart">Cart - <span>{this.props.cartCount}</span></div>
        </div>
        <div className="line"></div>
        <hr />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    cartCount: state.cartCount
  };
};
export default connect(mapStateToProps)(Header);