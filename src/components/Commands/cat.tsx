import {files} from '@/components/Files';
import { ReactNode } from 'react';
export default function CommandCat({file}: {file: string}) {
	const fileName = file.indexOf('.txt') >= 0 ? file : `${file}.txt`;
	const fileToShow: ReactNode = (fileName in files) ? (files[fileName]) : `cat: ${file}: No such file or directory`;
	return (<div>{fileToShow}</div>)
}
