import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IndustriesArticles = ({ Api }) => {
    const [fintechData, setFintechData] = useState([]);

    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchFintechData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/${Api}`);
                console.log("API Response:", response);
                if (response.data && response.data.length > 0) {
                    // Assuming your API returns the data array directly
                    setFintechData(response.data);
                } else {
                    console.log("No data received from API");
                }
            } catch (error) {
                console.error('Error fetching fintech data:', error);
            }
        };

        if (Api) {
            fetchFintechData();
        }
    }, [Api]); // Include Api in the dependencies array

    if (fintechData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <article className='styling-articals'>
            {fintechData.map((item, index) => (
                <section className='styling-artical-sections' key={index} >
                    <div className="para-title-industry">
                        <h2 className='title-special-new'>{item.headingText} <span className='bluer'>{item.highlighted}</span></h2>
                    </div>
                    <div className="para-desc-industry">
                        {item.paragraphText}
                    </div>
                </section>
            ))}
        </article>
    );
};

export default IndustriesArticles;
