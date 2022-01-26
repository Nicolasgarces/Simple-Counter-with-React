import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	console.log(props);
	return (
		<div className="container">
			<div className="row h">
				<div className="col digit">
					<i className="far fa-clock reloj"></i>
				</div>
				<div className="col digit">{props.contador6}</div>
				<div className="col digit">{props.contador5}</div>
				<div className="col digit">{props.contador4}</div>
				<div className="col digit">{props.contador3}</div>
				<div className="col digit">{props.contador2}</div>
				<div className="col digit">{props.contador1}</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	contador1: PropTypes.string,
	contador2: PropTypes.string,
	contador3: PropTypes.string,
	contador4: PropTypes.string,
	contador5: PropTypes.string,
	contador6: PropTypes.string,
};
export default Home;
