//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;
setInterval(() => {
	contador1++;
	if (contador1 > 3) {
		contador2++;
		contador1 = 0;
		if (contador2 > 3) {
			contador3++;
			contador2 = 0;
			if (contador3 > 3) {
				contador4++;
				contador3 = 0;
				if (contador4 > 3) {
					contador5++;
					contador4 = 0;
					if (contador5 > 3) {
						contador6++;
						contador5 = 0;
						if (contador6 > 3) {
							contador6 = 1;
						}
					}
				}
			}
		}
	}
	ReactDOM.render(
		<Home
			contador1={contador1}
			contador2={contador2}
			contador3={contador3}
			contador4={contador4}
			contador5={contador5}
			contador6={contador6}
		/>,
		document.querySelector("#app")
	);
}, 1000);
//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
