import React from 'react';
import genLib from './generalLibrary';
import './SeriesList.css'
import TiTime from 'react-icons/lib/ti/time';
import MdAccessTime from 'react-icons/lib/md/access-time';

function SeriesList(props) {
  let timeIcon = {
    marginBottom: '1px'
  }
  return (
    <div className='slist-category'>
      <h4 className='slist-cat-title'>{props.title}</h4>
      {props.list.map((e, index) => (
      <div className='sitem' key={index} onClick={props.handler} data-title={e.title}>
        <img className='sitem-img' src={e.vol[0]} alt={e.title} />
        {/*<img className='sitem-img' src='http://img.bato.to/forums/uploads/d56e05bdcb26e058cd16d06b64fa3cae.jpg' alt={e.title} />*/}
        <div className='sitem-text'>
          <div className='sitem-status'>{e.completed === undefined ? 'Ongoing' : (e.completed ? 'Complete' : 'Dropped')}</div>
          <div className='sitem-date'><MdAccessTime style={timeIcon} /> {genLib.howLongAgo(e.updated)}</div>          
          <div className='sitem-title'>{e.title}</div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default SeriesList;