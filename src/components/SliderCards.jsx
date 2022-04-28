import React from 'react'

import "./css/SliderCards.css"

const SliderCards = () => {
  return (
    <div className='slcards-container'>
          <div className='sl-card'>
                  <div className='img-card'/>                  
                  <div className='name-card'>
                        <p>The Witcher 3: Wild Hunt</p>
                  </div>                
          </div>
          
          <div className='sl-card'>
                  <div className='img-card'/>
                  <div className='name-card'>
                        <p>God of War</p>
                  </div>                
          </div>
          <div className='sl-card'>
                  <div className='img-card'/>
                  <div className='name-card'>
                        <p>Red Dead Redemption II</p>
                  </div>                
          </div>
          <div className='sl-card'>
                  <div className='img-card'/>
                  <div className='name-card'>
                        <p>Elden Ring</p>
                  </div>                
          </div>
          <div className='sl-card'>
                  <div className='img-card'/>
                  <div className='name-card'>
                        <p>Grand Theft Auto V</p>
                  </div>                
          </div>

    </div>
  )
}

export default SliderCards