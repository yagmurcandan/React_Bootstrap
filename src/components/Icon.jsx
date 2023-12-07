import {Col} from "react-bootstrap";
import classes from "./icon.module.scss";

const Icon = ({icon, title, content}) => {
    return ( 
        <Col id="about" sm={12} xl={4}> 
        <div className="bg-light p-5 mb-5 rounded">
        <div className="d-flex flex-column  justify-content-center align-items-center">
        <div style={{marginTop:-70}} className={`${classes.icon} d-flex justify-content-center align-items-center text-white rounded mb-2 fs-2`}>{icon}</div>           
            <h2 className="text-center fw-bold fs-4">{title}</h2>
            <p className="text-center mb-3">{content}</p>
            </div>
        </div>
       
        </Col>
    );
};

export default Icon;