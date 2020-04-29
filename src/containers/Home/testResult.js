import React from "react";

const TestResult = (props) => {
    return (
        <div>
            {props.city &&
                <div>
                    <p>Location: {props.city}, {props.country}</p>
                    <p>Temperature: {props.temp}</p>
                    <p>Sunrise at: {props.sunrise}</p>
                    <p>Sunset at: {props.sunset}</p>
                    <p>Pressure: {props.pressure} mm</p>

                </div>

            }
            <p>{props.error}
            </p>
        </div>
    );
}

export default TestResult;