import React, {useState} from "react";
import {motion} from "framer-motion";

const Toggle = ({children, title}) => {
    const [toggle, settoggle] = useState(false);
    return (
        <motion.div layout className="question" onClick={() => settoggle(!toggle)}>
            <motion.h3 layout >{title}</motion.h3>
            {toggle ? children : ''}
            <div className="faq-line"></div>
        </motion.div>
    )
}

export default Toggle;