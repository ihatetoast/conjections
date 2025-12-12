import {useState} from 'react'


import './App.css'

import Button from './components/Button'

import {gameoptions} from './gameoptions'

function App() {
  // index for game will be set randomly later but also not using a previously played game (once i get plenty of options)
  const [game, setGame] = useState(gameoptions[0])
  const [mistakes, setMistakes] = useState(0);


  // button state?
  const [disableSubmit, setDisableSubmit] = useState(false);

  function handleShuffle() {
    console.log("shuffle clicked");
    // expect to shuffle. Anything already selected stays selected but also is shuffled
  }

  function handleDeSelect() {
    console.log("deselect clicked");
    // expect to see that tile/s look/s unselected via class/color
  }

  function handleSubmit() {
    console.log("submit clicked");
    setMistakes((prevMistakes) => prevMistakes + 1)
    // will need to limit the number of mistakes and diable the submit
  }
  console.log("mistakes: ", mistakes);
  return (
    <>    
      <header>
        <h1>Conjections</h1>
        <p>Conjecture + Connections</p>
      </header>
    <main>
      <div>BOARD</div>
      <div>Mistakes remaining: {[...Array(4)].map((_, idx)=>{
        
        return <span key={idx} className={`mistake ${mistakes >= idx + 1 ? "dead" : "alive"}`}></span>})}</div>
      <div className="btn-container">
        <Button handleClick={handleShuffle} isDisabled={false}>Shuffle</Button>
        <Button handleClick={handleDeSelect}  isDisabled={false}>Deselect All</Button>
        <Button handleClick={handleSubmit}  isDisabled={disableSubmit}>Submit</Button>
      </div>
    </main>
    
    </>
  )
}

export default App


// notes on buttons in button comp