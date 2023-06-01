import React from "react";
import classes from './ProductPreview.module.css';
const ProductPreview = (props) => {
    const currentHour = new Date() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMin = new Date() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return (

        <div className={classes.ProductPreview} >


            <img src={props.currentPreviewImage} alt="watch" />

            {
                props.currentSelectedFeature === 1 ?
                    <div className={classes.Heart}>
                        <i className="fas fa-heartbeat"></i>
                        <p> 78</p>
                    </div>
                    :

                    <div className={classes.Date}>
                        <p> {`${currentHour} : ${currentMin}`}</p>

                    </div>

            }


        </div>

    );
}

export default ProductPreview;