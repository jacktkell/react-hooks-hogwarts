import {useState} from 'react'
import Hog from "./Hog"

function HogTiles({ hogs }) {

    let hogsArray = hogs.map(hog => {
        return (
            <Hog key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty}
            weight={hog.weight} greased={hog.greased} highestMedal={hog["highest medal achieved"]} />
        )
    })

    return (
        <div>
            {hogsArray}
        </div>
    )
}

export default HogTiles


// When the user clicks on the hog tile, display the other details about the hog (its specialty, weight, greased, and highest medal achieved)