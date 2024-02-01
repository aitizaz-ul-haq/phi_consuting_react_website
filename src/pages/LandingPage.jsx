import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LandingPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('https://yourwordpresssite.com/wp-json/wp/v2/pages/{page_id}')
      .then(response => setContent(response.data.content.rendered))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default LandingPage;
