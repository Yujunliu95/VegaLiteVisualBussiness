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
      "lookup": "state",
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
      "field": "Desired_Target_Num",
      "as": "TotalCount"
    }],"groupby": ["state"]}
  ],
  "projection": {"type": "equirectangular"},
  "mark": "geoshape",
  "encoding": {
    "shape": {"field": "geo", "type": "geojson"},
    "color": {"field": "TotalCount", "type": "quantitative"},
    "tooltip": [
      {"field": "state", "type": "nominal"},
      {"field": "TotalCount", "type": "quantitative"}
    ]
  }
}