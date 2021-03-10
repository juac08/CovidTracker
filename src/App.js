import './App.css';
import ScrollTop from './components/navbar'
import FetchData from './components/data';
import DailyData from './components/Dailydata'
import Countries from './components/Country'
import React,{useState} from 'react'
import ReactFlagsSelect from 'react-flags-select';
import Individual from './components/individual'
import Footer from './components/footer'


function App() {
  const [name,setName]=useState('');
  const [countryName,setCountryName]=useState();
  const handleSubmit=(e)=>{
    e.preventDefault();
    setCountryName(name);
}
const handleClick =(e) =>{
  e.preventDefault();
  setCountryName('');
  setName('')
}

  return (
   <>
  
   <ScrollTop 
   name={name} 
   setName={setName} 
   handleSubmit={handleSubmit}
     handleClick={handleClick}
   />

<ReactFlagsSelect 
className="menu-flags"
selectButtonClassName="menu-flags-button"
selectedSize={30}
selected={countryName} 
optionsSize={30}
showSecondaryOptionLabel={true}
onSelect={name => {setCountryName(name);
setName(name)}}/> 
   
   {countryName?
   <Countries 
   name={name} 
   setName={setName} 
   countryName={countryName}
   setCounrtyName={setCountryName}
   handleSubmit={handleSubmit}
   />:<FetchData/> }
   {countryName && <Individual countryName={countryName}/>}
   {!countryName && <DailyData countryName={countryName}/>}
   
   <Footer />
   
   </>
  );
}

export default App;
