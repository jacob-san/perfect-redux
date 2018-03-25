import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-actions';
import {bindActionCreators} from 'redux'; 
import { createSelector } from 'reselect';

class App extends Component {
  componentDidMount(){
    setTimeout(()=>{
      this.props.onApiRequest()
    },1500)
  }
  updateUser(e){
    this.props.onUpdateUser(e.target.value)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{`Hello ${this.props.user}`}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.updateUser.bind(this)}/>
      </div>
    );
  }
}
const productsSelector = createSelector(
  state => state.products,
  products => products
)
const userSelector = createSelector(
  state => state.user,
  user => user
)
const mapStateToProps = createSelector(
  state => state.products,
  state => state.user,
  (products, user) => ({
    products,
    user
  })
)
// const mapStateToProps = (state, props) => {
//   return {
//     products: state.products,
//     user: state.user,
//     userPlusProp: `${state.user}${props.randomProps}`
//   }
// }
const mapDispatchToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
 