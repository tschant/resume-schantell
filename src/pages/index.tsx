import Head from "next/head";
import { useState } from "react";

import TerminalHeader from "@/components/TerminalHeader";
import CommandPrompt from "@/components/CommandPrompt";
import CommandOutput from "@/components/CommandOutput";

export default function Home() {
	const [commands, setCommands] = useState(["help", "cat intro.txt", "ls", "cat education.txt", "cat work.txt", "cat contact.txt"]);
	const now = new Date();
	const options = {
		weekday: "short", year: "numeric", month: "short",
		hour: "numeric", minute: "numeric",
		timeZoneName: "short"
	} as Intl.DateTimeFormatOptions;

	const addCommand = (command: string) => {
		if (command === "clear") {
			setCommands([]);
		} else {
			setCommands([...commands, command]);
		}
	};

	return (
		<>
			<Head>
				<title>Resume - Tarryn S</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="min-h-screen overflow-y-hidden relative">
				<div className="mx-auto max-w-3xl rounded border border-gray-700 bg-gray-900 font-mono text-s leading-snug text-gray-300 shadow-xl md:my-3" >
					<TerminalHeader></TerminalHeader>

					<div className="px-2">
						<div className="mb-4">
							<span>Last login: </span>
							<span id="datetime">{new Intl.DateTimeFormat("en-US", options).format(now)}</span>
							<span> on ttys02</span>
						</div>

						<div>
							{commands.map((command, index) => (<CommandOutput key={index} command={command}></CommandOutput>))}
						</div>

						<CommandPrompt setCommands={(command: string) => addCommand(command)}></CommandPrompt>
					</div>
				</div>
			</main>
		</>
	)
}
