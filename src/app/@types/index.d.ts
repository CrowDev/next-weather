export type CurrentConditions = {
	LocalObservationDateTime: Date;
	EpochTime:                number;
	WeatherText:              string;
	WeatherIcon:              number;
	HasPrecipitation:         boolean;
	PrecipitationType:        null;
	IsDayTime:                boolean;
	Temperature:              Temperature;
	MobileLink:               string;
	Link:                     string;
}

export type Temperature = {
	Metric:   Imperial;
	Imperial: Imperial;
}

export type Imperial = {
	Value:    number;
	Unit:     string;
	UnitType: number;
}
