import React from "react";
import classes from './ProductDetails.module.css';


const ProductDetails = (props) => {
  /*console.log(props.data);*/  //access in console
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage];
    if (pos === props.currentPreviewImagePos) {
      classArr.push(classes.SelectedProductImage);
    }
    return (
      <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorClick(pos)} />
    );
  })

  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [classes.button];
    if (pos === props.currentSelectedFeature ) {

      classArr.push(classes.selectedbutton);
    }
    
    return (
      <button onClick={() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
    )
      ;
  })
  return (
    <div className={classes.Productdata}>
      <h1 className={classes.ProductTitle}>{props.data.title}</h1>
      <p className={classes.ProductDescription}> {props.data.description}</p>
      <h3 className={classes.sectionheading}>Select Color</h3>
      <div>
        {colorOptions}
        {/* <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt='watchblack ' />
          <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt='watchred' />
          <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt='watchblue' />
          <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt='watchpurple' /> */}

      </div>
      <h3 className={classes.sectionheading}>Features</h3>
      <div>
        {/*<button className={[classes.button,classes.selectedbutton].join(' ')}>Time</button>
          <button className={classes.button}>Heart Rate</button> */}
        {featureList}

      </div>

      <button className={classes.buynow}>Buy Now</button>
    </div>
  );
}


export default ProductDetails;