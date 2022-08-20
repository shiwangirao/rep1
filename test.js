var collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CO')
  .filterBounds(table) 
  .select('CO_column_number_density')
  .filterDate('2019-06-01', '2019-06-11')
  .mean()
  .clip(table)
  
var projection = collection.projection().getInfo();
var band_viz = {
   min: 0.029,
   max: 0.032,
   palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
};

print(collection, band_viz)
Map.addLayer(collection, band_viz)
Map.centerObject(table,10)

Export.image.toDrive({
  image:collection ,
  description: 'CO_Kyiv' ,
  scale: 1000,
  region: table,
  maxPixels: 1e9
})

var collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_HCHO')
  .filterBounds(table) 
  .select('tropospheric_HCHO_column_number_density')
  .filterDate('2019-05-01', '2019-05-06')
  .mean()
  .clip(table)

var band_viz = {
  min: 0.0,
  max: 0.0003,
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
};

print(collection, band_viz)
Map.addLayer(collection, band_viz, 'S5P HCHO');
Map.centerObject(table,10)

Export.image.toDrive({
  image:collection ,
  description: 'HCHO_Kyiv' ,
  scale: 1000,
  region: table,
  maxPixels: 1e9
})

var collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
  .filterBounds(table) 
  .select('tropospheric_NO2_column_number_density')
  .filterDate('2019-05-01', '2019-05-06')
  .mean()
  .clip(table)

var band_viz = {
  min: 0,
  max: 0.00007,
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
};


print(collection, band_viz)
Map.addLayer(collection, band_viz, 'S5P N02');
Map.centerObject(table)

Export.image.toDrive({
  image:collection ,
  description: 'NO2_Kharkiv' ,
  scale: 1000,
  region: table,
  maxPixels: 1e9
})
