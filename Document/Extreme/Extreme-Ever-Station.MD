#Filters

******** Ever recorded extreme **********

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


### REGIONS
Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level: Region
Backend Endpoint: '/api/region/province'

 const REGION = [
    {
        label: 'Nepal',
        value: 'Nepal'
    },
        {
        label: 'Province',
        value: 'api'
    },
 ]

Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level: Parameters


 const PARAMETERS = [
              {
                label: 'Precipitation',
                value: 'precipitation',
              },
              {
                label: 'Temperature',
                value: 'temperature',
              },
 ]


Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level:  Variables

 const VARIABLES = [
                   {
                  label: 'Maximum temperature',
                  value: 'maximum_temperature',
                },
                {
                  label: 'Minimum temperature',
                  value: 'minimum_temperature',
                },
 ]
########### Number of Extreme ###########
 Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level:  No. of extreme

 const NO_OF_EXTREME = [
    {
        label: '2',
        value: '2'
    },

 ]