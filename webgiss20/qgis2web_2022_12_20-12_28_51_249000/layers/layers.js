var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_pemalang20_0 = new ol.format.GeoJSON();
var features_pemalang20_0 = format_pemalang20_0.readFeatures(json_pemalang20_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemalang20_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pemalang20_0.addFeatures(features_pemalang20_0);var lyr_pemalang20_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemalang20_0, 
                style: style_pemalang20_0,
    title: 'pemalang20<br />\
    <img src="styles/legend/pemalang20_0_0.png" />  2 - 228 <br />\
    <img src="styles/legend/pemalang20_0_1.png" />  228 - 453 <br />\
    <img src="styles/legend/pemalang20_0_2.png" />  453 - 678 <br />\
    <img src="styles/legend/pemalang20_0_3.png" />  678 - 903 <br />\
    <img src="styles/legend/pemalang20_0_4.png" />  903 - 1129 <br />'
        });

lyr_pemalang20_0.setVisible(true);
var layersList = [baseLayer,lyr_pemalang20_0];
lyr_pemalang20_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'L Tanam': 'L Tanam', 'Produksi': 'Produksi', });
lyr_pemalang20_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'L Tanam': 'TextEdit', 'Produksi': 'TextEdit', });
lyr_pemalang20_0.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'inline label', 'L Tanam': 'inline label', 'Produksi': 'inline label', });
lyr_pemalang20_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});