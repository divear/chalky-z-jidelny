import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import star from "./imgs/fullStar.png"


function SpecificChalka() {
    // const serverDomain = "https://chalky-z-jidelny.herokuapp.com/"
    const serverDomain = "http://localhost:4000/"

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
            <h4>{data[0] && data[0].stars}/5</h4>
            <h3 className='date'>{data[0] && data[0].posted_date}</h3>
            <a href={data[0] && data[0].img}><img className='chalkaImgBig' src={data[0] && data[0].img} alt="" /></a>
            <button onClick={() => window.location = `/chalky/${data[0].id}/new/comment`} className="addchalka">+</button>


            {data[0] && data[0].comment_body && data.map((d) => {
                return (
                    <div key={d.comment_id} className='comment'>
                        <h3 className='date'>{d.comment_date}</h3>
                        <i>{d.comment_username || "anonym"}</i>
                        <h2>{d.comment_body}</h2>
                    </div>
                )
            })}
        </div>

        <div className='comments'>

        </div>
    </div>;
}

export default SpecificChalka;