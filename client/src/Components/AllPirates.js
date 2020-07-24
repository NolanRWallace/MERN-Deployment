import React, {useState, useEffect} from 'react'
import { Link } from '@reach/router'
import axios from 'axios'

const AllPirates = () => {
    const  [allPirates, setAllPirates] = useState([])

    useEffect(() => {
        getAllPirates()
    }, [])

    const getAllPirates = () => {
        axios.get("http://localhost:8000/api/pirates")
            .then( res => {
                let sortpirates = res.data.results
                sortpirates.sort((a,b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : 1)
                setAllPirates(sortpirates)
            })
            .catch(err => console.log("failed", err))
    }

    const deleteHandler= id => {
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then(
                getAllPirates()
            )
    }

    return (
        <div>
            <h1>Pirate Crew</h1>
            <Link to="/new"> <button>Add Pirate</button> </Link>
            <br/>
            <br/>
            <br/>
            {
                allPirates.map((pirate, i) => 
                <div key={i}>
                        {/* <img src={pirate.img} /> */}
                        <h2>{pirate.name}</h2>
                        <Link to={`/pirate/${pirate._id}`}> <button>View Pirate</button> </Link>
                        <button onClick={ e => deleteHandler(pirate._id) }>Walk the Plank!</button>
                </div>
                    )
                }
        </div>
    )
}

export default AllPirates
