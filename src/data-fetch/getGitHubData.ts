"use server";

async function getGitHubData() {
  const response = await fetch("https://api.github.com/repos/SkipPharaoh/V2");
  const data = await response.json();

  return {
    star: data.stargazers_count as number,
    forks: data.forks_count as number,
  };
}

export default getGitHubData;
