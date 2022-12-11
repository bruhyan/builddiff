import { useState } from 'react'
import { Searchbar, SearchFormValues } from '~/components/Searchbar/Searchbar'

export const SearchAndResults = () => {

    const [champion, setChampion] = useState('');
    const [championData, setChampionData] = useState();

    const setAndFetchChampion = async (formValues: SearchFormValues) => {
        if (formValues) {
            setChampion(formValues.championName)
        }

        const championData = await fetchData(formValues.championName);
        setChampionData(championData);
    }

    const fetchData = async (championName: string) => {
        const data = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/${championName}.json`)
        const json = await data.json();
        console.log(json);
        return json;
    }

    return (
        <>
            <Searchbar setChampion={setAndFetchChampion} />
            <div>{JSON.stringify(champion)}</div>
            <div>{JSON.stringify(championData)}</div>
        </>
    )
}