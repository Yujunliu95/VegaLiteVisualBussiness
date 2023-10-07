{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "title": "No Subcribed People Over States",
  "data": {
    "url": "https://yujunliu95.github.io/VegaLiteVisualBussiness/data/A2_dataSmall.csv"
  },
  "transform": [
    {
      "lookup": "City1_State",
      "from": {
        "data": {
          "url": "https://raw.githubusercontent.com/MillyZhao233/FIT3179_HW9/458d8bdce8cb2ffc0d89c84f1b7e77ac45148298/states.json",
          "format": {"type": "topojson", "feature": "states"}
        },
        "key": "properties.STATE_NAME"
      },
        "as": "geo"
    }, {
    "joinaggregate": [{
      "op": "sum",
      "field": "Passenger_Trips",
      "as": "TotalCount"
    }],"groupby": ["City1_State"]}
  ],
  "projection": {"type": "equirectangular"},
  "mark": "geoshape",
  "encoding": {
    "shape": {"field": "geo", "type": "geojson"},
    "color": {"field": "TotalCount", "type": "quantitative"},
    "tooltip": [
      {"field": "City1_State", "type": "nominal"},
      {"field": "TotalCount", "type": "quantitative"}
    ]
  }
}