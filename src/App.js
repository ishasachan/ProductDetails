import React, { Component } from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';
import ProductData from './ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0, 
  }

  onColorClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos });
  }
  onFeatureItemClick = (pos) => {

    this.setState({ currentSelectedFeature: pos });
  }
  render() {
    return (
      <div className="App">
        <Topbar />

        <div className={classes.Maincontainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature} />

          </div>

          <div className={classes.Productdata}>
            <ProductDetails data={this.state.productData}
              onColorClick={this.onColorClick}
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={
                this.state.currentSelectedFeature} />
          </div>
        </div>
      </div>


    );
  }
}

export default App;

