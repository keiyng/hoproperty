import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _ from 'lodash';

class SimpleSlider extends Component {
    renderImages() {
        return _.map(this.props.images, image => {
            return (
                <div key="images">
                <img src={image} width="350px" height="250px" alt={this.props.label}></img>
                </div>
            )
        })
    }
    render() {
        Object.size = (obj) => {
            let size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };
         const size = Object.size(this.props.images);
        
        var settings = {
          dots: true,
          infinite: true,
          speed: 1500,
          slidesToShow: 2,
          slidesToScroll: 1
        };
        return (
            <div style={{width: "65%"}}>
          <Slider {...settings}>
            {this.renderImages()}
          </Slider>
          </div>
        );
      }
}

export default SimpleSlider;