export type CurrentConditions = {
	LocalObservationDateTime: Date;
	EpochTime:                number;
	WeatherText:              string;
	WeatherIcon:              number;
	HasPrecipitation:         boolean;
	PrecipitationType:        null;
	IsDayTime:                boolean;
	Temperature:              TemperatureSystem;
	MobileLink:               string;
	Link:                     string;
}

export type TemperatureSystem = {
	Metric:   SystemValues;
	Imperial: SystemValues;
}

export type SystemValues = {
	Value:    number;
	Unit:     string;
	UnitType: number;
}

export type Forecast = {
	Date:        Date;
	EpochDate:   number;
	Temperature: Temperature;
	Day:         Day;
	Night:       Day;
	Sources:     string[];
	MobileLink:  string;
	Link:        string;
}

export type Day = {
	Icon:             number;
	IconPhrase:       string;
	HasPrecipitation: boolean;
}

export type Temperature = {
	Minimum: Imum;
	Maximum: Imum;
}

export type Imum = {
	Value:    number;
	Unit:     string;
	UnitType: number;
}

