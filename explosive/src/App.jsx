import minew from './assets/minew.png'
import log from './assets/log.png'
import rocket from './assets/rocket.png'
import kat from './assets/kat.png'
import spear from './assets/spear.png'
import './App.css'
import Alchemy from './Alchemy'



function App() {
  
  return (
    <><Alchemy title="Ogre" text="kill em!" imagg={minew}/> 
    <Alchemy title="Satosi" text="sqash em!" imagg={log} />
    <Alchemy title="cyclops" text="damn u " imagg={rocket}/>
    <Alchemy title="gyro" text="ready to die" imagg={kat}/>
    <Alchemy title="mirage" text="knuckles" imagg={spear} />
    </>
   
  )
}

export default App
