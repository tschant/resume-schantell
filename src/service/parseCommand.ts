type Command = {
	command: string,
	pathOrFile?: string,
};

export default function parseCommand(command: string): Command {
	const arrCommand = command.split(' ');
	if (arrCommand.length < 1) {
		return {
			command: 'unknown'
		};
	}

	if (arrCommand.length === 1) {
		return {
			command: arrCommand[0]
		};
	}

	return {
		command: arrCommand[0],
		pathOrFile: arrCommand[arrCommand.length - 1]
	}
};
