import './App.css';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import PhotoList from './components/PhotoList'
import usePageBottom from './helpers/hooks/usePageBottom';



export default function App (photo) {

  const [user, setUser] = useState('Denny Sihol Ronaldo')
  const [photos, setPhotos] = useState([])
  const isPageBottom = usePageBottom()
  
  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
    .then(res => res.json())
    .then(res => {
      setPhotos(res)
    });
    if (!isPageBottom || !photos) return;
    fetch('https://picsum.photos/v2/list')
    .then(res => res.json())
    .then(res => {
      setPhotos(res)
    });
  }, [isPageBottom])

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
              return  (
                <PhotoList photo={photo} key={photo.id}></PhotoList>
              )
            })
          }
        </div>
      </div>
    </div>
    )
}
