import React from 'react';

class Form extends React.Component{

    render(){
        return(
            <form onSubmit = {this.props.dataWeather}>
                <input className = "in-city" type = "text" name = "city" placeholder = "Write city"/>
                {/* <input type = "reset" value = "Обновити" /> */}
                <button className = "bt-date">Get date</button>
          
            </form>
        );
    }
}

export default Form;
