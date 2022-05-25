import React, { lazy } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "../../components/Card/index";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #979da6;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section id="testimonials">
      <Title>Our Top Service!</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text= "On many occasions police encounter serial crimes Using its accurate and powerful machine learning model crime pattern
             clustering allows the investigation team to investigate the crime by searching past cases for 
            similar crime patterns and potentially identifying the criminal."
            name="Identify through Pattern"
            image="avatar-1"
          />

          <Card
            text="Estimonies are a vital part of an investigation, so this module allows the ITP in recording testimonies its secure video call service. This video call recording will be helpful in investigation, as it cannot be tempered or deleted."
            name="Video Call and Testimony"
            image="avatar-2"
          />

          <Card
            text="An accurate machine learning model trained to identify a person using facial recognition algorithms to search for a previous criminal utilizing a single face photograph. The Investigation Team Panel (ITP) 
            can also use the CNIC number and name to search for the criminal database."
            name="Retrieving Criminal Data"
            image="avatar-3"
          />

   
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
