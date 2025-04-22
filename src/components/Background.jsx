import React from "react";

export default function Background({ children }) {
	return (
		<div className="app">
			{children}
			<img
				className="quadrado-pontilhado"
				src="./imgs/quadrado-pontilhado.png"
				alt="Quadrado pontilhado"
			/>
			<img
				className="circle-blur-1"
				src="./imgs/circle-blur-1.png"
				alt="Circulo azul 1"
			/>
			<img
				className="circle-blur-2"
				src="./imgs/circle-blur-2.png"
				alt="Circulo azul 1"
			/>
		</div>
	);
}
