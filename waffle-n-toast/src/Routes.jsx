import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';

function NotFound() {
	return (
		<div>
			<h1>404 — Not Found</h1>
			<p>The page you requested was not found.</p>
			<Link to="/">Go home</Link>
		</div>
	);
}

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

