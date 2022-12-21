var size = 0;
var placement = 'point';

var style_pemalang19_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Produksi");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("WADMKC") !== null) {
        labelText = String(feature.get("WADMKC"));
    }
    if (value > 2.560000 && value <= 229.328000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(241,238,246,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 229.328000 && value <= 456.096000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(215,181,216,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 456.096000 && value <= 682.864000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(223,101,176,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 682.864000 && value <= 909.632000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(221,28,119,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 909.632000 && value <= 1136.400000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,152,72,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(152,0,67,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    };

    return style;
};
