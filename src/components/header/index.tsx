import ImgBR from '../../assets/imgBr.jpg';
import imgEUA from '../../assets/ImgEUA.jpg';
import '../../utils/translate/i18n';
import { useTranslation } from 'react-i18next';
import { MoboMenu } from '../moboMenu';

export const Header = () => {
	const { t, i18n } = useTranslation();

	const handleChangeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
	};

	return (
		<header className="w-full flex justify-between items-center bg-zinc-950 px-4 sm:px-10 py-4">
			<div className="flex items-center">
				<p className="text-white text-xl font-semibold">{t('header.title')}</p>
			</div>
			<div className="flex items-center gap-4 sm:gap-10">
				<div className="flex items-center gap-2 sm:gap-3">
					<button
						type="button"
						className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden cursor-pointer"
						onClick={() => handleChangeLanguage('pt')}
					>
						<img src={ImgBR} alt="" className="w-full h-full object-cover" />
					</button>
					<button
						type="button"
						className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden cursor-pointer"
						onClick={() => handleChangeLanguage('en')}
					>
						<img src={imgEUA} alt="" className="w-full h-full object-cover" />
						<span className="hidden sm:inline">Eng</span>
					</button>
				</div>
				{/* Menu de navegação visível apenas em telas médias e maiores */}
				<nav className="hidden md:flex items-center gap-5">
					<a href="#about" className="text-white text-lg">
						{t('header.nav-about')}
					</a>
					<a href="#projects" className="text-white text-lg">
						{t('header.nav-projects')}
					</a>
					<a href="#technologies" className="text-white text-lg">
						{t('header.nav-technologies')}
					</a>
					<a href="#contact" className="text-white text-lg">
						{t('header.nav-contact')}
					</a>
				</nav>
				{/* Menu mobile visível apenas em telas menores */}
				<div className="md:hidden flex items-center">
					<MoboMenu />
				</div>
			</div>
		</header>
	);
};
