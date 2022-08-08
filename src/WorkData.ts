export interface WorkInterface {
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    description: string[];
};

export const workData: Array<WorkInterface> = [
    {
        company: "OfferUp",
        position: "Software Development Engineer",
        startDate: "May 2022",
        description: [""],
    },
    {
        company: "General Assembly",
        position: "Software Engineer Fellow",
        startDate: "Dec 2021",
        endDate: "May 2022",
        description: ["12 week, full-time (60+ hrs/wk) immersive with study in software engineering and web development concepts, practical use-case, and industry best practices", "Courses: HTML5, CSS3, JavaScript, Git, Node.js/Express, Python3/Django, ReactJS, and more."],
    },
    {
        company: "BT's Plumbing & Heating",
        position: "Data Entry Clerk",
        startDate: "Feb 2021",
        endDate: "May 2022",
        description: ["Entered numerical data into databases", "Managed 23 data files across 3 systems."],
    }
];