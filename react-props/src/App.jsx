import ButtonCard from './components/buttonCard.jsx'
import PracticeCard from './components/practiceCard.jsx'
import UserCard from './components/UserCard.jsx'

const App = () => {
  return (
    <div className='SuperContainer'>
      {/* <PracticeCard name="Zaraki Kenpachi" desc="goat of all goats"/>
      <PracticeCard name="Kenpachi the goat" desc="fought ichigo without bankai"/>
      <PracticeCard name="Kenpachi Zaraki" desc="strong enough to beat a captain even without a bankai"/>

      <ButtonCard name='IamAbutton'/> */} 


      <UserCard heading='AnimeCard' content='Information about an anime Character.' footer='this is the footer of the card.' image='https://imgs.search.brave.com/uXXqIaZXQsTDPgxGoexuwtkctuBU3b1eeSI5TXoq8yM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/OTY0NDU1Ni92ZWN0/b3IvYW5pbWUtc3R5/bGUtY2hhcmFjdGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1nOFFCeGVtZ0ZG/VVFzeHJaSFpwUVJu/cUFldnZKR0hPTjBF/X3BMSnphbDRFPQ'>
        <button>i am a button</button>
        </UserCard> 

         <UserCard heading='AnimeCard' content='Information about an anime Character.' footer='this is the footer of the card.' image='https://imgs.search.brave.com/uXXqIaZXQsTDPgxGoexuwtkctuBU3b1eeSI5TXoq8yM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/OTY0NDU1Ni92ZWN0/b3IvYW5pbWUtc3R5/bGUtY2hhcmFjdGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1nOFFCeGVtZ0ZG/VVFzeHJaSFpwUVJu/cUFldnZKR0hPTjBF/X3BMSnphbDRFPQ'>
        <p>this is about stuff</p>
        </UserCard> 
    </div>
  )
}

export default App
