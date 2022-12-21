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
    <img src="styles/legend/pemalang19_0_0.png" /> <br />\
    <img src="styles/legend/pemalang19_0_1.png" /> Ampelgading<br />\
    <img src="styles/legend/pemalang19_0_2.png" /> Bantarbolang<br />\
    <img src="styles/legend/pemalang19_0_3.png" /> Belik<br />\
    <img src="styles/legend/pemalang19_0_4.png" /> Bodeh<br />\
    <img src="styles/legend/pemalang19_0_5.png" /> Comal<br />\
    <img src="styles/legend/pemalang19_0_6.png" /> Moga<br />\
    <img src="styles/legend/pemalang19_0_7.png" /> Pemalang<br />\
    <img src="styles/legend/pemalang19_0_8.png" /> Petarukan<br />\
    <img src="styles/legend/pemalang19_0_9.png" /> Pulosari<br />\
    <img src="styles/legend/pemalang19_0_10.png" /> Randudongkal<br />\
    <img src="styles/legend/pemalang19_0_11.png" /> Taman<br />\
    <img src="styles/legend/pemalang19_0_12.png" /> Ulujami<br />\
    <img src="styles/legend/pemalang19_0_13.png" /> Warungpring<br />\
    <img src="styles/legend/pemalang19_0_14.png" /> Watukumpul<br />'
        });

lyr_pemalang19_0.setVisible(true);
var layersList = [baseLayer,lyr_pemalang19_0];
lyr_pemalang19_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'L Tanam': 'L Tanam', 'Produksi': 'Produksi', });
lyr_pemalang19_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'L Tanam': 'TextEdit', 'Produksi': 'TextEdit', });
lyr_pemalang19_0.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'inline label', 'L Tanam': 'inline label', 'Produksi': 'inline label', });
lyr_pemalang19_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});