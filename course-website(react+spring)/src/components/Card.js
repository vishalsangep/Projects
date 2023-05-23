import React from 'react'

import './Card.css'
export default function Card(props) {
  return (
    <div>
        <div class="card-h"  style={{
          backgroundImage: `url(${props.imgM})`
        }}>
            <div className="bkimg">
  <div class="card-front">
    <p class="title">{props.title}</p>
    <p class="subtitle">{props.subtitle}</p>
  </div>
  <div class="card-back">
    <p>{props.content}</p>
  </div>
  </div>
</div>
      
    </div>
  )
}
