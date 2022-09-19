import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const PlayHangman = () => {

    const { category } = useParams();
    const [word, setWord] = useState('');

    const stringWord = word.toString().toUpperCase();
    let wordArr = [...stringWord];
    let chosenLetter = '';
    let letterExists = false;

    let correctGuesses = 0;
    let incorrectGuesses = 0;

    useEffect(() => {

        const getWord = async () => {
            const { data } = await axios.get(`https://random-word-form.herokuapp.com/random/${category}`);

            setWord(data);
        }

        getWord();

    }, [])




    let letterExistsCount = 0;

    const onSubmitClick = async (e) => {
        e.currentTarget.disabled = true; //disable button after clicked

        chosenLetter = e.target.innerText;

        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i] === chosenLetter) {
                letterExistsCount++;
            }
        }
        letterExists = letterExistsCount > 0;

        if (letterExists) {
            correctGuess();
        }
        else {
            incorrectGuesses++;
            console.log("incorrect")
            console.log(incorrectGuesses);
        }
    }

    const correctGuess = async () => {
        await correctGuesses++;
        for (let i = 1; i <= letterExistsCount; i++) {
            const elements = document.getElementsByClassName("letterBlank");
            const elementsArr = [...elements];

            const chosenElements = elementsArr.filter(el => el.value === chosenLetter);
            correctGuesses += chosenElements.length;
            chosenElements.forEach(element => element.classList.add("showLetter"));
        }
        console.log("correct")
        console.log(correctGuesses);
    }

    return (
        <>
            <h6>word: {word}</h6>
            <div className='container mt-1'>
                <div className='row'>
                    <div class="btn-group-sm" role="group">
                        <button className="btn btn-secondary" value="A" onClick={onSubmitClick} >A</button>
                        <button className="btn btn-secondary" value="B" onClick={onSubmitClick} >B</button>
                        <button className="btn btn-secondary" value="C" onClick={onSubmitClick} >C</button>
                        <button className="btn btn-secondary" value="D" onClick={onSubmitClick} >D</button>
                        <button className="btn btn-secondary" value="E" onClick={onSubmitClick} >E</button>
                        <button className="btn btn-secondary" value="F" onClick={onSubmitClick} >F</button>
                        <button className="btn btn-secondary" value="G" onClick={onSubmitClick} >G</button>
                        <button className="btn btn-secondary" value="H" onClick={onSubmitClick} >H</button>
                        <button className="btn btn-secondary" value="I" onClick={onSubmitClick} >I</button>
                        <button className="btn btn-secondary" value="J" onClick={onSubmitClick} >J</button>
                        <button className="btn btn-secondary" value="K" onClick={onSubmitClick} >K</button>
                        <button className="btn btn-secondary" value="L" onClick={onSubmitClick} >L</button>
                        <button className="btn btn-secondary" value="M" onClick={onSubmitClick} >M</button>
                        <button className="btn btn-secondary" value="N" onClick={onSubmitClick} >N</button>
                        <button className="btn btn-secondary" value="O" onClick={onSubmitClick} >O</button>
                        <button className="btn btn-secondary" value="P" onClick={onSubmitClick} >P</button>
                        <button className="btn btn-secondary" value="Q" onClick={onSubmitClick} >Q</button>
                        <button className="btn btn-secondary" value="R" onClick={onSubmitClick} >R</button>
                        <button className="btn btn-secondary" value="S" onClick={onSubmitClick} >S</button>
                        <button className="btn btn-secondary" value="T" onClick={onSubmitClick} >T</button>
                        <button className="btn btn-secondary" value="U" onClick={onSubmitClick} >U</button>
                        <button className="btn btn-secondary" value="V" onClick={onSubmitClick} >V</button>
                        <button className="btn btn-secondary" value="W" onClick={onSubmitClick} >W</button>
                        <button className="btn btn-secondary" value="X" onClick={onSubmitClick} >X</button>
                        <button className="btn btn-secondary" value="Y" onClick={onSubmitClick} >Y</button>
                        <button className="btn btn-secondary" value="Z" onClick={onSubmitClick} >Z</button>
                    </div>
                </div>
                <div className='row mt-30'>
                    {wordArr && wordArr.map(l =>
                        <input type='text' className='letterBlank' value={l} id={l} />

                    )}
                </div>
            </div>
        </>
    )
}
export default PlayHangman;