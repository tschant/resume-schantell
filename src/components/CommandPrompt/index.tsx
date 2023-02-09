import { useEffect, useRef, useState } from "react";
import type {MutableRefObject} from "react";

export default function CommandPrompt({setCommands}: {setCommands: Function}) {
	const [inputText, setInputText] = useState("");
	const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
	const addCommandOutput = (e: any) => {
		e.preventDefault();
		setCommands(inputText);	
		setInputText("");
	};

	useEffect(() => {
		inputRef?.current?.focus();
	}, []);

	return <div>
		<div>
			<span className="text-blue-200">~/dev/resume </span>
			<span className="text-gray-500">main</span>
		</div>
		<div>
			<span className="text-pink-300">❯ </span>
			<span>{inputText}<span className="animate-blink">█</span></span>
			<form onSubmit={addCommandOutput} className="absolute top-0 left-0 opacity-0 w-full h-full" onClick={() => inputRef?.current?.focus()}>
				<div className="relative h-full">
					<input autoFocus className="w-full absolute bottom-0" value={inputText} onChange={e => setInputText(e.target.value)} ref={inputRef}/>
				</div>
			</form>
		</div>
	</div>
}
