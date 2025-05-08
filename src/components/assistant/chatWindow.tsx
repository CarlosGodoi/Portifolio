import { useState } from 'react';
import { sendMessageToBot } from '../../service/chatbot';

export const ChatWindow = ({ onClose }: { onClose: () => void }) => {
	const [messages, setMessages] = useState([
		{
			sender: 'bot',
			text: 'Olá! Sou Assistente Devizin AI, pergunte algo sobre o currículo para eu poder ajuda-lo! 😊',
		},
	]);
	const [input, setInput] = useState('');

	const handleSend = async () => {
		if (!input.trim()) return;

		const userMessage = { sender: 'user', text: input };
		setMessages((prev) => [...prev, userMessage]);
		setInput('');

		try {
			const botReply = await sendMessageToBot(input);
			setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
		} catch (error) {
			setMessages((prev) => [
				...prev,
				{ sender: 'bot', text: 'Erro ao responder sua pergunta.' },
			]);
			console.error('Erro ao enviar mensagem para o bot:', error);
		}
	};

	return (
		<div className="fixed bottom-28 right-12 md:bottom-40 md:right-16 w-70 max-h-[50vh] md:w-96 md:max-h-[70vh] bg-white border rounded-xl shadow-lg flex flex-col z-50">
			<div className="bg-primary text-zinc-800 font-medium p-3 rounded-t-xl flex justify-between">
				<span>Assistente</span>
				<button className="cursor-pointer" onClick={onClose}>
					✖
				</button>
			</div>
			<div className="flex-1 p-2 overflow-y-auto space-y-2 text-zinc-800 text-sm bg-gray-50">
				{messages.map((msg, i) => (
					<div
						key={i}
						className={`p-2 rounded-md ${
							msg.sender === 'user'
								? 'bg-cyan-200 self-end text-right'
								: 'bg-gray-300 self-start'
						}`}
					>
						{msg.text}
					</div>
				))}
			</div>
			<div className="p-2 border-t flex gap-2">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => e.key === 'Enter' && handleSend()}
					className="flex-1 h-10 text-zinc-800 text-sm border rounded px-2 py-1"
					placeholder="Digite sua pergunta..."
				/>
				<button
					onClick={handleSend}
					className="bg-primary text-zinc-800 px-3 py-1 rounded text-sm"
				>
					Enviar
				</button>
			</div>
		</div>
	);
};
