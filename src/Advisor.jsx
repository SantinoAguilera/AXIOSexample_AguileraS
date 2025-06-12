import { React, useEffect, useState } from 'react'
import axios from "axios";

function Advisor() {
    const[advice, setAdvice] = useState('');

    useEffect(() => {
        axios.get('https://api.adviceslip.com/advice')
        .then(function (response) {
            console.log('response:' + response);
            setAdvice(response.data.slip.advice);
        })
        .catch(function (error) {
            console.log('error: ' + error);
        })
      })
    return (
      <div>
        <h2>Have some advice:</h2>
        <p>{advice}</p>
      </div>
    )
}

export default Advisor