import React from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
   const { url } = useParams();

   return (
      <div>
         <h1>More info...{url}</h1>
      </div>
   )
}

export default Details;
