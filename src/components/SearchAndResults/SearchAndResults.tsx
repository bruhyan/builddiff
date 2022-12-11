import { useState } from 'react'
import { Searchbar, SearchFormValues } from '~/components/Searchbar/Searchbar'
import { Champion } from '~/models/Champion';
import { ChampionContentContainer } from '../ChampionContent/ChampionContentContainer';

export const SearchAndResults = () => {

    const [champion, setChampion] = useState('');
    const [hasError, setError] = useState(false);
    const [championData, setChampionData] = useState<Champion | undefined>(undefined);

    const setAndFetchChampion = async (formValues: SearchFormValues) => {
        if (formValues) {
            setChampion(formValues.championName)

            setError(false);

            try {
                const championData: Champion = await fetchData(formValues.championName);
                setChampionData(championData);
            } catch (e) {
                setError(true);
            }
        }



    }

    const fetchData = async (championName: string) => {
        const data = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/${championName}.json`)
        const json = await data.json();
        console.log(json);
        return json.data[championName];
    }

    return (
        <>
            <Searchbar setChampion={setAndFetchChampion} />
            {hasError ? <div>Failed to retrieve champion data</div> : <div>
                <ChampionContentContainer champion={championData!} />
            </div>}

        </>
    )
}