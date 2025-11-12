import { useEffect, useState } from "react";
import { loadingProps } from "./types/props/isLoading";
import { ContributionInterface } from "./types/data/contribution";

const username = 'felienz';

export default function GithubData({setIsLoading}: Pick<loadingProps, 'setIsLoading'>){
  const [contribution, setContribution] = useState<ContributionInterface[]>([])
  useEffect(()=>{
    async function getData(u:string) {
      setIsLoading(true)
      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${u}`);
        const data = (await response.json());
        setIsLoading(false)
        setContribution(data.contributions)
      } catch (error) {
        console.error('Gagal Fetch Contribution', error)
      }finally{
        setIsLoading(false)
      }
    }
    getData(username)
  }, [])
  return contribution
}
