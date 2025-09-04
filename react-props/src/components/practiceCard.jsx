import React from 'react'
import './PracticeCard.css';

function PracticeCard(props) {
  return (
    <div className='Container'>
        <h1 id='header'>{props.name}</h1>
        <img  id='img' src="https://imgs.search.brave.com/_2tG1F_N7xq-UYP0noa2qPyH955TJaNQ4VCFjFrfpvY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFNNlJVNlFBTkwu/anBn" alt="" />
        <p id='desc'>{props.desc}</p>
    </div>
  )
}

export default PracticeCard