import React, {useEffect, useState} from 'react';

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
        <div>
            <div className="Nejnovější chálky">
                <h2>Nejnovější chálky</h2>
                <div className="chalky">
                    {data[0] && data.map((d)=>{
                        return(
                            <div className="chalka">
                                <h4>{d.nazev}</h4>
                                <h4 className='stars'>{d.stars}/5</h4>
                                <img className='chalkaImg' src={d.img} alt="🍛" />
                            </div>
                        )
                    })}
                </div>     
            </div>
        </div>
    </div>;
}

export default Home;
