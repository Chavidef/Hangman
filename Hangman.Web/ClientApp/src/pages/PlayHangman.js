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
        const drawGallows = async () => {
            const c = document.getElementById("myCanvas");
            const ctx = c.getContext("2d");
            ctx.lineWidth = 3;

            ctx.moveTo(150, 0); //piece to hang from
            ctx.lineTo(150, 30);
            ctx.stroke();

            ctx.moveTo(150, 0);//top
            ctx.lineTo(300, 0);
            ctx.stroke();

            ctx.moveTo(300, 0);//right
            ctx.lineTo(300, 300);
            ctx.stroke();

            ctx.moveTo(270, 0);//right reinforcement
            ctx.lineTo(300, 30);
            ctx.stroke();
        }

        drawGallows();
        getWord();

    }, [])





    const onSubmitClick = async (e) => {
        let letterExistsCount = 0;

        e.currentTarget.disabled = true; //disable button after clicked

        chosenLetter = e.target.innerText;

        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i] === chosenLetter) {
                letterExistsCount++;
            }
        }
        letterExists = letterExistsCount > 0;
        console.log(letterExists);

        if (letterExists) {
            let chosenElements = 0;
            for (let i = 1; i <= letterExistsCount; i++) {
                const elements = document.getElementsByClassName("letterBlank");
                const elementsArr = [...elements];

                chosenElements = elementsArr.filter(el => el.value === chosenLetter);
                chosenElements.forEach(element => element.classList.add("showLetter"));
            }
            correctGuesses += chosenElements.length;
            console.log(correctGuesses);
        }
        else {
            incorrectGuesses = incorrectGuesses + 1;
            console.log(incorrectGuesses);

            getBodyPart();
        }
    }

    const getBodyPart = () => {
        if (incorrectGuesses === 1) {
            drawHead();
        }
        else if (incorrectGuesses === 2) {
            drawBody();
        }
        else if (incorrectGuesses === 3) {
            drawRightFoot();
        }
        else if (incorrectGuesses === 4) {
            drawLeftFoot();
        }
        else if (incorrectGuesses === 5) {
            drawRightHand();
        }
        else if (incorrectGuesses === 6) {
            drawLeftHand();
            //gameOver();
        }
    }

    const drawHead = async () => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(150, 60, 30, 0, 2 * Math.PI);
        ctx.strokeStyle = "#a9a9a9";
        ctx.stroke();
    }

    const drawBody = async () => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.moveTo(150, 90);
        ctx.lineTo(150, 200);
        ctx.strokeStyle = "#a9a9a9";
        ctx.stroke();
    }
    const drawRightFoot = async () => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.moveTo(150, 200);
        ctx.lineTo(200, 270);
        ctx.strokeStyle = "#a9a9a9";
        ctx.stroke();
    }
    const drawLeftFoot = async () => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.moveTo(150, 200);
        ctx.lineTo(100, 270);
        ctx.strokeStyle = "#a9a9a9";
        ctx.stroke();
    }
    const drawRightHand = async () => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.moveTo(150, 130);
        ctx.lineTo(220, 80);
        ctx.strokeStyle = "#a9a9a9";
        ctx.stroke();
    }
    const drawLeftHand = async () => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.moveTo(150, 130);
        ctx.lineTo(80, 80);
        ctx.strokeStyle = "#a9a9a9";
        ctx.stroke();
    }
    
    return (
        <>
            <div className='mt-1'>
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
                <canvas id="myCanvas" width="300" height="300">
                    Your browser does not support this.
                </canvas>
                <div className='row mt-30 letterBlankDiv'>
                    {wordArr && wordArr.map(l =>
                        <input type='text' className='letterBlank' value={l} id={l} />

                    )}
                </div>
            </div>
        </>
    )

   
}
export default PlayHangman;