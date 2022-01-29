import PropTypes from "prop-types";
import styles from "./Button.module.css";

// function Button({ text, backColor, textColor, border = "none", borderRadius = "5px"}){
//     return <button style={{
//         backgroundColor: backColor,
//         color: textColor,
//         border: border,
//         borderRadius: borderRadius,
//     }}>{text}</button>;
// }

function Button({ text }){
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}


export default Button;