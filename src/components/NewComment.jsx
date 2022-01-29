import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import spinner from "./imgs/loading.gif"
import star from "./imgs/fullStar.png"


function NewComment() {
    const serverDomain = process.env.REACT_APP_SERVERDOMAIN


    const { id } = useParams()
    const [body, setbody] = useState("")
    const [stars, setStars] = useState(null)
    const [username, setUsername] = useState(localStorage.getItem("username") || "")

    const [isDisabled, setIsDisabled] = useState(false)
    const [error, setError] = useState("")

    async function submit(e) {
        e.preventDefault()
        if (!body | !username) {
            setError("Všechna pole jsou povinná!");
            return
        } else if (stars > 5) {
            setError("Největší počet hvězdiček je 5")
        }
        localStorage.setItem("username", username)
        try {
            setIsDisabled(true)

            const Rbody = { body }
            const Rstars = { stars }
            const Rusername = { username }

            const arr = [Rbody, Rstars, Rusername]

            const response = await fetch(`${serverDomain}chalky/${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(arr)
            })
            console.log(response);
            window.location = `/chalky/${id}`

        } catch (error) {
            console.log(error);
        }
    }
    return <div>
        <title>Nový komentář k chálce {id}</title>
        <h2 className='headerText'>Nový komentář k chálce {id}</h2>

        <img className={isDisabled ? "spinner" : "no"} src={spinner} alt="" />
        <form onSubmit={submit} action="">
            <input type="text" className='username' value={username} onChange={e => setUsername(e.target.value)} placeholder='Vaše přezdívka' />

            <div className='allStarsPicker'>
                {[...Array(5)].map((s, i) => {
                    const ratingValue = i + 1
                    return (
                        <label key={i}>
                            <input name='rating' className='no' type="radio" value={ratingValue} onClick={() => setStars(ratingValue)} />
                            <img className={ratingValue > stars ? 'starPickerGrey' : 'starPicker'} src={star} alt="" />
                        </label>
                    )
                })}
            </div>

            <textarea onChange={e => setbody(e.target.value)} value={body} className='newchalkaInput' placeholder='Komentář...' type="text" />

            <button className='poslat' disabled={isDisabled}>Poslat</button>

            <h1 className='error'>{error}</h1>
        </form>

    </div>;
}

export default NewComment;
