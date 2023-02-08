export default function TerminalHeader() {
	return <div className="title-bar flex-no-wrap flex rounded-t border-t border-b-black border-t-gray-300/30 px-2 py-1 shadow">
		<div className="whitespace-no-wrap flex-1 pr-4 cursor-default">
			<svg className="inline-block h-3 w-3 fill-current text-red-500" viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="50"></circle>
			</svg>
			<svg className="inline-block h-3 w-3 fill-current text-yellow-500" viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="50"></circle>
			</svg>
			<svg className="inline-block h-3 w-3 fill-current text-green-500" viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="50"></circle>
			</svg>
		</div>
		<span className="flex-none overflow-hidden">📁 Schantell – ~/dev/resume – -zsh</span>
		<div className="flex-1"></div>
	</div>
}
