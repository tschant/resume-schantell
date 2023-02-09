import { useEffect, useRef, useState } from "react";
import type {MutableRefObject} from "react";

export default function CommandPrompt({setCommands}: {setCommands: Function}) {
	const [inputText, setInputText] = useState('');
	const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
	const addCommandOutput = (e: any) => {
		e.preventDefault();
		setCommands(inputText);	
		setInputText('');
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
			<form onSubmit={addCommandOutput} className="absolute top-0 left-0 opacity-0 w-full h-screen" onClick={() => inputRef?.current?.focus()}>
				<input autoFocus className="w-full" value={inputText} onChange={e => setInputText(e.target.value)} ref={inputRef}/>
			</form>
		</div>
	</div>
}
