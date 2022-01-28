import React, { useEffect, useState } from 'react';
import star from "./imgs/fullStar.png"

function Home() {
    const serverDomain = "https://chalky-z-jidelny.herokuapp.com/"
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
            <h2>Nejnovější chálky</h2>
            <button onClick={() => window.location = "new/chalka"} className="addchalka">+</button>
            <div className="chalky">
                {data[0] && data.map((d) => {
                    return (
                        <div onClick={() => window.location = `/chalky/${d.id}`} key={d.id} className="chalka">
                            <h5><i>{d.username}</i></h5>
                            <h4>{d.nazev}</h4>

                            {/* stars */}
                            {[...Array(d.stars)].map((i) => <span key={i}><img className='star' src={star} alt="" /></span>)}

                            <img className='chalkaImg' src={d.img} alt="🍛" />
                        </div>
                    )
                })}
            </div>
            <p>Made by Lukáš Odehnal</p>
        </div>
    </div>
}

export default Home;
