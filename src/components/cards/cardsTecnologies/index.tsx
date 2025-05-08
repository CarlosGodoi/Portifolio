'use client';

import { ReactNode, useEffect } from 'react';
import { technologies } from '../../../utils/interfaces/technologies';

// Função cn com tipagem correta
const cn = (...classes: string[]): string => classes.filter(Boolean).join(' ');

// Interface para props do Marquee
interface MarqueeProps {
	children: ReactNode;
	className?: string;
	reverse?: boolean;
	pauseOnHover?: boolean;
	duration?: string; // Adicionando prop para controle de duração
}

// Componente Marquee com tipagem
const Marquee = ({
	children,
	className = '',
	reverse = false,
	pauseOnHover = false,
	duration = '40s',
}: MarqueeProps) => {
	return (
		<div className={`relative flex overflow-hidden ${className}`}>
			<div
				className={`flex min-w-full shrink-0 items-center justify-around gap-2 py-4 ${
					pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
				} ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
				style={{ '--duration': duration } as React.CSSProperties}
			>
				{children}
			</div>
			<div
				className={`flex min-w-full shrink-0 items-center justify-around gap-2 py-4 ${
					pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
				} ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
				style={{ '--duration': duration } as React.CSSProperties}
			>
				{children}
			</div>
		</div>
	);
};

interface TechCardProps {
	logo: string;
	name: string;
	experience: string;
}

const TechCard = ({ logo, name, experience }: TechCardProps) => {
	return (
		<figure
			className={cn(
				'relative h-48 w-60 md:w-72 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300',
				// light styles
				'border-gray-950/[.1] bg-white hover:bg-zinc-200 hover:shadow-lg',
				// dark styles
				'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
			)}
		>
			<div className="flex h-full flex-col items-center">
				{/* Logo da tecnologia - usando placeholders como exemplo */}
				<div className="mb-3 flex h-24 w-24 items-center justify-center">
					<img
						src={logo}
						alt={`${name} logo`}
						className="h-full w-auto object-contain"
					/>
				</div>

				{/* Nome da tecnologia */}
				<h3 className="text-lg font-medium text-center text-zinc-900">
					{name}
				</h3>

				{/* Tempo de experiência */}
				<p className="text-sm text-gray-600 dark:text-gray-300">{experience}</p>
			</div>
		</figure>
	);
};

// Dividir as tecnologias em duas linhas, mantendo a divisão correta
const firstRow = technologies.slice(0, Math.ceil(technologies.length / 3));
const secondRow = technologies.slice(Math.ceil(technologies.length / 2));

// Função para criar as animações
const createAnimationStyles = (): void => {
	// Verifica se já existe um estilo com esse ID para evitar duplicação
	if (document.getElementById('marquee-animations')) return;

	const style = document.createElement('style');
	style.id = 'marquee-animations';
	style.innerHTML = `
    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(calc(-100% - 0.5rem)); }
    }
    @keyframes marquee-reverse {
      from { transform: translateX(calc(-100% - 0.5rem)); }
      to { transform: translateX(0); }
    }
    .animate-marquee {
      animation: marquee var(--duration, 40s) linear infinite;
    }
    .animate-marquee-reverse {
      animation: marquee-reverse var(--duration, 40s) linear infinite;
    }
  `;
	document.head.appendChild(style);
};

// Componente principal
export default function TechStackMarquee() {
	// Cria os estilos de animação quando o componente for montado
	useEffect(() => {
		createAnimationStyles();

		// Função de limpeza para remover o estilo quando o componente for desmontado
		return () => {
			const styleElement = document.getElementById('marquee-animations');
			if (styleElement) {
				styleElement.remove();
			}
		};
	}, []);

	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
			<Marquee pauseOnHover duration="55s">
				{firstRow.map((tech) => (
					<TechCard
						key={tech.name}
						logo={tech.logo}
						name={tech.name}
						experience={tech.experience}
					/>
				))}
			</Marquee>

			<Marquee reverse pauseOnHover duration="45s">
				{secondRow.map((tech) => (
					<TechCard
						key={tech.name}
						logo={tech.logo}
						name={tech.name}
						experience={tech.experience}
					/>
				))}
			</Marquee>

			<div className="pointer-events-none absolute inset-y-0 left-0 w-fit md:w-1/6 bg-black"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-fit md:w-1/6 bg-black"></div>
		</div>
	);
}
