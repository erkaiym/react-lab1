import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  const title = 'React Lab1';
  const names = ['Esen','Almaz','Aidar','Uluk'];
  const handleOk = ()=>{
    alert('Cancel clicked')
  }
  const handleCancel=()=>{
    alert('Cancel clicked')
  }

  return (
    <div className='container'> 
      <h1 className='title'>{title}</h1>
      <Button onClick = {handleOk}>Ok</Button>
      <Button onClick={handleCancel} >Cancel</Button>
      <ul className='names-wrapper'>
        {names.map(name => {
          return (
            <li className='name'>{name}</li>
          )
       })}
      </ul>
    </div>
  );
}

export default App;
