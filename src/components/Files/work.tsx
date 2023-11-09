import { parse, intervalToDuration, formatDuration } from 'date-fns';

const experience = [
	{
		company: 'MessageBird',
		jobTitle: 'Staff Software Engineer',
		startDate: '2016/02',
		endDate: '',
		achivements: [
			'Enabled the team to implement a scalable web application to support increase in application load by establishing practices and processes for the team to follow.',
			'Organized and led a team to update display of data, prioritizing ease-of-us in a widget style interface allowing each component to be exportable.',
			'Increased customer value by developing new features through weekly meetings with team members.',
			'Integrate automatic code style checks into the existing CI/CD system for an application to help other developers learn the front-end ecosystem and paradigms, in order to improve overall code quality and developer experience.',
			'Redesigned an existing app increasing performance and reliability by reducing response time for requests from average of 1s to 100ms, with an uptime of 99.99%.',
			'Updated current infrastructure from on-demand instances to auto-scaling groups, allowing for easier deployments and better reliability.',
			'Reduced the time to deploy from 18 minutes to 8 minutes by updating the deployment pipeline to support parallel builds and concurrent deployment of applications.',
		],
	},
	{
		company: 'IBM',
		jobTitle: 'Guardium Support Engineer',
		startDate: '2015/04',
		endDate: '2016/02',
		achivements: [
			'Resolved critical issues in a timely manner prioritizing efficiency and responsiveness by interacting with the development team to discover the root cause of the issues and updating documentation to prevent similar issues from occurring.',
			'Resolved tickets that caused outages for enterprise companies within 4 hours, while maintaining a 98% resolution rate.',
			'Reviewed Guardium application logs and Linux system logs to find root causes of issues within the Guardium application and services.',
		],
	},
	{
		company: 'AllofE Solutions',
		jobTitle: 'Part Time Software Developer',
		startDate: '2014/05',
		endDate: '2015/04',
		achivements: [
			'Designed front end user interface utilizing javascript and PHP, interfacing with a MySQL database.',
			'Developed Android application by designing and implementing user interfaces to send and receive data from the database.',
			'Updated legacy application written in PHP by introducing metrics to gauge the customer’s needs and fix the issue in a timely manner, leading to a customer satisfaction rate of 99%.',
		],
	},
];

export function Work() {
	const getTimeSpan = (start: string, end: string) => {
		const startDate = parse(start, 'yyyy/MM', new Date());
		const endDate = end ? parse(end, 'yyyy/MM', new Date()) : new Date();
		const daysBetween = intervalToDuration({ start: startDate, end: endDate });
		return formatDuration(daysBetween, { format: ['years', 'months'] });
	};

	return (
		<div>
			{experience.map(
				({ company, jobTitle, startDate, endDate, achivements }) => (
					<div key={company}>
						<div className="text-yellow-200">
							{company} - {jobTitle}
						</div>
						<div>
							{startDate} - {endDate ? endDate : 'Present'}
							<span className="italic text-gray-500 ">
								{' '}
								({getTimeSpan(startDate, endDate)})
							</span>
						</div>
						<ul className="list-disc pl-4">
							{achivements.map((text) => (
								<li key={text}>{text}</li>
							))}
						</ul>
					</div>
				),
			)}
		</div>
	);
}
