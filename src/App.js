import './App.css';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import PhotoList from './components/PhotoList'



export default function App () {

  const [user, setUser] = useState('Denny Sihol Ronaldo')
  const [photos, setPhotos] = useState([])
  
  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=10&limit=12')
      .then(res => res.json())
      .then(res => {
        setPhotos(res)
      });
  }, [])

  return (
    <div>
      <Navbar></Navbar>
      <br/>
      <h1>Hello {user} !</h1>
      <br/>
      <div className="container">
        <div className="row">
          {
            photos.map(photo => {
              return  <PhotoList photo={photo} key={photo.id}></PhotoList>
            })
          }
        </div>
      </div>
    </div>
    )
}
