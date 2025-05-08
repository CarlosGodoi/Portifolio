import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { MdOutlineMenu } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export const MoboMenu = () => {
	const { t } = useTranslation();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<MdOutlineMenu size={35} />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel className="text-lg text-gray-300 font-medium">
					Menu
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<a href="#about" className="text-primary text-lg">
						{t('header.nav-about')}
					</a>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<a href="#projects" className="text-primary text-lg">
						{t('header.nav-projects')}
					</a>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<a href="#technologies" className="text-primary text-lg">
						{t('header.nav-technologies')}
					</a>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<a href="#contact" className="text-primary text-lg">
						{t('header.nav-contact')}
					</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
