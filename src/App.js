import './App.css';
import ListName from './component/ListName'
import Profil from './component/Profil';
import Bio from './component/Bio'
function App() {
  const name='Ben Nhila Saif';
  const bio='I was born on 11/30/2002, I work out in web development and I love camping ';
  return (
    <div className="App">
        
           <Profil />
         
           
           
        <ListName userName={name} />
       
        <Bio  userBio={bio} />
      
    </div>
  );
}

export default App;
