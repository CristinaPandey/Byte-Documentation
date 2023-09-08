#Filters

******** Ever recorded extreme **********

## Grid 

Input Type: Single Select Field
Exist Within Ant Design: Yes
Default Level: Grid
Selected: Show Selected Label | Show total selected Items

``````ts
const GRID = [
    
              {
                  label: 'Select',
                  value: 'Select',
                },
                {
                  label: 'Select2',
                  value: 'Select2',
                },
]
``````ts

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