import { Champion } from "~/models/Champion"

export const ChampionContentContainer = ({ champion }: ChampionContentContainerProps) => {
    return (
        <div>
            {JSON.stringify(champion)}
        </div>
    )
}

interface ChampionContentContainerProps {
    champion: Champion
}