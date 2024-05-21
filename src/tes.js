import React, { useEffect } from 'react'
const Tes = () => {

    useEffect(() => {
      
        // Fetch data from the API using the user's username
        fetch(`https://social-media-backend-7m3p7xxhd-bhawna89s-projects.vercel.app/api/test`)
            .then(response => response.json())
            .then(data => {
                // Assuming the data structure has a 'fullName' field
              
                console.log(data);
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, );
    
  return (
    <div>
        <h1>check console</h1>
      
    </div>
  )
}

export default Tes;
