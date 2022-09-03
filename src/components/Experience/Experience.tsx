import { workData, WorkInterface } from '../../WorkData';

const Experience = (): JSX.Element => {
	const work: JSX.Element[] = workData.map(
		(work: WorkInterface, idx: number) => {
			const workDescription: JSX.Element[] = work.description.map(
				(description: string, idx: number) => {
					return (
						<ul key={idx}>
							<li>{description}</li>
						</ul>
					);
				}
			);

			return (
				<div key={idx}>
					<h4>
						{work.position} @ {work.company}
					</h4>
					<p>
						{work.startDate} - {work.endDate}
					</p>
					<p>{workDescription}</p>
				</div>
			);
		}
	);
	return (
		<div id="experience">
			<h1>Where I've Worked</h1>
			{work}
		</div>
	);
};

export default Experience;
