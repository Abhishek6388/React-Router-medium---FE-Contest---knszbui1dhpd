import React from 'react';
import { useParams } form 'react-router-dom';

export const BackgroundColorChanger = () =>{
    let { colorname } = useParams();
    console.log(colorname);
    return(
        <main style={{height: "100vh", backgroundColor: `${colorname}` }}>
        Background Color Changer
        </main>
       
    )
}
