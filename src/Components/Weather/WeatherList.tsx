import React from "react";
import { any } from "prop-types";
import DateAndTime from "../DateAndTime/DateAndTime";
import Clock from 'react-digital-clock';

const WeatherList = props => (
	<div className="weatherDetails">
		<div className="weather-report">
			<main className="weatherinfo clearfix">
				{
					props.city && props.country && <p className="weatherkey clearfix">
						<span className="weathervalue city"> {props.city}, {props.country}
						</span>
					</p>
				}
				{
					props.temperature && <p className="weatherkey clearfix">
						<span className="weathervalue"> <i className="fas fa-thermometer-quarter fa-3x">: {props.temperature}</i>	</span>
					</p>
				}
				{
					props.humidity && <p className="weatherkey clearfix">
						<span className="weathervalue"><i className="fas fa-tint fa-3x">: {props.humidity} </i></span>
					</p>
				}
				{
					props.description && <p className="weatherkey clearfix">
						<span className="weathervalue"><i className="fas fa-cloud fa-3x">: {props.description} </i></span>
					</p>
				}
				{
					props.error && <p className="weathererror">{props.error}</p>
				}
			</main>
			<DateAndTime />
		</div>
	</div>

);

export default WeatherList;