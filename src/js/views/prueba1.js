import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../component/card";
import "../../styles/home.scss";

export function Prueba1(props) {
	const [people, setPeople] = useState();
	useEffect(() => {
		fetch("https://swapi.co/api/people/" + props.match.params.numero, {
			method: "GET",
			cache: "no-cache"
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setPeople(data);
			})
			.catch(err => console.error(err));
	}, []);

	// console.log(filter(id, people));

	return (
		<div className="text-center">
			{people && <h1>{people.name}</h1>}

			<Card />
		</div>
	);
}

Prueba1.propTypes = {
	match: PropTypes.object
};
