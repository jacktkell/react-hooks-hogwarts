import {useState} from 'react'

function HogTiles({ hogs }) {
    const [isClicked, setClicked] = useState(false)
    // const clicked = () => setClicked(!isClicked)

    function handleClick (e){
        setClicked(!isClicked)
        let className = e.target.className 
        console.log(e.target)
    }

    // return(
    //     <div onClick = {clicked} >
    //         key={hog.name}>
    //             <h3>{hog.name}</h3>
    //             <img src={hog.image}/>

    //     </div>
        
    // )


    let hogsArray = hogs.map(hog => {
        return (
            <div onClick = {handleClick} 
            key={hog.name}>
                <h3>{hog.name}</h3>
                <img src={hog.image}/>
                <h4>{hog.weight}</h4>
            </div>
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