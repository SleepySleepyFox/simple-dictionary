import React from 'react'
import { useEffect, useState } from 'react'

export default function Dictionary(props) {
  return (
    <div className='content-container'>
        <div className="content">
          <div className="meaning">
          {props.api_data.map(e => (
            <>
            <div className="wordPhonetics">
                {<h1>{e.word}</h1>}
                {e.word_phonetics && <small>{e.word_phonetics}</small>}
                {e.audio != '' && <img className='play_sound' src="https://img.icons8.com/ios/50/null/high-volume--v1.png" onClick={() => new Audio(e.audio).play()               
            }/>}
            </div>
            <div className="wordInfo">
                <p>{e.word_meaning[0].definitions[0].definition}</p>
            </div>
            </>
          ))}
          </div>
        </div>
    </div>
  )
}

