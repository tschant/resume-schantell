import { files } from '@/components/Files';
import { ReactNode } from 'react';
export default function CommandCat({ file }: { file: string }) {
	const fileName = file.indexOf('.md') >= 0 ? file : `${file}.md`;
	const fileToShow: ReactNode =
		fileName in files
			? files[fileName]
			: `cat: ${file}: No such file or directory`;
	return <div>{fileToShow}</div>;
}
