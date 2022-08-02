import '../App.css'
import React from 'react'

export default function AboutItem(props) {
    var itemData = props.itemData;
    return (
        <div className='contentDiv itemInfoDiv'>
            <ItemInfo itemData={itemData} />
            <div className='divider'></div>
            <div className="tagList">
                <TagList tags={itemData.tags} />
            </div>
            <div className='divider'></div>
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