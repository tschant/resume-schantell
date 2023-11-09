export function Portfolio() {
	return (
		<div>
			<ul className="list-disc pl-4">
				<li>
					<a
						className="underline"
						href="//pokedex.schantell.us/"
						target="_blank"
						rel="noreferrer nofollow"
					>
						Pokédex
					</a>
					: Side project to learn GraphQL, Next.js, React.
					<div className="pl-4">
						<a
							className="underline"
							href="//github.com/tschant/pokedex"
							target="_blank"
							rel="noreferrer nofollow"
						>
							Source
						</a>
						: Next.js, GraphQL/Apollo, React, TailwindCSS, Docker
					</div>
				</li>
				<li>
					<a
						className="underline"
						href="//wedding.schantell.us/"
						target="_blank"
						rel="noreferrer nofollow"
					>
						Wedding
					</a>
					: Quick & simple wedding website (updated removing some pages).
					<div className="pl-4">Tech: Remix, React, TailwindCSS, Docker</div>
				</li>
				<li>
					<a
						className="underline"
						href="//resume.schantell.us/"
						target="_blank"
						rel="noreferrer nofollow"
					>
						Resume
					</a>
					: This page! Fun side project to document work and learn new things.
					<div className="pl-4">
						<a
							className="underline"
							href="//github.com/tschant/resume-schantell"
							target="_blank"
							rel="noreferrer nofollow"
						>
							Source
						</a>
						: Next.js, React, TailwindCSS, AWS Amplify
					</div>
				</li>
				<li>
					<a
						className="underline"
						href="//github.com/tschant/weekly-meal-plan"
						target="_blank"
						rel="noreferrer nofollow"
					>
						Weekly Meal Plan
					</a>
					: Hacked together tool for wife and I to plan meals from a Google
					Sheet of recipes
					<div className="pl-4">
						Tech: node.js, chalk + meow, Google Spreadsheet
					</div>
				</li>
				<li>
					<a
						className="underline"
						href="//github.com/tschant/node-die-roller"
						target="_blank"
						rel="noreferrer nofollow"
					>
						D&D Dice Roller
					</a>
					: I love D&D, but always forget my dice (not my computer), this was
					the result
					<div className="pl-4">
						Tech: node.js, chalk + meow, Google Spreadsheet
					</div>
				</li>
			</ul>
		</div>
	);
}
