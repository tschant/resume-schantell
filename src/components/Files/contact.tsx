import { recordLinkClick } from '@/service/recordLinkClick';
export function Contact() {
	return (
		<div>
			<div>Tarryn Schantell</div>
			<div>
				<span className="text-yellow-200">Location: </span>
				Olathe, KS
			</div>
			<div>
				<span className="text-yellow-200">Email: </span>
				<a
					className="underline"
					href="mailto:tarryn@schantell.us"
					target="_blank"
					rel="noreferrer nofollow"
					onClick={() => recordLinkClick('email')}
				>
					tarryn@schantell.us
				</a>
			</div>
			<div>
				<span className="text-yellow-200">Linkedin: </span>
				<a
					className="underline"
					href="https://www.linkedin.com/in/tschante/"
					target="_blank"
					rel="noreferrer nofollow"
					onClick={() => recordLinkClick('linkedin')}
				>
					@tschante
				</a>
			</div>
			<div>
				<span className="text-yellow-200">git: </span>
				<a
					className="underline"
					href="https://github.com/tschant"
					target="_blank"
					rel="noreferrer nofollow"
					onClick={() => recordLinkClick('github')}
				>
					@tschant
				</a>
			</div>
		</div>
	);
}
