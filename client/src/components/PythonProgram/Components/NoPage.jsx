/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const NoPage = () => {
  return (
    <div className="bg-purple">
        <div class="stars">
            <div className="brand-logo">
                <img src="http://salehriaz.com/404Page/img/logo.svg" alt="" width="80px"/>
            </div>
        </div>
        <div class="central-body">
            <h1>This page not available</h1>
            </div>
            <div class="objects">
                <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
                <div class="earth-moon">
                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                    <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
                </div>
                <div class="box_astronaut">
                    <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
                </div>
                <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>

            </div>
            </div>
                
    </div>
  )
}

export default NoPage
