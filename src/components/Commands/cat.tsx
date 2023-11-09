import { files } from '@/components/Files';
import { useMemo } from 'react';

export default function CommandCat({ file }: { file: string }) {
	const fileToShow = useMemo(() => {
		let fileName = file.indexOf('.md') >= 0 ? file : `${file}.md`;
		const possibleFiles = Object.keys(files).filter(
			(filename) => filename.indexOf(file) >= 0,
		);
		if (possibleFiles.length === 1) {
			fileName = possibleFiles[0];
		}

		return fileName in files
			? files[fileName]
			: `cat: ${file}: No such file or directory`;
	}, [file]);

	return <div>{fileToShow}</div>;
}
