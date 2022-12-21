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
var format_pemalang19_0 = new ol.format.GeoJSON();
var features_pemalang19_0 = format_pemalang19_0.readFeatures(json_pemalang19_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemalang19_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pemalang19_0.addFeatures(features_pemalang19_0);var lyr_pemalang19_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemalang19_0, 
                style: style_pemalang19_0,
    title: 'pemalang19<br />\
    <img src="styles/legend/pemalang19_0_0.png" />  2.6000 - 231.4200 <br />\
    <img src="styles/legend/pemalang19_0_1.png" />  231.4200 - 460.2400 <br />\
    <img src="styles/legend/pemalang19_0_2.png" />  460.2400 - 689.0600 <br />\
    <img src="styles/legend/pemalang19_0_3.png" />  689.0600 - 917.8800 <br />\
    <img src="styles/legend/pemalang19_0_4.png" />  917.8800 - 1146.7000 <br />'
        });

lyr_pemalang19_0.setVisible(true);
var layersList = [baseLayer,lyr_pemalang19_0];
lyr_pemalang19_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'L Tanam': 'L Tanam', 'Produksi': 'Produksi', });
lyr_pemalang19_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'L Tanam': 'TextEdit', 'Produksi': 'TextEdit', });
lyr_pemalang19_0.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'inline label', 'L Tanam': 'inline label', 'Produksi': 'inline label', });
lyr_pemalang19_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});