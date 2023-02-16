import React from "react"
import { IPlayerCard, PlayerCard } from "../components/playerCard"

export const Player: React.FC = () => {
    const data: IPlayerCard = {
        id: '123',
        name: 'Tèo',
        club: 'MU',
        goals: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpngv769D7wzoD7JTvu5o8HbSGDIbjtVefA&usqp=CAU',
        isCaptain: false,
        nationId: '1',
        position: 'CDM'
    }
    return (
        <>
            <div className="grid grid-cols-4 gap-6 mx-20">
                <div>
                    <PlayerCard
                        id={""}
                        name={data.name}
                        img={data.img}
                        position={data.position}
                        club={data.club}
                        goals={0}
                        isCaptain={false}
                        nationId={data.nationId} />
                </div>
                <div>
                    <PlayerCard
                        id={""}
                        name={data.name}
                        img={data.img}
                        position={data.position}
                        club={data.club}
                        goals={0}
                        isCaptain={false}
                        nationId={data.nationId} />
                </div>
                  <div>
                    <PlayerCard
                        id={""}
                        name={data.name}
                        img={data.img}
                        position={data.position}
                        club={data.club}
                        goals={0}
                        isCaptain={false}
                        nationId={data.nationId} />
                </div>
                <div>
                    <PlayerCard
                        id={""}
                        name={data.name}
                        img={data.img}
                        position={data.position}
                        club={data.club}
                        goals={0}
                        isCaptain={false}
                        nationId={data.nationId} />
                </div>
                <div>
                    <PlayerCard
                        id={""}
                        name={data.name}
                        img={data.img}
                        position={data.position}
                        club={data.club}
                        goals={0}
                        isCaptain={false}
                        nationId={data.nationId} />
                </div>  
            </div>
        </>
    )
}