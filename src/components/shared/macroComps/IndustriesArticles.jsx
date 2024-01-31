import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const IndustriesArticles = () => {
    const [fintechData, setFintechData] = useState([]);

    const simplifyFintechData = (data) => {
        return data.map(entry => ({
            id: entry._id,
            headingText: entry.headingText,
            highlighted: entry.highlighted,
            paragraphText: entry.paragraphText
        }));
    };

    const fetchFintechData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/fintech');
            console.log("API Response:", response);
            if (response.data && response.data.length > 0) {
                const simplifiedData = simplifyFintechData(response.data);
                console.log("Simplified Data:", simplifiedData);
                setFintechData(simplifiedData);
            } else {
                console.log("No data received from API");
            }
        } catch (error) {
            console.error('Error fetching fintech data:', error);
        }
    };

    useEffect(() => {
        fetchFintechData();
    }, []);

 
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

// className="industry-para-container"
// className="industry-para-collection"

export default IndustriesArticles;
