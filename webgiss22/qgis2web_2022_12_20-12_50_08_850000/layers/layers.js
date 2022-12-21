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
var format_pemalang22_0 = new ol.format.GeoJSON();
var features_pemalang22_0 = format_pemalang22_0.readFeatures(json_pemalang22_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemalang22_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pemalang22_0.addFeatures(features_pemalang22_0);var lyr_pemalang22_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemalang22_0, 
                style: style_pemalang22_0,
    title: 'pemalang22<br />\
    <img src="styles/legend/pemalang22_0_0.png" /> Ampelgading<br />\
    <img src="styles/legend/pemalang22_0_1.png" /> Bantarbolang<br />\
    <img src="styles/legend/pemalang22_0_2.png" /> Belik<br />\
    <img src="styles/legend/pemalang22_0_3.png" /> Bodeh<br />\
    <img src="styles/legend/pemalang22_0_4.png" /> Comal<br />\
    <img src="styles/legend/pemalang22_0_5.png" /> Moga<br />\
    <img src="styles/legend/pemalang22_0_6.png" /> Pemalang<br />\
    <img src="styles/legend/pemalang22_0_7.png" /> Petarukan<br />\
    <img src="styles/legend/pemalang22_0_8.png" /> Pulosari<br />\
    <img src="styles/legend/pemalang22_0_9.png" /> Randudongkal<br />\
    <img src="styles/legend/pemalang22_0_10.png" /> Taman<br />\
    <img src="styles/legend/pemalang22_0_11.png" /> Ulujami<br />\
    <img src="styles/legend/pemalang22_0_12.png" /> Warungpring<br />\
    <img src="styles/legend/pemalang22_0_13.png" /> Watukumpul<br />\
    <img src="styles/legend/pemalang22_0_14.png" /> <br />'
        });

lyr_pemalang22_0.setVisible(true);
var layersList = [baseLayer,lyr_pemalang22_0];
lyr_pemalang22_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', });
lyr_pemalang22_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_pemalang22_0.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'inline label', });
lyr_pemalang22_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});