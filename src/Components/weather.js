import React, { Component } from 'react';

export default class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.city &&
                <div>
                    <p>Місто - країна: {this.props.city}, {this.props.country}</p>
                    <p>Температура повітря: {this.props.temp}</p>
                    <p>Схід сонця: {this.props.sunset}</p>
                    <p>Швидкість вітру: {this.props.speed} м/с</p>
                
                 </div>
                }
                <p className = "date-form">{this.props.error}</p>
            </div>
        )
    }
}
