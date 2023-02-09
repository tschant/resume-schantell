import { ReactNode } from "react";

type Files = {
	[index: string]: ReactNode | string
};

export const files: Files = {
	"intro.txt": (<div>
		This is a passion project I did for fun.<br/>
		I wanted to create a resume page and wanted it to be unique to me...<br/>
		This is the result
	</div>),
	"contact.txt": (<div>
		<div>Tarryn Schantell</div>
		<div>
			<span className="text-yellow-200">Location: </span>
			Olathe, KS
		</div>
		<div>
			<span className="text-yellow-200">Email: </span>
			<a className="underline" href="mailto:tarryn@schantell.us" target="_blank" rel="noreferrer nofollow">tarryn@schantell.us</a>
		</div>
		<div>
			<span className="text-yellow-200">Linkedin: </span>
			<a className="underline" href="https://www.linkedin.com/in/tschante/" target="_blank" rel="noreferrer nofollow">@tschante</a>
		</div>
		<div>
			<span className="text-yellow-200">git: </span>
			<a className="underline" href="https://github.com/tschant" target="_blank" rel="noreferrer nofollow">@tschant</a>
		</div>
	</div>),
	"work.txt": (<div>
		<div className="text-yellow-200">SparkPost (a MessageBird Company) - Staff Software Engineer</div>
		<div>2016/02 - Present <span className="text-gray-500 italic ">(7 years)</span></div>
		<div className="pl-4">
			<div>● Helped establish practices that the team used to create a scalable web application.</div>
			<div>● Organized a team to optimize the display of data in a more digestible manner so clients can accomplish tasks more efficiently.</div>
			<div>● Lead a team to create and deliver a new product, organizing weekly meetings to ensure a timely delivery to customers.</div>
			<div>● Made an application to help other developers learn the front-end ecosystem and paradigms that have been established.</div>
			<div>● Redesigned an existing app increasing performance and reliability by reducing response time for requests from average of 1s to 100ms, with an uptime of 99.99%</div>
		</div>
		<div className="text-yellow-200">IBM - Guardium Support Engineer</div>
		<div>2015/04 - 2016/02 <span className="text-gray-500 italic ">(10 months)</span></div>
		<div className="pl-4">
			<div>● Resolved critical issues in a timely manner prioritizing efficiency and responsiveness.</div>
			<div>● Aided in resolving tickets that caused outages for enterprise companies in a minimal amount of time.</div>
			<div>● Utilized knowledge of Linux, MySQL, and Java to aid developers in fixing flaws within the Guardium application and services.</div>
		</div>
		<div className="text-yellow-200">AllofE - Part Time Software Developer</div>
		<div>2014/05 - 2015/04 <span className="text-gray-500 italic ">(11 months)</span></div>
		<div className="pl-4">
			<div>● Helped maintain multiple enterprise scale websites.</div>
			<div>● Designed front-end user interface utilizing JavaScript and PHP.</div>
			<div>● Accessed data from a MySQL server using PHP and MySQL.</div>
			<div>● Helped write an Android application by designing and implementing user interfaces to send and receive data from the database.</div>
		</div>
	</div>),
	"education.txt": (<div>
		<div>B. S., Computer Engineering</div>
		<div>School of Engineering, The University of Kansas</div>
		<div>2011-2014</div>
	</div>),
	"skills.txt": (<div>TODO</div>),
};
