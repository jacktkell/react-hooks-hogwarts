import { useState } from 'react';
import HogDetails from "./HogDetails"

function Hog({ name, image, specialty, weight, greased, highestMedal }) {

    const [isClicked, setClicked] = useState(false)
    // const clicked = () => setClicked(!isClicked)

    function handleClick (e){
        setClicked(!isClicked)
    }

    // console.log(greased)

    return (
        <div onClick={handleClick} key={name}>
                <h3>{name}</h3>
                <img src={image}/>
                {isClicked ? 
                <div>
                    <HogDetails specialty={specialty} weight={weight} greased={greased} highestMedal={highestMedal}/>
                </div>
                : null}
                <br/>
        </div>
    )
}

export default Hog