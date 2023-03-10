import {files} from "@/components/Files";
export default function CommandLs({path}: {path?: string}) {
	const availableFiles = Object.keys(files);
	return (<span className="">
		{availableFiles.map((file, index) => (<span key={index} className="mr-4">{file}</span>))}
	</span>);
}
