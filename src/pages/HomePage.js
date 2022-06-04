import { Link } from 'react-router-dom'
import beersImage from './../assets/beers.png'
import NewBeerImage from './../assets/new-beer.png'
import randomBeerImage from './../assets/random-beer.png'


const HomePage = () => {


    return (
        <div>
            <Link to='/beers'>
                <img src={beersImage} alt='beers' />
                <h1>All Beers</h1>
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint quo placeat omnis quos eaque optio illum, delectus rerum quisquam reiciendis iure voluptates blanditiis officia aliquam consequuntur cum assumenda? Hic.</p>
            <Link to='/random-beer'>
                <img src={randomBeerImage} alt='random-beer' />
                <h1>Random Beer</h1>
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint quo placeat omnis quos eaque optio illum, delectus rerum quisquam reiciendis iure voluptates blanditiis officia aliquam consequuntur cum assumenda? Hic.</p>
            <Link to='/new-beer'>
                <img src={NewBeerImage} alt='beers' />
                <h1>New Beer</h1>
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint quo placeat omnis quos eaque optio illum, delectus rerum quisquam reiciendis iure voluptates blanditiis officia aliquam consequuntur cum assumenda? Hic.</p>
        </div>
    )
}

export default HomePage