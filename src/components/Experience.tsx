import React from 'react'
import { workData, WorkInterface } from '../WorkData'

// Create a work.ts file like data.ts file
// Map through the work array and log each item here
// Easier to update the data in work.ts file like data.ts file

const Experience: React.FC<{}> = () => {
    const work: JSX.Element[] = workData.map ((work: WorkInterface, idx: number) => {
        const workDescription: JSX.Element[] = work.description.map ((description: string, idx: number) => {
            return (
                <ul key={idx}>
                    <li>{description}</li>
                </ul>
            );
        });

        return (
            <div key={idx}>
                <h4>{work.position} @ {work.company}</h4>
                <p>{work.startDate} - {work.endDate}</p>
                <p>{workDescription}</p>
            </div>
        );
    }
    )
  return (
    <div>
        <h1>Where I've Worked</h1>
        {work}
    </div>
  )
}

export default Experience