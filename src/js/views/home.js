import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		<div className="container">
			<Link to="/prueba">
				<a href="#" className="btn btn-primary">
					My page
				</a>
			</Link>
		</div>
	</div>
);
