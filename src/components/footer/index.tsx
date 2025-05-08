import { useTranslation } from 'react-i18next';

export const Footer = () => {
	const { t } = useTranslation();
	return (
		<div className="w-full flex justify-center items-center h-16 px-10 py-4 bg-zinc-950">
			<p className="text-white text-base">{t('footer.text')}</p>
		</div>
	);
};
