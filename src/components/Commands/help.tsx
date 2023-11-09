import { ReactNode } from 'react';

export interface Commands {
	[index: string]: ReactNode | string;
}

export const commands: Commands = {
	help: <span>display help text</span>,
	ls: <span>list files (sections)</span>,
	cat: (
		<span>
			display file (section) contents (eg: <code>`cat intro.md`</code> or{' '}
			<code>`cat port`</code>)
		</span>
	),
	todo: <span>display todo list</span>,
	clear: <span>clear screen</span>,
};

export default function CommandHelp() {
	return (
		<ul>
			{Object.keys(commands).map((cmd) => (
				<li key={cmd}>
					{cmd}: {commands[cmd]}
				</li>
			))}
		</ul>
	);
}
