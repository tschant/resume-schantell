import type {ReactNode, ReactElement} from 'react';
type CommandOutputEl = string | ReactElement & ReactNode;

const COMMAND_TO_OUTPUT: {[index: string]: CommandOutputEl} = {
	help: (<ul>
		<li>help: display this</li>
		<li>ls: list files/sections</li>
		<li>todo: display todo list</li>
		<li>clear: clear screen</li>
	</ul>),
	ls: (<span className="text-red-300">List files here</span>),
	todo: (<ul>
		<li>actual commands + output</li>
		<li>better command parsing</li>
		<li>command with options (eg: ls -l)</li>
		<li>tab complete</li>
	</ul>),
	unknown: 'Command unknown',
};

export default function CommandPrompt({command}: {command: string}) {
	const output: CommandOutputEl = COMMAND_TO_OUTPUT[command] || COMMAND_TO_OUTPUT.unknown;

	return <div className="mb-4">
		<div>
			<span className="text-blue-200">~/dev/resume </span>
			<span className="text-gray-500">main</span>
		</div>
		<div>
			<span className="text-pink-300">❯ {command}</span>
		</div>
		<div className="mt-1">{output}</div>
	</div>
}
