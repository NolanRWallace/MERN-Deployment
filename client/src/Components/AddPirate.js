import React, {useState} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'

const AddPirate = () => {
    const [ pirate, setPirate ] = useState({
        name: "",
        img: "",
        chest: "",
        catchPhrase: "",
        crewPosition: "",
        pegLeg: true,
        eyePatch: true,
        hookHand: true,
    })
    const [ dynamicErrors, setDynamicErrors ] = useState({
        name: "",
        chest: "",
        catchPhrase: "",
    })
    const [ errors, setErrors ] = useState([])

    const changeHandler = e => {
        setPirate({
            ...pirate,
            [e.target.name]: e.target.value
        })
    }

    const nameHandler = e => {
        setPirate({
            ...pirate,
            [e.target.name]: e.target.value
        })
        if(e.target.value.length < 3 && e.target.value.length !== 0){
            setDynamicErrors({
                ...dynamicErrors,
                [e.target.name]: "Name must be longer than 3 characters"
            })
        }
        else{
            setDynamicErrors({
                ...dynamicErrors,
                [e.target.name]: ""
            })
        }
    }

    const chestHandler = e => {
        setPirate({
            ...pirate,
            [e.target.name]: e.target.value
        })
        if(e.target.value <= 0 && e.target.value !== ""){
            setDynamicErrors({
                ...dynamicErrors,
                [e.target.name]: "Any good pirate would have at least 1 treasure chest"
            })
        }
        else{
            setDynamicErrors({
                ...dynamicErrors,
                [e.target.name]: ""
            })
        }
    }

    const phraseHandler = e => {
        setPirate({
            ...pirate,
            [e.target.name]: e.target.value
        })
        if( e.target.value.length < 5 && e.target.value.length !== 0){
            setDynamicErrors({
                ...dynamicErrors,
                [e.target.name]: "Catch Phrase should be longer than 5 characters"
            })
        }
        else{
            setDynamicErrors({
                ...dynamicErrors,
                [e.target.name]: ""
            })
        }
    }

    const submitHandler = e => {
        console.log(pirate)
        e.preventDefault()
        axios.post("http://localhost:8000/api/pirates/new", pirate)
            .then( res => {
                if(res.data.message === "success"){
                    setPirate({
                        name: "",
                        img: "",
                        chest: "",
                        catchPhrase: "",
                        crewPosition: "",
                        pegLeg: true,
                        eyePatch: true,
                        hookHand: true,
                    })
                    navigate("/")
                }
            })
            .catch( err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].properties.message)
                }
                setErrors(errorArr)
            })
        }

            const pegLegHandler = e => {
                if( pirate.pegLeg === true){
                    setPirate({
                        ...pirate,
                        [e.target.name]: false
                    })
                }
                else{
                    setPirate({
                        ...pirate,
                        [e.target.name]: true
                    })
                }
            }
            const hookHandHandler = e => {
                if( pirate.hookHand === true){
                    setPirate({
                        ...pirate,
                        [e.target.name]: false
                    })
                }
                else{
                    setPirate({
                        ...pirate,
                        [e.target.name]: true
                    })
                }
            }
            const eyePatchHandler = e => {
                if( pirate.eyePatch === true){
                    setPirate({
                        ...pirate,
                        [e.target.name]: false
                    })
                }
                else{
                    setPirate({
                        ...pirate,
                        [e.target.name]: true
                    })
                }
            }

    return (
        <div className="row">
            <h1 className="col-sm-8 offset-sm-1">Add Pirate</h1>&nbsp;
            <Link to="/"><button  className="col-lg-12 offset-sm-1 btn-secondary">Crew Board</button></Link>
            <br/>
            <br/>
            <form onSubmit={ submitHandler } className="col-sm-12">
            {errors.map((err, i) => <p key={i} style={{color: "red"}}>{err}</p> )}
                    <p style={{color: "red"}} className="col-sm-4 offset-sm-1">{dynamicErrors.name}</p>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-4 offset-sm-1">
                        Pirate Name:
                    </label>
                    <input type="text" 
                    name="name"
                    onChange={ e => nameHandler(e) }
                    value={pirate.name}/>
                </div>
                <div className="form-group row">
                    <label htmlFor="img" className="col-sm-4 offset-sm-1">
                        Image URL:
                    </label>
                    <input type="text" 
                    name="img"
                    onChange={ e => changeHandler(e) }
                    value={pirate.img}/>
                </div>
                    <p style={{color: "red"}} className="col-sm-4 offset-sm-1">{dynamicErrors.chest}</p>
                <div className="form-group row" >
                    <label htmlFor="chest" className="col-sm-4 offset-sm-1">
                        # of Treasure Chests: 
                    </label>
                    <input type="number"
                    name="chest"
                    onChange={ e => chestHandler(e) }
                    value={pirate.chest}/>
                </div>
                    <p style={{color: "red"}} className="col-sm-4 offset-sm-1">{dynamicErrors.catchPhrase}</p>
                <div className="form-group row">
                    <label htmlFor="catchPhrase" className="col-sm-4 offset-sm-1">
                        Pirate Catch Phrase:
                    </label>
                    <input type="text" 
                    name="catchPhrase"
                    onChange={ e => phraseHandler(e) }
                    value={pirate.catchPhrase}/>
                </div>
                <div className="form-group row">
                    <label htmlFor="crewPosition" className="col-sm-4 offset-sm-1">
                        Crew Position:
                    </label>
                    <select name="crewPosition" onChange={ e => changeHandler(e) } value={pirate.crewPosition} >
                        <option value="Captian">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quater Master">Quater Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>
                <div className="form-group row">
                    <label htmlFor="pegLeg" className="col-sm-4 offset-sm-1">
                        Pegleg
                    </label>
                    <input type="checkbox" 
                    name="pegLeg"
                    onChange={ e => pegLegHandler(e) }
                    value={pirate.pegLeg} defaultChecked={ true }/>
                </div>
                <div className="form-group row">
                    <label htmlFor="eyePatch" className="col-sm-4 offset-sm-1">
                        Eye Patch
                    </label>
                    <input type="checkbox" 
                    name="eyePatch"
                    onChange={ e => eyePatchHandler(e) }
                    value={pirate.eyePatch} defaultChecked={ true }/>
                </div>
                <div className="form-group row">
                    <label htmlFor="hookHand" className="col-sm-4 offset-sm-1">
                        Hook Hand
                    </label>
                    <input type="checkbox" 
                    name="hookHand"
                    onChange={ e => hookHandHandler(e) }
                    value={pirate.hookHand} defaultChecked={ true } />
                </div>
                <div>
                <input type="submit" value="Add Pirate"  className="col-sm-1 btn-primary"/>
                </div>
            </form>
        </div>
            
    )
}

export default AddPirate
