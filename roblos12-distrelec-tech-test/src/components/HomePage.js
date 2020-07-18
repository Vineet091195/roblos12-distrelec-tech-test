import React from 'react';
import { connect } from 'react-redux';
import { getDataOnLoad } from '../redux/action/index';
import CardInfoComponent from './CardInfoComponent';
import ProductInfo from './ProductInfo';

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        listCount : this.props.data.slice(0,8),
        buttonVisible : true
      };
    }

    componentDidMount() {
      this.props.getDataOnLoad()
    }

    handleClick=()=>{
      this.setState({
        listCount : this.props.data,
        buttonVisible : false
      })
    }

    render() {
      return (
        this.props.data == null ? 'Loading' :
        <div className='homeContainer'>
        <ProductInfo/>
        <CardInfoComponent title={'Accessories'} data={this.props.data.slice(0,8)}/>
        <CardInfoComponent title={'Customers also bought'} data={this.state.listCount} buttonVisible={this.state.buttonVisible} buttonClick={this.handleClick}/>
        </div>
        );
      }
    }

    const mapStateToProps = state => ({
        data : state.dataResponse
    })

    const mapDispatchToProps = dispatch => ({
      getDataOnLoad: () => dispatch(getDataOnLoad()),
    })

    export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
