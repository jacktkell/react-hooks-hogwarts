function HogTiles({ hogs }) {

    let hogsArray = hogs.map(hog => {
        return (
            <div key={hog.name}>
                <h3>{hog.name}</h3>
                <img src={hog.image}/>
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