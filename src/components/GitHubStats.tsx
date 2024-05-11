import getGitHubData from "@/data-fetch/getGitHubData";
import { FaRegStar } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";

interface GitHubInfo {
  icon: typeof FaRegStar | typeof FiGitBranch;
  label: number;
}

const GitHubStats = async () => {
  const { star, forks } = await getGitHubData();

  const gitHubInfo: GitHubInfo[] = [
    { icon: FaRegStar, label: star },
    { icon: FiGitBranch, label: forks },
  ];

  return (
    <div className="flex space-x-4 dark:text-white text-black">
      {gitHubInfo.map((info, id) => {
        return (
          <div
            key={id}
            className="flex dark:group-hover:text-blue-400 group-hover:text-red-500 space-x-1 items-center"
          >
            {
              <info.icon className="h-4 w-4 group-hover:stroke-[2.2px] dark:group-hover:fill-blue-400 group-hover:fill-red-500" />
            }
            <p className="font-semibold text-sm group-hover:font-extrabold">
              {info.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default GitHubStats;
