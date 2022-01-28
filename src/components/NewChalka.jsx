import React, { useState } from 'react';
import { ref, getStorage, uploadBytes, token } from './firebase';
import spinner from "./imgs/loading.gif"


const storage = getStorage()



function NewChalka() {
  // const serverDomain = "https://chalky-z-jidelny.herokuapp.com/"
  const serverDomain = "http://localhost:4000/"


  const [nazev, setNazev] = useState("")
  const [img, setImg] = useState("")
  const [imgLink, setImgLink] = useState("")
  const [stars, setStars] = useState("0")
  const [username, setUsername] = useState("")

  const [isDisabled, setIsDisabled] = useState(false)
  const [error, setError] = useState("")

  function submit(e) {
    e.preventDefault()
    if (!nazev | !imgLink | !stars | !username) {
      setError("Všechna pole jsou povinná!");
      return
    } else if (stars > 5) {
      setError("Největší počet hvězdiček je 5")
    }
    localStorage.setItem("username", username)
    const spaceRef = ref(storage, `images/${img.name}`);
    uploadBytes(spaceRef, img).then(async (snapshot) => {
      try {
        setIsDisabled(true)

        const Rnazev = { nazev }
        const Rlink = { imgLink }
        const Rstars = { stars }
        const Rusername = { username }

        const arr = [Rnazev, Rlink, Rstars, Rusername]

        console.log(arr[1].imgLink);

        const response = await fetch(`${serverDomain}chalky`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(arr)
        })
        console.log(response);
        window.location = "/"

      } catch (error) {
        console.log(error);
      }
    });
  }

  function changeFile(e) {
    setImg(e.target.files[0])
    console.log(e.target.files[0]);
    setImgLink(`https://firebasestorage.googleapis.com/v0/b/chalky-69039.appspot.com/o/images%2F${e.target.files[0].name}?alt=media`)
  }

  return <div className='newChalkaPage'>
    <title>Nová chálka</title>
    <h2>Nová chálka</h2>
    <img className={isDisabled ? "spinner" : "no"} src={spinner} alt="" />
    <form onSubmit={submit} action="">
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Vaše přezdívka' />
      <input onChange={e => setNazev(e.target.value)} value={nazev} className='newchalkaInput' placeholder='Název chálky' type="text" />
      <input onChange={e => changeFile(e)} type="file" accept="image/*" />
      <img className='chalkaImg floatRight' src={imgLink} alt="" />
      <p>hvězdy</p>
      <input min="0" max="5" type="number" value={stars} onChange={e => setStars(e.target.value)} />
      <button disabled={isDisabled}>Poslat</button>

      <h1 className='error'>{error}</h1>
    </form>

  </div>;
}

export default NewChalka;