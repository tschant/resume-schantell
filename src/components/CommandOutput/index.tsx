import parseCommand from '@/service/parseCommand';
import { ReactNode, ReactElement, memo, useCallback, useMemo } from 'react';
type CommandOutputEl = string | (ReactElement & ReactNode);

import CommandHelp from '@/components/Commands/help';
import CommandLs from '../Commands/ls';
import CommandTodo from '../Commands/todo';
import CommandCat from '../Commands/cat';

const CommandOutput = memo(function CommandPrompt({
	command,
}: {
	command: string;
}) {
	const commandToOutput = useCallback(
		(command: string, pathOrFile?: string): CommandOutputEl => {
			const commands: { [index: string]: CommandOutputEl } = {
				help: <CommandHelp />,
				ls: <CommandLs path={pathOrFile} />,
				cat: <CommandCat file={pathOrFile || 'contact.md'} />,
				todo: <CommandTodo />,
				unknown: 'command not found: ',
			};

			if (!(command in commands)) {
				return commands.unknown + command;
			}

			return commands[command];
		},
		[],
	);
	const output = useMemo(() => {
		const parsedCommand = parseCommand(command);
		return commandToOutput(parsedCommand.command, parsedCommand.pathOrFile);
	}, [command, commandToOutput]);

	return (
		<div className="mb-4">
			<div>
				<span className="text-blue-200">~/dev/resume </span>
				<span className="text-gray-500">main</span>
			</div>
			<div>
				<span className="text-pink-300">❯ {command}</span>
			</div>
			<div className="mt-1">{output}</div>
		</div>
	);
});

export default CommandOutput;
