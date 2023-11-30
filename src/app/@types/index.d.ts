export type CurrentConditions = {
	LocalObservationDateTime: Date;
	EpochTime:                number;
	WeatherText:              string;
	WeatherIcon:              number;
	HasPrecipitation:         boolean;
	PrecipitationType:        null;
	IsDayTime:                boolean;
	Temperature:              TemperatureSystem;
	Wind:                     Wind;
	Precip1hr:                Precip1hr;
	UVIndex:                  number;
	UVIndexText:              string;
	Visibility:         		  Visibility;
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
	Headline: Headline;
	DailyForecasts: DailyForecast[];
}

export type Headline = {
	EffectiveDate:      Date;
	EffectiveEpochDate: number;
	Severity:           number;
	Text:               string;
	Category:           string;
	EndDate:            Date;
	EndEpochDate:       number;
	MobileLink:         string;
	Link:               string;
}

export type DailyForecast = {
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

export type Wind = {
	Direction: Direction;
	Speed:     Speed;
}

export type Direction = {
	Degrees:   number;
	Localized: string;
	English:   string;
}

export type Speed = {
	Metric:   Imum;
	Imperial: Imum;
}
export type Precip1hr = {
	Metric:  Imum;
	Imperial: Imum;
}

export type Visibility = {
	Metric:   Imum;
	Imperial: Imum;
}