import logo from './logo.svg';
import './App.css';
import Me from './Me';

const me = {
  date: new Date(),
  text: "I want to be the best",
  author:{
    name:"Gachon Kim",
    logo: './kong.jpg'
  }
}



function App() {
  return (
    <div>
    <Me 
    date={me.date}
    text = {me.text}
    author={me.author}/>
    </div>
  );
}

export default App;
