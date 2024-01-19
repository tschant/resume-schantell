import { useState } from 'react';
import { record } from 'aws-amplify/analytics';

export default function CommandPrompt({
	setCommands,
}: {
	setCommands: Function;
}) {
	const [inputText, setInputText] = useState('');
	const addCommandOutput = (e: any) => {
		e.preventDefault();
		record({
			name: 'Command',
			attributes: {
				name: inputText,
			},
		});
		setCommands(inputText);
		setInputText('');
	};

	return (
		<div className="relative">
			<div>
				<span className="text-blue-200">~/dev/resume </span>
				<span className="text-gray-500">main</span>
			</div>
			<div>
				<span className="text-pink-300">❯ </span>
				<form
					onSubmit={addCommandOutput}
					className="absolute left-0 top-0 ml-4 h-full w-1/2"
				>
					<div className="relative h-full">
						<input
							placeholder="eg: cat skills.md"
							className="absolute bottom-0 w-full bg-gray-900 text-white placeholder:text-gray-600 focus:outline-none"
							value={inputText}
							onChange={(e) => setInputText(e.target.value)}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
