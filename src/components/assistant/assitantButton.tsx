import Assistant2 from '../../assets/Devizin.jpg';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../../components/ui/tooltip';
import { useTranslation } from 'react-i18next';

export const AssistantButton = () => {
	const { t } = useTranslation();
	return (
		<div className="fixed md:bottom-20 right-6 z-50 flex flex-col items-center space-y-2 bottom-6">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<button className="w-20 h-20 rounded-full bg-white border p-2 shadow-lg cursor-pointer">
							<img
								src={Assistant2}
								alt="Assistente"
								className="object-contain w-full h-full rounded-full"
							/>
						</button>
					</TooltipTrigger>
					<TooltipContent>
						<p className="p-1 text-base text-zinc-800 font-medium">
							{t('chatbot.title')}
						</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
};
