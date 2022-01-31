import React, { useEffect, useState } from 'react';
import star from "./imgs/fullStar.png"
import loading from "./imgs/loading.gif"

function Home() {
    const serverDomain = process.env.REACT_APP_SERVERDOMAIN

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getBlogs() {
            try {
                const response = await fetch(serverDomain + "chalky");
                const jsonData = await response.json();
                setData(jsonData.reverse());
            } catch (error) {
                console.log(error);
            }
        }
        getBlogs();
    }, []);

    return <div>
        <title>Chálky ze školní jídelny</title>
        <div className="Nejnovější chálky">
            <h2 className='headerText'>Nejnovější chálky</h2>
            <button title='Přidat novej chálec' onClick={() => window.location = "new/chalka"} className="addchalka">+</button>
            <div className="chalky">
                {data[0] ? data.map((d) => {
                    return (
                        <div title={`Chálka ${d.id}`} onClick={() => window.location = `/chalky/${d.id}`} key={d.id} className="chalka">
                            <h5><i>{d.username}</i></h5>
                            <h4>{d.nazev}</h4>

                            {/* stars */}
                            {[...Array(d.stars)].map((i) => <span key={i}><img className='star' src={star} alt="" /></span>)}

                            <img className='chalkaImg' src={d.img} alt="🍛" />
                        </div>
                    )
                }) : <img className='spinner' src={loading} alt='Načítání...'></img>}
            </div>
            <footer>
                Made by Lukáš Odehnal
                <a className='floatRight' href="/info">info</a>
            </footer>
        </div>
    </div>
}

export default Home;
