import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SpecificChalka() {
    const serverDomain = "https://chalky-z-jidelny.herokuapp.com/"
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
        getBlogs();
        }, [])

    return <div>
        <div className='specificChalka'>
            <h2>{data[0] && data[0].nazev}</h2>
            <h4>{data[0] && data[0].stars}/5</h4>
            <h3 className='date'>{data[0] && data[0].posted_date}</h3>
            <img className='chalkaImgBig' src={data[0] && data[0].img} alt="" />
        </div>

        <div className='comments'>

        </div>
    </div>; 
}

export default SpecificChalka;