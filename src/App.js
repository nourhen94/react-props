
import './App.css';
import Data from './profile.js/Component/Data';

function App() {
  const Name = {
  fullName : 'nourhen jallouli',
  profession : 'Web developer',
}  
const handleName = (fullName) => alert (`${fullName}`)
return (
    <div className="App">
    <img src="https://media.istockphoto.com/photos/woman-working-with-human-resources-software-on-computer-picture-id1306092452?b=1&k=20&m=1306092452&s=170667a&w=0&h=e1TYK-A23tmSB2FFHHB2UI6H5hUM-WJgmR3RXmZTn3Y=" ></img>

<Data data = {Name} fun ={handleName}/>

    </div>
  );
}

export default App;
