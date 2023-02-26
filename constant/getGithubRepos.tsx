import React from "react";
import axios from "axios";

const getGithubRepos = async (username: string) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    let repos = res.data;
    let result = repos
      ?.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 8);
    return result;
  } catch (err) {
  }
};

export default getGithubRepos;