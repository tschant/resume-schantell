import Link from 'next/link';

const portfolio = [
	{
		link: 'https://resume.schantell.us/',
		name: 'Resume',
		description:
			'This page! Fun side project to document work and learn new things.',
		source: 'https://github.com/tschant/resume-schantell',
		techStack: 'Next.js, React, TailwindCSS, AWS Amplify',
	},
	{
		link: 'https://pokedex.schantell.us/',
		name: 'Pokédex',
		description: 'Side project to learn GraphQL, Next.js, React.',
		source: 'https://github.com/tschant/pokedex',
		techStack: 'Next.js, GraphQL/Apollo, React, TailwindCSS, Docker',
	},
	{
		link: 'https://wedding.schantell.us/',
		name: 'Wedding',
		description:
			'Quick & simple wedding website (updated removing some pages).',
		source: '',
		techStack: 'Remix, React, TailwindCSS, Docker',
	},
	{
		link: 'https://github.com/tschant/weekly-meal-plan',
		name: 'Weekly Meal Plan',
		description:
			'Hacked together tool for wife and I to plan meals from a Google Sheet of recipes',
		source: 'https://github.com/tschant/weekly-meal-plan',
		techStack: 'node.js, chalk + meow, Google Spreadsheet',
	},
	{
		link: 'https://resume.schantell.us/',
		name: 'D&D Dice Roller',
		description:
			'I love D&D, but always forget my dice (not my computer), this was my solution',
		source: 'https://github.com/tschant/node-die-roller',
		techStack: 'node.js, chalk + meow, Google Spreadsheet',
	},
];

export function Portfolio() {
	return (
		<div>
			<ul className="list-disc pl-4">
				{portfolio.map((item) => (
					<li key={item.name}>
						<Link className="underline" href={item.link} target="_blank">
							{item.name}
						</Link>
						: {item.description}
						<div className="pl-4">
							{item.source ? (
								<Link className="underline" href={item.source} target="_blank">
									Source Code
								</Link>
							) : (
								<span>Tech Stack</span>
							)}
							: {item.techStack}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
