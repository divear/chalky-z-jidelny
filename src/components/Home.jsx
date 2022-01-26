import React, {useEffect, useState} from 'react';
import star from "./imgs/fullStar.png"

function Home() {
    const serverDomain = "https://chalky-z-jidelny.herokuapp.com/"
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getBlogs() {
            try {
                const response = await fetch(serverDomain + "chalky");
                const jsonData = await response.json();
                setData(jsonData);
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
                <button onClick={()=>window.location = "new/chalka"} className="addchalka">+</button>
                <div className="chalky">
                    {data[0] && data.map((d)=>{
                        return(
                            <div onClick={()=>window.location = `/chalky/${d.id}`} key={d.id} className="chalka">
                                <h5>{d.username}</h5>
                                <h4>{d.nazev}</h4>

                                {/* stars */}
                                {[...Array(d.stars)].map((i) => <span key={i}><img className='star' src={star} alt="" /></span>)}

                                <img className='chalkaImg' src={d.img} alt="🍛" />
                            </div>
                        )
                    })}
                </div>    
            </div>
    </div>
}

export default Home;
