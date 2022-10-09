export interface ProjectsInterface {
	title: string;
	tech: string[];
	description: string;
	thumbnail: string;
	github: string;
	app: string;
}

export const projectsData: ProjectsInterface[] = [
	{
		title: 'Personal Website',
		tech: ['React', 'TailwindCSS'],
		description:
			'The first iteration of my portfolio site to display my skills, resume, & top projects.',
		thumbnail: 'https://imgur.com/sXTtSHw.png',
		github: 'https://github.com/SkipPharaoh/V1',
		app: 'https://www.caniggiathompson.com'
	},
	{
		title: 'MovieThon',
		tech: ['Django', 'Bootstrap', 'PostgreSQL'],
		description:
			"A social media site built for those movies we've just seen, we're excited about & need to talk about to others with the same excitement",
		thumbnail: 'https://i.imgur.com/6I2AWMx.png',
		github: 'https://github.com/SkipPharaoh/Movie-Thon-V2',
		app: 'https://movie-thon.herokuapp.com/'
	},
	{
		title: 'Nba-Center',
		tech: ['React', 'React-Bootstrap', 'NBA APIs'],
		description:
			'A web app built on the info from the NBA to display the teams, players, and team logos, both past, and present!',
		thumbnail: 'https://imgur.com/fJ7I1xu.png',
		github: 'https://github.com/SkipPharaoh/NBA-Center',
		app: 'https://nba-center.herokuapp.com/'
	},
	{
		title: 'East-Coast-Boogie',
		tech: ['EJS', 'Express', 'NodeJS', 'MongoDB', 'CSS', 'Bootstrap'],
		description:
			'A travel guide focused on four cities with a list of activities for users to experience there!',
		thumbnail: 'https://imgur.com/879OUSN.png',
		github: 'https://github.com/SkipPharaoh/East-Coast-Boogie',
		app: 'https://east-coast-boogie.herokuapp.com/'
	},
	{
		title: 'Blackjack',
		tech: ['HTML', 'CSS', 'Vanilla JS'],
		description: 'A web app that lets you play to popular casino card game!',
		thumbnail:
			'https://github.com/SkipPharaoh/Project-Blackjack/blob/main/Screenshots/blackjack1.png?raw=true',
		github: 'https://github.com/SkipPharaoh/Project-Blackjack',
		app: 'https://skippharaoh.github.io/Project-Blackjack/'
	}
];
