import ImgProject1 from '../../../assets/img/Agendamed.png';
import ImgProject2 from '../../../assets/img/Prestige.png';
import { Divisor } from '../../divisor';
import { MdArrowOutward } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export const CardProjects = () => {
	const { t } = useTranslation();
	return (
		<>
			{/* Primeiro Projeto */}
			<div className="w-full flex flex-col md:flex-row md:justify-between mt-8 md:mt-16">
				{/* Imagem do Projeto */}
				<div className="flex flex-col bg-zinc-900 w-full md:w-1/2 rounded-xl mb-6 md:mb-0">
					<span className="flex justify-center items-center w-40 bg-zinc-950 text-white text-base sm:text-lg font-medium rounded-full p-2 mt-4 md:mt-6 mx-auto md:ml-8 md:mr-auto">
						{t('section-projects.card-1.image-title')}
					</span>

					<img
						src={ImgProject1}
						alt={t('section-projects.card-1.alt-image')}
						className="w-full h-auto md:h-[500px] px-4 py-4 md:px-10 md:py-10 rounded-lg"
					/>
				</div>

				{/* Descrição do Projeto */}
				<div className="flex w-full md:w-1/2 justify-center gap-2 md:gap-4 px-2 md:px-5 py-3 md:py-7">
					<div className="flex flex-col w-full md:max-w-11/12">
						<h3 className="text-white text-2xl md:text-3xl font-medium text-center md:text-left">
							{t('section-projects.card-1.title')}
						</h3>
						<p className="text-base md:text-lg text-gray-300 font-normal mt-2 md:mt-3 text-center md:text-left">
							{t('section-projects.card-1.description')}
						</p>

						<div className="flex flex-col mt-10 md:mt-5">
							<h3 className="text-base text-white font-semibold text-left">
								{t('section-projects.card-1.informations-project-title')}
							</h3>
							<Divisor />
							<div className="flex justify-between items-center">
								<p className="text-sm md:text-base text-white font-medium">
									{t('section-projects.card-1.informations-project-year')}
								</p>
								<p className="text-sm md:text-base text-zinc-400 font-medium">
									{t('section-projects.card-1.informations-project-date')}
								</p>
							</div>
							<Divisor />
							<div className="flex justify-between items-center">
								<p className="text-sm md:text-base text-white font-medium">
									{t('section-projects.card-1.informations-project-role')}
								</p>
								<p className="text-sm md:text-base text-zinc-400 font-medium">
									{t('section-projects.card-1.informations-project-developer')}
								</p>
							</div>
							<Divisor />
						</div>

						<div className="flex flex-col gap-1 mt-4 w-fit">
							<div className="flex items-center gap-1">
								<a
									href="https://agendamed-front.vercel.app/"
									className="text-primary text-base md:text-lg font-medium"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t('section-projects.card-1.link-live-project')}
								</a>
								<MdArrowOutward className="text-primary" size={20} />
							</div>

							<div className="h-0.5 bg-primary w-full mt-1"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Segundo Projeto */}
			<div className="w-full flex flex-col md:flex-row md:justify-between mt-10 md:mt-16 mb-8 md:mb-14">
				{/* Imagem do Projeto */}
				<div className="flex flex-col bg-zinc-900 w-full md:w-1/2 rounded-xl mb-6 md:mb-0">
					<span className="flex justify-center items-center w-64 sm:w-72 bg-zinc-950 text-white text-base sm:text-lg font-medium rounded-full p-2 mt-4 md:mt-6 mx-auto md:ml-8 md:mr-auto">
						{t('section-projects.card-2.image-title')}
					</span>

					<img
						src={ImgProject2}
						alt={t('section-projects.card-2.alt-image')}
						className="w-full h-auto md:h-[500px] px-4 py-4 md:px-10 md:py-10 rounded-lg"
					/>
				</div>

				{/* Descrição do Projeto */}
				<div className="flex w-full md:w-1/2 justify-center gap-2 md:gap-4 px-2 md:px-5 py-3 md:py-7 mt-8">
					<div className="flex flex-col w-full md:max-w-11/12">
						<h3 className="text-white text-2xl md:text-3xl font-medium text-center md:text-left">
							{t('section-projects.card-2.title')}
						</h3>
						<p className="text-base md:text-lg text-gray-300 font-normal mt-2 md:mt-3 text-center md:text-left">
							{t('section-projects.card-2.description')}
						</p>

						<div className="flex flex-col mt-10 md:mt-5">
							<h3 className="text-base text-white font-semibold text-left">
								{t('section-projects.card-2.informations-project-title')}
							</h3>
							<Divisor />
							<div className="flex justify-between items-center">
								<p className="text-sm md:text-base text-white font-medium">
									{t('section-projects.card-2.informations-project-year')}
								</p>
								<p className="text-sm md:text-base text-zinc-400 font-medium">
									{t('section-projects.card-2.informations-project-date')}
								</p>
							</div>
							<Divisor />
							<div className="flex justify-between items-center">
								<p className="text-sm md:text-base text-white font-medium">
									{t('section-projects.card-2.informations-project-role')}
								</p>
								<p className="text-sm md:text-base text-zinc-400 font-medium">
									{t('section-projects.card-2.informations-project-developer')}
								</p>
							</div>
							<Divisor />
						</div>

						<div className="flex flex-col gap-1 mt-4 w-fit">
							<div className="flex items-center gap-1">
								<a
									href="https://real-state-front-blue.vercel.app/"
									className="text-primary text-base md:text-lg font-medium"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t('section-projects.card-2.link-live-project')}
								</a>
								<MdArrowOutward className="text-primary" size={20} />
							</div>

							<div className="h-0.5 bg-primary w-full mt-1"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
