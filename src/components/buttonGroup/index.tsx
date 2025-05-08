import { RiLinkedinFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { MdCloudDownload } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export const ButtonGroup = () => {
	const { t } = useTranslation();
	const redirectToLinkedin = () => {
		window.open(
			'https://www.linkedin.com/in/carlosegodoi/',
			'blank',
			'no-referer no-opener'
		);
	};

	const redirectToGithub = () => {
		window.open(
			'https://github.com/CarlosGodoi',
			'blank',
			'no-referer no-opener'
		);
	};
	return (
		<div className="md:max-w-[544px] md:justify-start w-full flex justify-center items-center gap-3 mt-6">
			<a
				href="/Curriculo Carlos Eduardo Godoi.docx"
				download
				className="flex justify-center items-center gap-2 bg-primary w-fit h-12 px-4 rounded-full text-secondary text-lg font-medium  cursor-pointer hover:opacity-80"
			>
				{t('main.button-CV')}
				<MdCloudDownload className="text-secondary" size={25} />
			</a>

			<button
				type="button"
				className="bg-zinc-900 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-zinc-700"
				onClick={redirectToLinkedin}
			>
				<RiLinkedinFill className="text-primary" />
			</button>

			<button
				type="button"
				className="bg-zinc-900 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-zinc-700"
				onClick={redirectToGithub}
			>
				<FaGithub className="text-primary" />
			</button>
		</div>
	);
};
