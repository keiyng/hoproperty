import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import _ from 'lodash';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none', background: 'white' }}
      onClick={onClick}
    />
  );
}

class ImageSlider extends PureComponent {
  renderImages() {
    return _.map(this.props.images, image => {
      return (
        <i key="images">
          <img src={image} className="detailsImages" alt={this.props.label} />
        </i>
      );
    });
  }
  render() {
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
      <i>
        <Slider {...settings}>{this.renderImages()}</Slider>
      </i>
    );
  }
}

export default ImageSlider;
