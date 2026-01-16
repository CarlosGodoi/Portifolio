import '../App.css';
import { Divisor } from '../components/divisor';
import { Header } from '../components/header';
import imgMain from '../assets/img/foto6.jpg';
import imgAbout from '../assets/img/foto1.jpg';
import { useTranslation } from 'react-i18next';
import { ButtonGroup } from '../components/buttonGroup';
import { CardProjects } from '../components/cards/cardProjects';
import { BoxReveal } from '../components/magicui/box-reveal';
import { Footer } from '../components/footer';
import CardsTecnologies from '../components/cards/cardsTecnologies';
import { MdOutlineEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AssistantButton } from '../components/assistant/assitantButton';
import { ChatWindow } from '../components/assistant/chatWindow';
import { useState } from 'react';
import ProfileCard from '@/components/ProfileCard';

function Home() {
	const [chatOpen, setChatOpen] = useState(false);
	const { t } = useTranslation();

	return (
		<main className="w-full min-h-screen bg-black flex flex-col">
			<Header />
			<section className="flex justify-center py-6 sm:py-8 md:py-12 px-4 sm:px-6">
				<div className="flex flex-col-reverse md:flex-row max-w-[1600px] w-full justify-between gap-6 md:gap-4">
					<div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center md:px-0 lg:px-10">
						<BoxReveal>
							<h1 className="max-w-md text-3xl sm:text-4xl md:text-5xl text-white font-bold font-display text-center md:text-left">
								{t('main.title')}
							</h1>
						</BoxReveal>
						<BoxReveal>
							<p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 mt-4 text-center md:text-left">
								{t('main.text-apresentation')}
							</p>
						</BoxReveal>

						<div className="flex justify-center md:justify-start w-full">
							<ButtonGroup />
						</div>
					</div>
					<div
						className="w-[70%] sm:w-[60%] md:w-[80%] lg:w-[70%] max-w-[420px] aspect-square rounded-full p-[5px]
        bg-gradient-to-tr from-indigo-500 via-purple-400 to-blue-500 flex items-center justify-center mx-auto md:mx-0"
					>
						<img
							src={imgMain}
							alt=""
							className="w-full h-full rounded-full object-cover bg-white"
						/>
					</div>
				</div>
			</section>

			<Divisor />

			<section
				className="flex flex-col px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10"
				id="projects"
			>
				<div className="flex flex-col max-w-[600px] w-full mx-auto md:mx-0">
					<h2 className="text-3xl md:text-4xl text-white font-bold text-center md:text-left">
						{t('section-projects.title')}
					</h2>
					<p className="text-lg sm:text-lg text-gray-300 mt-3 md:mt-4 text-center md:text-left">
						{t('section-projects.description')}
					</p>
				</div>

				<CardProjects />
			</section>

			<Divisor />

			<section
				className="flex flex-col px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10"
				id="technologies"
			>
				<div className="flex flex-col w-full items-center md:px-10 md:py-6">
					<h2 className="text-3xl md:text-4xl text-white font-bold text-center md:text-left">
						{t('section-technologies.title')}
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl w-full mt-4 text-center md:text-left">
						{t('section-technologies.description')}
					</p>
				</div>

				<CardsTecnologies />
			</section>

			<Divisor />

			<section
				id="about"
				className="
    w-full
    flex
    flex-col
    md:flex-row
    items-center
    md:items-stretch
    px-6
    md:px-10
    py-10
    mb-14
    gap-8
  "
			>
				{/* TEXTO */}
				<div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
					<h2 className="text-3xl md:text-5xl text-white font-bold">
						{t('section-about.title')}
					</h2>

					<p className="text-base md:text-2xl text-gray-300 mt-4 md:mt-6">
						{t('section-about.description')}
					</p>
				</div>

				{/* CARD */}
				<div className="w-full md:w-1/2 flex justify-center">
					<div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
						<ProfileCard
							name="Carlos Godoi"
							title="Front-End Developer"
							handle="carlosgodoi"
							status="Online"
							contactText="Entrar em contato"
							avatarUrl={imgAbout}
							showUserInfo
							enableTilt
							enableMobileTilt={false}
							onContactClick={() =>
								document
									.getElementById('contact')
									?.scrollIntoView({ behavior: 'smooth' })
							}
						/>
					</div>
				</div>
			</section>

			<Divisor />

			<section className="flex flex-col px-10 py-10" id="contact">
				<div className="flex flex-col">
					<h2 className="text-3xl text-center md:text-5xl md:text-left text-white font-bold">
						{t('section-contact.title')}
					</h2>
					<p className="text-base text-center md:text-2xl md:text-left text-gray-300 mt-6">
						{t('section-contact.description')}
					</p>
				</div>

				<div className="flex flex-col gap-3 mt-10 mb-10">
					<a
						href="mailto:edu-godoi@hotmail.com"
						className="flex items-center gap-2 hover:text-white transition-colors"
					>
						<MdOutlineEmail size={30} />
						<p className="text-base md:text-lg text-gray-300">
							edu-godoi@hotmail.com
						</p>
					</a>

					<a
						href="https://wa.me/5551997216453"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-green-500 transition-colors"
					>
						<FaWhatsapp size={30} />
						<p className="text-base md:text-lg text-gray-300">WhatsApp</p>
					</a>

					<a
						href="https://www.linkedin.com/in/carlosegodoi"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-blue-500 transition-colors"
					>
						<FaLinkedin size={30} />
						<p className="text-base md:text-lg text-gray-300">Linkedin</p>
					</a>
				</div>
			</section>
			{chatOpen && <ChatWindow onClose={() => setChatOpen(false)} />}

			<div onClick={() => setChatOpen((prev) => !prev)}>
				<AssistantButton />
			</div>

			<Footer />
		</main>
	);
}

export default Home;
