import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <>
            <div className='loader'>
                <svg viewBox='0 0 32 32' width='32' height='32'>
                    <circle className='spinner' cx='16' cy='16' r='14' fill='none'></circle>
                </svg>
            </div>
        </>
    )
};

export default Loader;