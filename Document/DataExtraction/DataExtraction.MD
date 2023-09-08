## Station

Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level: Station
Selected: Show Selected Label | Show total selected Items

Backend Endpoint: '/api/station'

``````ts
const STATION = [
    
    {
    label: '',
    value: '',
},
   

]
``````ts

## Parameters

Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level: Parameters
Selected: Show Selected Label | Show total selected Items

Backend Endpoint: '/api/parameters'

``````ts
const PARAMETERS = [
    
{
                  label: 'Max Temperature',
                  value: '276',
                },
                {
                  label: 'Min Temperature',
                  value: '277',
                },
                {
                  label: 'Precipitation',
                  value: '274',
                },
                {
                  label: 'Hourly Precipitation',
                  value: '320',
                },
   

]
``````ts

## Aggregations

Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level: Aggregations
Selected: Show Selected Label | Show total selected Items

``````ts
const AGGREGATION = [
 {
                  label: 'Annually',
                  value: 'annually',
                },
                {
                  label: 'Monthly',
                  value: 'monthly',
                },
                {
                  label: 'Daily',
                  value: 'daily',
                },
                {
                  label: 'Hourly',
                  value: 'hourly',
                },

]
``````ts

## Function

Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level: Function
Selected: Show Selected Label | Show total selected Items

``````ts
const FUNCTION = [
    
                {
                  label: 'Null',
                  value: 'null',
                },
                {
                  label: 'Average',
                  value: 'average',
                },
                {
                  label: 'Max',
                  value: 'max',
                },
                {
                  label: 'Min',
                  value: 'min',
                },
                {
                  label: 'Sum',
                  value: 'sum',
                },
   

]
``````ts

## Time

Input Type: Single Select | Radion Button
Exist Within Ant Design: Yes
Default Level: Time
``````ts
const TIME = [
    
    {
    label: 'Time Range',
    value: 'Time Interval',
},
]
``````ts

## Aggregations Type

Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level: Aggregations Type
Selected: Show Selected Label | Show total selected Items

``````ts
const AGGREGATION_TYPE = [
    
                {
                  label: 'left closed right open',
                  value: 'left closed right open',
                },
                {
                  label: 'left open right closed',
                  value: 'left open right closed',
                },
                {
                  label: 'left closed right closed',
                  value: 'left closed right closed',
                },
                {
                  label: 'left open right open',
                  value: 'left open right open',
                },

]
``````ts

## From Month 

Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level: From Month
Selected: Show Selected Label | Show total selected Items

``````ts
const  FROM_MONTH = [
    
    {
    label: 'January',
    value: 'January',
},
   
{
    label: 'February',
    value: 'February',
}
 {
    label: 'March',
    value: 'March',
}
 {
    label: 'April',
    value: 'April',
}
 {
    label: 'May',
    value: 'May',
}
 {
    label: 'June',
    value: 'June',
}
 {
    label: 'July',
    value: 'July',
}
 {
    label: 'August',
    value: 'August',
}
 {
    label: 'September',
    value: 'September',
}
 {
    label: 'October',
    value: 'October',
}
 {
    label: 'November',
    value: 'November',
}
 {
    label: 'December',
    value: 'December',
}
]


## To Month 

Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level: To Month
Selected: Show Selected Label | Show total selected Items

``````ts
const  TO_MONTH = [
    
    {
    label: 'January',
    value: 'January',
},
   
{
    label: 'February',
    value: 'February',
}
 {
    label: 'March',
    value: 'March',
}
 {
    label: 'April',
    value: 'April',
}
 {
    label: 'May',
    value: 'May',
}
 {
    label: 'June',
    value: 'June',
}
 {
    label: 'July',
    value: 'July',
}
 {
    label: 'August',
    value: 'August',
}
 {
    label: 'September',
    value: 'September',
}
 {
    label: 'October',
    value: 'October',
}
 {
    label: 'November',
    value: 'November',
}
 {
    label: 'December',
    value: 'December',
}
]

## From Day

Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level: From Day
Selected: Show Selected Label | Show total selected Items

``````ts
const FROM_DAY = [
    
    {
    label: '1',
    value: '1',
},
    {
    label: '2',
    value: '2',
},
    {
    label: '3',
    value: '3',
},
    {
    label: '4',
    value: '4',
},
    {
    label: '5',
    value: '5',
},
    {
    label: '6',
    value: '6',
},
    {
    label: '7',
    value: '7',
},
    {
    label: '8',
    value: '8',
},
    {
    label: '9',
    value: '9',
},
    {
    label: '10',
    value: '10',
},
    {
    label: '11',
    value: '11',
},
    {
    label: '12',
    value: '12',
},
    {
    label: '13',
    value: '13',
},
    {
    label: '14',
    value: '14',
},
    {
    label: '15',
    value: '15',
},
    {
    label: '16',
    value: '16',
},
    {
    label: '17',
    value: '17',
},
    {
    label: '18',
    value: '18',
},
    {
    label: '19',
    value: '19',
},
    {
    label: '20',
    value: '20',
},
    {
    label: '21',
    value: '21',
},
    {
    label: '22',
    value: '22',
},
    {
    label: '23',
    value: '23',
},
    {
    label: '24',
    value: '24',
},

    {
    label: '25',
    value: '25',
},
    {
    label: '26',
    value: '26',
},

    {
    label: '27',
    value: '27',
},
    {
    label: '28',
    value: '28',
},
    {
    label: '29',
    value: '29',
},
    {
    label: '30',
    value: '30',
},
]
``````ts

## tO Day

Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level: To Day
Selected: Show Selected Label | Show total selected Items

``````ts
const TO_DAY = [
    
    {
    label: '1',
    value: '1',
},
    {
    label: '2',
    value: '2',
},
    {
    label: '3',
    value: '3',
},
    {
    label: '4',
    value: '4',
},
    {
    label: '5',
    value: '5',
},
    {
    label: '6',
    value: '6',
},
    {
    label: '7',
    value: '7',
},
    {
    label: '8',
    value: '8',
},
    {
    label: '9',
    value: '9',
},
    {
    label: '10',
    value: '10',
},
    {
    label: '11',
    value: '11',
},
    {
    label: '12',
    value: '12',
},
    {
    label: '13',
    value: '13',
},
    {
    label: '14',
    value: '14',
},
    {
    label: '15',
    value: '15',
},
    {
    label: '16',
    value: '16',
},
    {
    label: '17',
    value: '17',
},
    {
    label: '18',
    value: '18',
},
    {
    label: '19',
    value: '19',
},
    {
    label: '20',
    value: '20',
},
    {
    label: '21',
    value: '21',
},
    {
    label: '22',
    value: '22',
},
    {
    label: '23',
    value: '23',
},
    {
    label: '24',
    value: '24',
},

    {
    label: '25',
    value: '25',
},
    {
    label: '26',
    value: '26',
},

    {
    label: '27',
    value: '27',
},
    {
    label: '28',
    value: '28',
},
    {
    label: '29',
    value: '29',
},
    {
    label: '30',
    value: '30',
},
]
``````ts