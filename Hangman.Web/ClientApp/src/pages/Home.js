import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    const [category, setCategory] = useState('');

    return (
        <div className='container mt-5'>
            <h1>It's time for a new HANGMAN GAME!</h1>
            <h3>Choose a category:</h3>
            <div className='row mt-5'>
                <div className='col md-3'>
                    <button className='btn btn-block btn-info' onClick={()=>setCategory('noun')}>Noun</button>
                </div>
                <div className='col md-3'>
                    <button className='btn btn-block btn-info' onClick={() => setCategory('adjective')}>Adjective</button>
                </div>
                <div className='col md-3'>
                    <button className='btn btn-block btn-info' onClick={() => setCategory('animal')}>Animal</button>
                </div>
            </div>
            {category && <div className='row mt-5'>
                <h2>You chose the category {category}.</h2>
                <div className='col-md-2 center mt-5'>
                    <Link to={`/playhangman/${category}`} className='btn btn-block btn-warning'>
                        Begin Game
                    </Link>
                   
                </div>
            </div>}
        </div>
        )
}

export default Home;