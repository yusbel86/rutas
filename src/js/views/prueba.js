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
		<div className="text-center container">
			{people.map((item, index) => {
				return (
					<Link to={"/prueba1/" + (index + 1)} key={index}>
						<ul className="list-group list-group-flush" key={index}>
							<li className="list-group-item">{item.name}</li>
						</ul>
					</Link>
				);
			})}
		</div>
	);
}
