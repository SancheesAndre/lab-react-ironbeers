const BeerInfo = (props) => {
    const { beer } = props

    return (
        <div>
            <img className='Beer-Image' src={beer.image_url} alt="beer" />
            <div className='Text-Beer'>
                <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.attenuation_level}</h3>
                </div>
                <div>
                    <h3>{beer.tagline}</h3>
                    <p>{beer.first_brewed}</p>
                </div>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
        </div>
    )
}

export default BeerInfo