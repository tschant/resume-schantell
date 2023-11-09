import { files } from '@/components/Files';
import { useMemo } from 'react';

export default function CommandLs({ path }: { path?: string }) {
	const availableFiles = useMemo(
		() => Object.keys(files).filter((file) => file.indexOf(path || '') >= 0),
		[path],
	);
	return (
		<span>
			{availableFiles.map((file, index) => (
				<span key={index} className="mr-4 inline-block">
					{file}
				</span>
			))}
		</span>
	);
}
