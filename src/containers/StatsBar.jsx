import React from 'react';
import {Bar, Radar} from "react-chartjs-2";


const StatsBar = ({pokemon: { stats  }}) => {

    const pokemonStat = stats.map( statsObj => statsObj.base_stat)
    const pokemonStatName = stats.map( statsObj => statsObj.stat.name)
    console.log("pokemon stat",pokemonStat)
    console.log("pokemon stat name",pokemonStatName)
    // console.log("this is pokemon stats: ",stats)
    console.log("stat 1",pokemonStat[0])
    return (
        <>
            
            <div>
                <Radar
                    data={{
                        
                        labels: [pokemonStatName[0],pokemonStatName[1],pokemonStatName[2],pokemonStatName[3],pokemonStatName[4],pokemonStatName[5]],
                        datasets: [{
                            label: "Stat Value",
                            data: [pokemonStat[0],pokemonStat[1],pokemonStat[2],pokemonStat[3],pokemonStat[4],pokemonStat[5]],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                        }],
                        
                        
                }}
                    scale={{
                        ticks: {
                            beginAtZero: true,
                            max: 5,
                            min: 0,
                            stepSize: 1
                        }
                    }}
                    height={400}
                    width={400}
                />
            </div>
            <div>
            
            </div>
        </>
    );
};



export default StatsBar;