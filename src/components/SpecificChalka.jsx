import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import star from "./imgs/fullStar.png"


function SpecificChalka() {
    const serverDomain = process.env.REACT_APP_SERVERDOMAIN

    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function getBlogs() {
            try {
                const response = await fetch(`${serverDomain}chalky/${id}`);
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        getBlogs()

    }, [])

    return <div>
        <div className='specificChalka'>
            <title>Chálka číslo {data[0] && data[0].id}</title>
            <h5><i>{data[0] && data[0].username}</i></h5>
            <h2>{data[0] && data[0].nazev}</h2>
            {/* stars */}
            {[...Array(data[0] && data[0].stars)].map((i) => <span key={i}><img className='star' src={star} alt="" /></span>)}
            <h3 className='date'>{data[0] && data[0].posted_date}</h3>
            <a href={data[0] && data[0].img}><img className='chalkaImgBig' src={data[0] && data[0].img} alt="" /></a>
            <button title='Přidej komentář' onClick={() => window.location = `/chalky/${data[0].id}/new/comment`} className="addchalka">+</button>


            <div className="comments">
                {data[0] && data[0].comment_body && data.map((d) => {
                    return (
                        <div key={d.comment_id} className='comment'>

                            {/* stars */}
                            {[...Array(d.comment_stars)].map((i) => <span key={i}><img className='star' src={star} alt="" /></span>)}
                            <h3 className='date down'>{d.comment_date}</h3>
                            <i>{d.comment_username || "anonym"}</i>
                            <h2>{d.comment_body}</h2>

                        </div>
                    )
                })}
            </div>

        </div>

        <footer>
            Made by Lukáš Odehnal
            <a className='floatRight' href="/info">info</a>
        </footer>
    </div>;
}

export default SpecificChalka;