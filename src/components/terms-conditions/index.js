import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsConditionsPage = () => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/');
    }
    return (
        <div className='main-page'>
            <h1>Terms And Conditions</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis, aperiam quam, neque fugiat minima fugit eos amet 
                iste, porro vel ratione numquam voluptatem eligendi doloribus 
                sequi omnis consequatur quae ipsa!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Voluptatem, inventore pariatur, ipsum debitis repellendus, 
                consectetur beatae dolor est harum reiciendis quia. Hic nulla esse 
                provident iure earum, quibusdam iste sit.
            </p>
            <button onClick={handleClick} id='goBackBtn'>Go Back</button>
        </div>
    );
}

export default TermsConditionsPage;

