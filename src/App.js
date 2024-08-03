import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <img src={logo} className='App-logo img-fluid' alt='logo'/>
      </header>
      <main>
        <Dictionary defaultKeyword="athena"/>
      </main>
      <footer className='App-footer'>
        Coded by 
        <a href='#' target='blank'> Audrey Mabry</a>
        , open-sourced on 
        <a href='https://github.com/aamabry/dictionary-project' target='blank'> Github</a>
        , and hosted on 
        <a href='https://aamabry-dictionary-app.netlify.app/' target='blank'> Netlify</a>
        .
        </footer>
      </div>
    </div>
  );
}
;
