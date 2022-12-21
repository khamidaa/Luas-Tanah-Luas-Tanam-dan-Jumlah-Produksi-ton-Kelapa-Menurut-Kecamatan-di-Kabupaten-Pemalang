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
    <img src="styles/legend/pemalang18_0_0.png" /> <br />'
        });

lyr_pemalang18_0.setVisible(true);
var layersList = [baseLayer,lyr_pemalang18_0];
lyr_pemalang18_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'Luas Tanam': 'Luas Tanam', 'Produksi': 'Produksi', });
lyr_pemalang18_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'Luas Tanam': 'TextEdit', 'Produksi': 'TextEdit', });
lyr_pemalang18_0.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'inline label', 'Luas Tanam': 'inline label', 'Produksi': 'inline label', });
lyr_pemalang18_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});