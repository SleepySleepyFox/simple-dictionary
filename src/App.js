import { useState, useEffect } from 'react'
import "../src/App.css"
import Dictionary from './components/Dictionary'
import Header from './components/Header'
import WordNotFound from './components/WordNotFound'



export default function App(){
const [dictword, setDictWord] = useState()
const [inptvalue, setInptvalue] = useState('example')
const [wordInfo, setWordInfo] = useState([])
const [exist, setExist] = useState(true)
  
useEffect(() =>{
  try{
     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inptvalue}`)
     .then(res => {
      if(res.status === 404){
        setExist(false)
        return null
      }else{
        return res.json()
      }
    })
     .then(data => {
      if(data == null){
        return null
      }
      setWordInfo(e => (
            [
                {
                    word: data[0].word,
                    audio: data[0].phonetics[0].audio,
                    word_meaning: data[0].meanings,
                    word_phonetics: data[0].phonetic,
                }
            ]
        ))
      })
  } catch(err){
    console.log("Error Here")
  }
          
},[dictword])
  
  return (
    <>    
    <div className="container">
      <Header />
      <hr />
      <main>
        {exist && <div className="inpt" 
        onChange={(event) =>{
          setInptvalue(e =>(
            event.target.value
          ))
        }}
        >
          <input type="text" />
          <button className='submt'
          onClick={() =>{
            setDictWord(e =>(inptvalue))
            console.log(inptvalue)
          }}>
            <img src="https://img.icons8.com/search" alt="" />
          </button>
        </div>}
        {exist ? <Dictionary api_data = {wordInfo}/> : <WordNotFound />}
      </main>
    </div>
    </>
  )
}
