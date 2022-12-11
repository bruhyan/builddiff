import { useEffect } from 'react'
import { Searchbar } from '~/components/Searchbar/Searchbar'

export const SearchAndResults = () => {

    // riot api RGAPI-e5e6dc00-efcf-4776-9f7b-e8f27790d8ff
    // expire dec 12

    const fetchData = async () => {
        const data = await fetch('http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/Vayne.json')
        const json = await data.json();
        console.log(json);
        return json;
    }

    useEffect(() => {

        console.log('hm')
        fetchData()
    }, [])

    return (
        <>
            <Searchbar />
        </>
    )
}