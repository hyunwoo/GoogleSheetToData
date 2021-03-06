# GoogleSheetToData


## Example GoogleSpread Sheet
| Key1     | Key2    | Key3 | ... |
| --------|---------|-------|-----|
| Value1_1  | Value2_1   | Value3_1    | ... |
| Value1_2 | Value2_2 | Value3_2    | ... |
## This module only reads data from the published google spreadsheet.

## Usage
##### You must have publish settings in Google spreadsheets.
##### https://support.google.com/docs/answer/37579?hl=en
##### GoogleSpreadSheet -> File -> Publish to the web.

###+ JSON
```
var sheet = require("google-sheet-to-data")('YOUR_SHEET_ID');
// sheet number start at 1
sheet.json(SHEET_IDX, function (err, rep) {
    console.log(err, rep);
});
```

####result : 

null, 
[{
  Key1: value1_1,
  Key2: Value2_1,
  Key3: Value3_1,
},
{
  Key1: value1_2,
  Key2: Value2_2,
  Key3: Value3_2,
}
...
]




###+ MATRIX
```
var sheet = require("google-sheet-to-data")('YOUR_SHEET_ID');
// sheet number start at 1
sheet.matrix(SHEET_IDX, function (err, rep) {
    console.log(err, rep);
});
```

####result :

null, 
[
  [
    Key1,
    Key2,
    Key3
    ...
  ],
  [
    Value1_1,
    Value2_1,
    Value3_1
    ...
  ],
  [
    Value1_2,
    Value2_2,
    Value3_2
    ...
  ]
  ...
]
