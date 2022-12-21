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
var format_pemalang18_0 = new ol.format.GeoJSON();
var features_pemalang18_0 = format_pemalang18_0.readFeatures(json_pemalang18_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemalang18_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pemalang18_0.addFeatures(features_pemalang18_0);var lyr_pemalang18_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemalang18_0, 
                style: style_pemalang18_0,
    title: 'pemalang18<br />\
    <img src="styles/legend/pemalang18_0_0.png" />  3 - 231 <br />\
    <img src="styles/legend/pemalang18_0_1.png" />  231 - 460 <br />\
    <img src="styles/legend/pemalang18_0_2.png" />  460 - 689 <br />\
    <img src="styles/legend/pemalang18_0_3.png" />  689 - 918 <br />\
    <img src="styles/legend/pemalang18_0_4.png" />  918 - 1147 <br />'
        });

lyr_pemalang18_0.setVisible(true);
var layersList = [baseLayer,lyr_pemalang18_0];
lyr_pemalang18_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'L Tanam': 'L Tanam', 'Produksi': 'Produksi', });
lyr_pemalang18_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'L Tanam': 'TextEdit', 'Produksi': 'TextEdit', });
lyr_pemalang18_0.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'inline label', 'L Tanam': 'inline label', 'Produksi': 'inline label', });
lyr_pemalang18_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});