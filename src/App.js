import './App.css';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import PhotoList from './components/PhotoList'
import usePageBottom from './helpers/hooks/usePageBottom'

export default function App () {

  const [user, setUser] = useState('Denny Sihol Ronaldo')
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const isPageBottom = usePageBottom();
  
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}`)
    .then(res => res.json())
    .then(json => setPhotos([...photos, ...json]));
  }, [page])

  const ScrollToEnd = () => {
    setPage(page+1)
  }

  window.onscroll = function () {
    if(isPageBottom){
      console.log('sampe bawah');
      ScrollToEnd()
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <br/>
      <h1>Hello {user} !</h1>
      <br/>
      <div className="container">
        <div className="row">
          {
            photos.length > 0 && photos.map((photo) => {
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
