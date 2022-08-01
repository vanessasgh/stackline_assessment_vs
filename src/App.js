import logo from './logo.png';
import React from 'react'
import './App.css';
import ItemData from './Data/stackline_frontend_assessment_data_2021.json'
import SortTable from './Components/SortTable';

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
      <div className='contentDiv itemInfoDiv'>
        <ItemInfo itemData={itemData} />
        <div className='divider'></div>
        <div className="tagList">
          <TagList tags={itemData.tags} />
        </div>
        <div className='divider'></div>
      </div>
      <div className='contentDiv tableDiv'>
        <SortTable tableData={itemData.sales} />
      </div>
    </div>
  )
}

function TagList(props) {
  const tagListData = props.tags;
  const tagList = tagListData.map((tag) => <Tag tag={tag} />)
  return tagList
}

function Tag(props) {
  var tag = props.tag;
  return (
    <div className='tag'>
      <p className='tagText'>{tag}</p>
    </div>
  )
}

function ItemInfo(props) {
  var itemData = props.itemData;
  return (
    <div className='contentFirstPartDiv'>
      <img src={itemData.image} className='itemImg' alt='View of the product'></img>
      <h1 className='itemInfoTitle'>{itemData.title}</h1>
      <p className='itemInfoDesc'>{itemData.subtitle}</p>
    </div>
  );
}

export default App;
