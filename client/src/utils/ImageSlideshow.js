import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _ from 'lodash';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" }}
        onClick={onClick}
      />
    );
  }


class SimpleSlider extends Component {
    renderImages() {
        return _.map(this.props.images, image => {
            return (
                <div key="images">
                <img src={image} width="300px" height="200px" alt={this.props.label}></img>
                </div>
            )
        })
    }
    render() {
        // Object.size = (obj) => {
        //     let size = 0, key;
        //     for (key in obj) {
        //         if (obj.hasOwnProperty(key)) size++;
        //     }
        //     return size;
        // };
        //  const size = Object.size(this.props.images);
        const settings = {
          dots: true,
          infinite: true,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <Arrow />,
          prevArrow: <Arrow />
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

