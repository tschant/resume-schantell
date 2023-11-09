import { ReactNode } from 'react';

type Files = {
	[index: string]: ReactNode | string;
};

export const files: Files = {
	'intro.md': (
		<div>
			This is a passion project I did for fun.
			<br />
			I wanted to create a resume page and wanted it to be unique to me...
			<br />
			This is the result
		</div>
	),
	'summary.md': (
		<div>
			Experienced Staff Software Engineer with 9 years of experience in software
			development and engineering. Proven track record in leading projects
			related to architecture, design, and front-end development.
		</div>
	),
	'contact.md': (
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
				>
					@tschant
				</a>
			</div>
		</div>
	),
	'work.md': (
		<div>
			<div className="text-yellow-200">
				SparkPost (a MessageBird Company) - Staff Software Engineer
			</div>
			<div>
				2016/02 - Present{' '}
				<span className="italic text-gray-500 ">(7 years)</span>
			</div>
			<div className="pl-4">
				<div>
					● Enabled the team to implement a scalable web application to support
					increase in application load by establishing practices and processes
					for the team to follow.
				</div>
				<div>
					● Organized and led a team to update display of data, prioritizing
					ease-of-us in a widget style interface allowing each component to be
					exportable.
				</div>
				<div>
					● Increased customer value by developing new features through weekly
					meetings with team members.
				</div>
				<div>
					● Integrate automatic code style checks into the existing CI/CD system
					for an application to help other developers learn the front-end
					ecosystem and paradigms, in order to improve overall code quality and
					developer experience.
				</div>
				<div>
					● Redesigned an existing app increasing performance and reliability by
					reducing response time for requests from average of 1s to 100ms, with
					an uptime of 99.99%.
				</div>
				<div>
					● Updated current infrastructure from on-demand instances to
					auto-scaling groups, allowing for easier deployments and better
					reliability.
				</div>
				<div>
					● Reduced the time to deploy from 18 minutes to 8 minutes by updating
					the deployment pipeline to support parallel builds and concurrent
					deployment of applications.
				</div>
			</div>
			<div className="text-yellow-200">IBM - Guardium Support Engineer</div>
			<div>
				2015/04 - 2016/02{' '}
				<span className="italic text-gray-500 ">(10 months)</span>
			</div>
			<div className="pl-4">
				<div>
					● Resolved critical issues in a timely manner prioritizing efficiency
					and responsiveness by interacting with the development team to
					discover the root cause of the issues and updating documentation to
					prevent similar issues from occurring.
				</div>
				<div>
					● Resolved tickets that caused outages for enterprise companies within
					4 hours, while maintaining a 98% resolution rate.
				</div>
				<div>
					● Reviewed Guardium application logs and Linux system logs to find
					root causes of issues within the Guardium application and services.
				</div>
			</div>
			<div className="text-yellow-200">
				AllofE - Part Time Software Developer
			</div>
			<div>
				2014/05 - 2015/04{' '}
				<span className="italic text-gray-500 ">(11 months)</span>
			</div>
			<div className="pl-4">
				<div>
					● Designed front end user interface utilizing javascript and PHP,
					interfacing with a MySQL database.
				</div>
				<div>
					● Designed front-end user interface utilizing JavaScript and PHP.
				</div>
				<div>
					● Developed Android application by designing and implementing user
					interfaces to send and receive data from the database.
				</div>
				<div>
					● Updated legacy application written in PHP by introducing metrics to
					gauge the customer’s needs and fix the issue in a timely manner,
					leading to a customer satisfaction rate of 99%.
				</div>
			</div>
		</div>
	),
	'education.md': (
		<div>
			<div>B. S., Computer Engineering</div>
			<div>School of Engineering, The University of Kansas</div>
			<div>2011-2014</div>
		</div>
	),
	'skills.md': (
		<div>
			<div className="pl-4">
				<div>
					JavaScript, TypeScript, Angularjs, Reactjs, NodeJS, npm, Next.js,
					GraphQL Java, Php, Golang, Aws, Docker, Mysql, HTML, CSS, git, Unix,
					Terraform
				</div>
			</div>
		</div>
	),
	'portfolio.md': (
		<div>
			<div className="pl-4">
				<div>
					JavaScript, TypeScript, Angularjs, Reactjs, NodeJS, npm, Next.js,
					GraphQL Java, Php, Golang, Aws, Docker, Mysql, HTML, CSS, git, Unix,
					Terraform
				</div>
			</div>
		</div>
	),
};
