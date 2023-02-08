export default function CommandPrompt({inputText, children}) {
	return <div>
		<div>
			<span className="text-blue-200">~/dev/resume </span>
			<span className="text-gray-500">main</span>
		</div>
		<div className="relative">
			<span className="text-pink-300">❯ {children}</span>
			<span>{inputText}<span className="animate-blink">█</span></span>
		</div>
	</div>
}
