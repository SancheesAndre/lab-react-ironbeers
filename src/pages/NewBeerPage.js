import axios from 'axios'
import { useState } from 'react'
import Header from './../components/Header'

const NewBeerPage = () => {
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firsntBrewed, setFirstBrewed] = useState('00/00/00')
    const [brewerTips, setBrewerTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState(0)



    const handleSubmit = e => {
        e.preventDefault()
        const body = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firsntBrewed,
            brewers_tips: brewerTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
            .then(alert('The new Beer has been added'))
            .catch(error => console.log(error))

    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Beer Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Tagline: </label>
                    <input
                        type="text"
                        value={tagline}
                        onChange={e => setTagline(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description: </label>
                    <input
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>First Brewed Data: </label>
                    <input
                        type="text"
                        value={firsntBrewed}
                        onChange={e => setFirstBrewed(e.target.value)}
                    />
                </div>
                <div>
                    <label>Brewer Tips: </label>
                    <input
                        type="text"
                        value={brewerTips}
                        onChange={e => setBrewerTips(e.target.value)}
                    />
                </div>
                <div>
                    <label>Attenuation Level: </label>
                    <input
                        type="number"
                        value={attenuationLevel}
                        onChange={e => setAttenuationLevel(e.target.value)}
                    />
                </div>
                <div>
                    <label>Created By: </label>
                    <input
                        type="text"
                        value={contributedBy}
                        onChange={e => setContributedBy(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewBeerPage