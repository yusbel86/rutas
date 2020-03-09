import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export function Login() {
	return (
		<div className="text-center container">
			<h1>Login Page</h1>
			<Link to={"/home"}>
				<button className="btn btn-primary">Login</button>
			</Link>
		</div>
	);
}
