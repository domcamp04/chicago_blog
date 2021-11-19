import React, { Component } from 'react'
import './Weather.css'
import Sidebar from '../sidebar/Sidebar'



export default class Weather extends Component {
    render() {
        return (
            <>
            <div className='weather'>
            <header>
                <h1 className='weatherHeader'> Weather </h1>
            </header>
            <main>
                <section class='location'>
                    <div class="city">Chicago, IL</div>
                </section>
                <div class="current">
                    <div class="temp">25<span>°f</span></div>
                    <div class="high-low">25°f / 39°f</div>
                    <div class='humidity'>Humidity:</div>
                </div>
            </main>
            </div>
            <Sidebar />
            </>
        )
    }
}

