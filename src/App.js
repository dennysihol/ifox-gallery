import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import PhotoList from './components/PhotoList'



export default class App extends Component {

  constructor() {
    super()
    this.state = {
      user : 'Denny Sihol Ronaldo',
      photos: []
    }
  }  

  getDataApi = () => {
    fetch('https://picsum.photos/v2/list?page=10&limit=12')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          photos: res
        })
      });
  }
  
  componentDidMount () {
    this.getDataApi()
  }

  render () {
    const { user, photos } = this.state
    return (
      <div>
        <Navbar></Navbar>
        <br/>
        <h1>Hello { user } !</h1>
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
}
