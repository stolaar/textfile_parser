### Text file to array of objects
Following txt format 
```
1.HeadName
-item1
-item2

2.Headname2
-item1
-item2
.
.
.
```
Should be converted to the followign array format
```
[
    {name: "HeadName"
    items: [
        {name: "item1"},
        {name: "item2"}
    ]
    },
    {name: "HeadName2"
    items: [
        {name: "item1"},
        {name: "item2"}
    ]
    },
    .
    .
    .
]
```