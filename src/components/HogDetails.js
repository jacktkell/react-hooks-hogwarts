function HogDetails({ specialty, weight, greased, highestMedal }) {

    console.log(greased)

    return (
        <>
            <p>Specialty: {specialty}</p> 
            <p>Weight: {weight}</p>
            <p>Greased: {greased}</p>
            <p>Highest Medal: {highestMedal}</p>
        </>
    )
}

export default HogDetails