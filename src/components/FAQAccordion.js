"use client";
import { useState } from "react";

const faqs = [
	{
		question: "¿Atienden pie diabético?",
		answer: "Sí, somos especialistas en el tratamiento de pie diabético en Quito.",
	},
	{
		question: "¿Necesito cita previa?",
		answer: "Sí, es recomendable agendar una cita para una mejor atención.",
	},
	{
		question: "¿Atienden a niños y adultos mayores?",
		answer: "Sí, brindamos atención a pacientes de todas las edades.",
	},
	{
		question: "¿Dónde están ubicados?",
		answer: "Estamos en Manuel Jordan y Av La Florida, Quito.",
	},
];

export default function FAQAccordion() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<div className="w-full max-w-xl mx-auto my-8">
			<h2 className="text-2xl font-bold mb-4 text-center">
				Preguntas Frecuentes
			</h2>
			<div className="space-y-2">
				{faqs.map((faq, idx) => (
					<div
						key={idx}
						className="border rounded-lg bg-white text-black"
					>
						<button
							className="w-full text-left px-4 py-3 font-semibold focus:outline-none flex justify-between items-center"
							onClick={() => toggle(idx)}
						>
							{faq.question}
							<span>{openIndex === idx ? "-" : "+"}</span>
						</button>
						{openIndex === idx && (
							<div className="px-4 pb-4 text-gray-700">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
			<div className="mt-6 text-center">
				<a
					href="/faq"
					className="inline-block bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary transition-colors"
				>
					Ver más preguntas frecuentes
				</a>
			</div>
		</div>
	);
}
