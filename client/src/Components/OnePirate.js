import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {Link} from '@reach/router'

const OnePirate = props => {
    const [pirate, setPirate] = useState({
        name: "",
        img: "",
        chest: "",
        catchPhrase: "",
        crewPosition: "",
        pegLeg: "",
        eyePatch: "",
        hookHand: "",
    })

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pirates/${props.id}`)
            .then( res => {
                if(res.data.message ==="success"){
                    setPirate(res.data.results)
                }
            })
            .catch(err => console.log("error", err))
    }, [])

    const getPirate = () => {
        Axios.get(`http://localhost:8000/api/pirates/${pirate._id}`)
            .then( res => {
                if(res.data.message ==="success"){
                    setPirate(res.data.results)
                }
            })
            .catch(err => console.log("error", err))
    }

    const pegLegHandler = () => {
        if( pirate.pegLeg === true){
            setPirate({
                ...pirate,
                pegLeg: false
            })
        }
        else{
            setPirate({
                ...pirate,
                pegLeg: true
            })
            Axios.put(`http://localhost:8000/api/pirates/${pirate._id}`, pirate)
            .then(
                
            )
        }
    }
    const hookHandHandler = e => {
        if( pirate.hookHand === true){
            setPirate({
                ...pirate,
                hookHand: false
            })
        }
        else{
            setPirate({
                ...pirate,
                hookHand: true
            })
        }
        Axios.put(`http://localhost:8000/api/pirates/${pirate._id}`, pirate)
        .then(
            
        )
    }
    const eyePatchHandler = e => {
        if( pirate.eyePatch === true){
            setPirate({
                ...pirate,
                eyePatch: false
            })
        }
        else{
            setPirate({
                ...pirate,
                eyePatch: true
            })
        }
        Axios.put(`http://localhost:8000/api/pirates/${pirate._id}`, pirate)
        .then(
            
        )
    }

    return (
        <div>
            <h1>{pirate.name}</h1>
            <br/>
            <br/>
            <Link to="/"><button>Crew Board</button></Link>
            <div>
            {/* <img src={pirate.img} alt=""/> */}
            <h3>{pirate.catchPhrase}</h3>
            <br/>
            <br/>
            <div>
                <h4>About</h4>
                <p>{pirate.crewPosition}</p>
                <p># of treasure chest's: {pirate.chest}</p>
                {
                pirate.pegLeg?
                <p>Peg Leg: Yes  <button onClick={  pegLegHandler }>No</button></p>
                :
                <p>Peg Leg: No  <button onClick={  pegLegHandler }>Yes</button></p>
            }
                {
                pirate.eyePatch?
                <p>Eye Patch: Yes  <button onClick={  eyePatchHandler }>No</button></p>
                :
                <p>Eye Patch: No  <button onClick={  eyePatchHandler }>Yes</button></p>
                }
                {
                pirate.hookHand?
                <p>Hook Hand: Yes  <button onClick={  hookHandHandler }>No</button></p>
                :
                <p>Hook Hand: No  <button onClick={  hookHandHandler }>Yes</button></p>
                }
            </div>
            </div>

        </div>
    )
}

export default OnePirate
