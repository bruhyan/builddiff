import { useEffect } from 'react'
import { Searchbar } from '~/components/Searchbar/Searchbar'

export const SearchAndResults = () => {

    const fetchData = async () => {
        const data = await fetch('http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/Vayne.json')
        const json = await data.json();
        console.log(json);
        return json;
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Searchbar />
        </>
    )
}