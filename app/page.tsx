import GithubPage from "@/components/GithubPage";
import GithubSection from "@/components/GithubSection";
import Heroes from "@/components/Heroes";
import TechStackSection from "@/components/TechStackSection";
import Timeline from "@/components/Timeline";
import { GitRepo } from "@/components/types/gitRepo";
import getGithubRepos from "@/constant/getGithubRepos";
interface IGithubPage {
  repos: GitRepo[];
}

const Home = async () =>  {
  const repos = await getGithubRepos(process.env.GITHUB_USERNAME || "");

  return (
   <>
   <Heroes />
   <Timeline />
   <TechStackSection />
   <GithubSection repos={repos} />
   </>
  )
}

export async function getStaticProps() {
  const repos = await getGithubRepos(process.env.GITHUB_USERNAME || "");

  return {
    props: {
      repos: repos || null,
    },
  };
}

export default Home;
