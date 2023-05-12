import {useState, useEffect} from 'react';
import './App.css';
import PlayerSec from './components/playerSection/PlayerSec';
import Cart from './components/Cart/Cart';
import fakeData from './fakeData/fakeData.json';


function App() {

  const [player, setPlayer] = useState([]);

  useEffect(()=>{

      setPlayer(fakeData)

  },[])

  const [list, setList]  = useState([]);

  const handleClick = player => {

   const newList = [...list, player];
   setList(newList);

  }


  return (
  <div className='teamSelectionPage'>
      <h2>Bangladesh Cricket Team Selection</h2>

      <div className='cricketTeamContainer'>
        <div className='playerInfoContainer'>
          {
            player.map(data => <PlayerSec handleClick={handleClick} player={data}></PlayerSec>)
          }
        </div>

        <div className="listSecContainer">

          <Cart list={list}></Cart>

        </div>

      </div>

  </div>

  );
}

export default App;
