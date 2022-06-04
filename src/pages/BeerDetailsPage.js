import Header from './../components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BeerInfo from '../components/BeerInfo'

const BeerDetailsPage = () => {
    const [beer, setBeer] = useState([])
    const { beerId } = useParams()

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                setBeer(response.data)
            })
            .catch(error => console.log(error))
    }, 
    [beerId])

    return (
        <div>
            <Header />
            <BeerInfo  beer={beer} />
        </div>
    )
}

export default BeerDetailsPage