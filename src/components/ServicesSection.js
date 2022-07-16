import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png"
import styled from "styled-components";

import { About, Description, Image, Hide } from "../styles";
import { scrollReveal } from '../animation';
import { useScroll } from "./useScroll";

const ServicesSection = ()=> {
    const [element, control] = useScroll()
    return(
        <Services variants={scrollReveal} ref={element} animate={control} initial='hidden'>
            <Description>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={clock} />
                            <h3>Efficient</h3>
                        </div>
                        
                        <p>bruhmoment</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={diaphragm} />
                            <h3>Diaphragm</h3>
                        </div>
                        
                        <p>bruhmoment</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={money} />
                            <h3>Affordable</h3>
                        </div>
                        
                        <p>bruhmoment</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={teamwork} />
                            <h3>Teamwork</h3>
                        </div>
                        
                        <p>bruhmoment</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                
                <img src={home2} alt="home2"></img>
            </Image>

        </Services>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 2rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
      justify-content: center;
   }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            padding: 1rem;
            background-color: white;
            color: black;
        }
    }

`;

export default ServicesSection;