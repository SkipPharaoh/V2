import { FaRegStar } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";

export async function getGitHubData() {
  const response = await fetch("https://api.github.com/repos/SkipPharaoh/V2");
  const data = await response.json();

  return {
    star: data.stargazers_count as number,
    forks: data.forks_count as number,
  };
}

const GitHubStats = async () => {
  const { star, forks } = await getGitHubData();

  return (
    <div className="flex space-x-4 dark:text-white text-black">
      <div className="flex dark:group-hover:text-blue-400 group-hover:text-red-500  space-x-1 items-center ">
        <FaRegStar className="h-4 w-4 group-hover:stroke-[2.2px] dark:group-hover:fill-blue-400  group-hover:fill-red-500 " />
        <p className="font-semibold text-sm group-hover:font-extrabold ">
          {star}
        </p>
      </div>
      <div className="flex  dark:group-hover:text-blue-400 group-hover:text-red-500 space-x-1 items-center ">
        <FiGitBranch className="h-4 w-4 group-hover:stroke-[2.2px]  dark:group-hover:stroke-blue-400 group-hover:stroke-red-500 " />
        <p className="font-semibold text-sm group-hover:font-extrabold ">
          {forks}
        </p>
      </div>
    </div>
  );
};

export default GitHubStats;
