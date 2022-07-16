import React from "react";
import styled from "styled-components";

import { About } from "../styles";

import Toggle from "./Toggle";

import {AnimateSharedLayout} from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
    const [element, control] = useScroll();

    return(
        <Faq variants={scrollReveal} ref = {element} animate={control} initial='hidden'>
            <AnimateSharedLayout>
                <h2>Any Questions? <span>FAQ</span></h2>
                <Toggle title={"Where do I start?"}>
                    <div className="answer">
                        Do eiusmod amet elit labore fugiat irure dolor proident labore reprehenderit.
                    </div>
                </Toggle>
                <Toggle title={"Daily Schedule"}>
                    <div className="answer">
                        Do eiusmod amet elit labore fugiat irure dolor proident labore reprehenderit.
                    </div>
                </Toggle>
                <Toggle title={"Different payment methods"}>
                    <div className="answer">
                        Do eiusmod amet elit labore fugiat irure dolor proident labore reprehenderit.
                    </div>
                </Toggle>
                <Toggle title={"What product do you offer"}>
                    <div className="answer">
                        Do eiusmod amet elit labore fugiat irure dolor proident labore reprehenderit.
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    
    span {
        display: block;
    }
    
    h2 {
        padding-bottom: 2rem;
    }
    
    .faq-line {
        background: white;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;

        }
    }
`;

export default FaqSection;