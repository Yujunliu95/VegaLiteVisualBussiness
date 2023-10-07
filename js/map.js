{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 500,
    "height": 300,
    "title": "Customers Distribution Based on State",
    "data": {
      "url": "https://yujunliu95.github.io/VegaLiteVisualization2/data/A2_data.csv"
    },
    "transform": [
      {
        "lookup": "state",
        "from": {
          "data": {
            "url": "https://yujunliu95.github.io/VegaLiteVisualization2/js/states.json",
            "format": {"type": "topojson", "feature": "states"}
          },
          "key": "properties.STATE_NAME"
        },
        "as": "geo"
      },
      {
        "filter": "datum.Desired_Target === 'Not Subscribed'"
      },
      {
        "aggregate": [{"op": "count", "as": "TotalNotSubscribed"}],
        "groupby": ["state"]
      }
    ],
    "projection": {"type": "equirectangular"},
    "mark": "geoshape",
    "encoding": {
      "shape": {"field": "geo", "type": "geojson"},
      "color": {"field": "TotalNotSubscribed", "type": "quantitative"},
      "tooltip": [
        {"field": "state", "type": "nominal"},
        {"field": "TotalNotSubscribed", "type": "quantitative"}
      ]
    }
  }
  