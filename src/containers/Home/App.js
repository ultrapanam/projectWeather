import React from "react";
import Info from 'containers/Home/info';
import Form from 'containers/Home/form';
import TestResult from 'containers/Home/testResult';

const API_KEY = "efa31393be6ad986f9752ff943d70c69";


class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;


        if (city) {

            const api_url = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const data = await api_url.json();

            var sunset = data.sys.sunset;
            var date = new Date();
            date.setTime(sunset);
            var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            var sunrise = data.sys.sunrise;
            var date = new Date();
            date.setTime(sunrise);
            var sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunrise: sunrise_date,
                sunset: sunset_date,
                error: undefined

            });
        } else {
            this.setState({

                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "Please, type city name"

            });
        }

    }

    render() {
        return (
            <div className="wrapper"> 
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <TestResult
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    pressure={this.state.pressure}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;