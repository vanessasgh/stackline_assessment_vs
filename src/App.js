import logo from './logo.png';
import React from 'react'
import './App.css';
import ItemData from './data/stackline_frontend_assessment_data_2021.json'
import SortTable from './components/SortTable';
import AboutItem from './components/AboutItem';

function App() {
  return (
    <div className='mainDiv'>
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <div>
        <img src={logo} className='logo' alt='Logo'></img>
      </div>
    </header>
  )
}

function Body() {
  var itemData = ItemData[0];
  return (
    <div className='bodyDiv'>
      <AboutItem itemData={itemData} />
      <div className='contentDiv tableDiv'>
        <SortTable tableData={itemData.sales} />
      </div>
    </div>
  )
}

export default App;
