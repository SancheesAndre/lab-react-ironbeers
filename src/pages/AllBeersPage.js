import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './../components/Header'
import { Link } from 'react-router-dom'

const AllBeersPage = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                setBeers(response.data)
            })
            .catch(error => console.log(error))
    }, 
    [])


    return (
        <div>
            <Header />
            {beers.map(beer => {
                return (
                    <Link to={beer._id} key={beer._id} className='Beer-Box'>
                        <div className='Image-Box'>
                            <img className='Beer-Image' src={beer.image_url} alt="beer" />
                        </div>
                        <div className='Text-Box'>
                            <h2>{beer.name}</h2>
                            <h3>{beer.tagline}</h3>
                            <p><b>Created by: </b>{beer.contributed_by}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default AllBeersPage