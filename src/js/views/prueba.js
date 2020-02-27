import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export function Prueba() {
	const [people, setPeople] = useState([]);
	useEffect(() => {
		fetch("https://swapi.co/api/people/", {
			method: "GET",
			cache: "no-cache"
		})
			.then(response => response.json())
			.then(data => {
				console.log(data.results);
				setPeople(data.results);
			})
			.catch(err => console.error(err));
	}, []);
	return (
		<div className="text-center">
			<h1>Holaaaa</h1>
			{people.map((item, index) => {
				return (
					<a key={index}>
						<div key={index}>{item.name}</div>
					</a>
				);
			})}
		</div>
	);
}
