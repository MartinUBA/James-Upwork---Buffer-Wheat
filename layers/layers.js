ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([59.030424, 8.792592, 97.521971, 34.914151]);
var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BaseMapGrey_1 = new ol.layer.Tile({
            'title': 'Base Map (Grey)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Wheatbelowthreshold1075kTons_3 = new ol.format.GeoJSON();
var features_Wheatbelowthreshold1075kTons_3 = format_Wheatbelowthreshold1075kTons_3.readFeatures(json_Wheatbelowthreshold1075kTons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wheatbelowthreshold1075kTons_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wheatbelowthreshold1075kTons_3.addFeatures(features_Wheatbelowthreshold1075kTons_3);
var lyr_Wheatbelowthreshold1075kTons_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wheatbelowthreshold1075kTons_3, 
                style: style_Wheatbelowthreshold1075kTons_3,
                popuplayertitle: "Wheat below threshold: 10 - 75 kTons",
                interactive: false,
                    title: '<img src="styles/legend/Wheatbelowthreshold1075kTons_3.png" /> Wheat below threshold: 10 - 75 kTons'
                });
var format_Wheat_4 = new ol.format.GeoJSON();
var features_Wheat_4 = format_Wheat_4.readFeatures(json_Wheat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wheat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wheat_4.addFeatures(features_Wheat_4);
var lyr_Wheat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wheat_4, 
                style: style_Wheat_4,
                popuplayertitle: "Wheat",
                interactive: false,
    title: 'Wheat<br />\
    <img src="styles/legend/Wheat_4_0.png" /> 75000 - 76600<br />\
    <img src="styles/legend/Wheat_4_1.png" /> 76600 - 78800<br />\
    <img src="styles/legend/Wheat_4_2.png" /> 78800 - 80700<br />\
    <img src="styles/legend/Wheat_4_3.png" /> 80700 - 83500<br />\
    <img src="styles/legend/Wheat_4_4.png" /> 83500 - 86300<br />\
    <img src="styles/legend/Wheat_4_5.png" /> 86300 - 89130<br />\
    <img src="styles/legend/Wheat_4_6.png" /> 89130 - 94900<br />'
        });
var format_IndiaBoundary_5 = new ol.format.GeoJSON();
var features_IndiaBoundary_5 = format_IndiaBoundary_5.readFeatures(json_IndiaBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndiaBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndiaBoundary_5.addFeatures(features_IndiaBoundary_5);
var lyr_IndiaBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndiaBoundary_5, 
                style: style_IndiaBoundary_5,
                popuplayertitle: "India Boundary",
                interactive: false,
                    title: '<img src="styles/legend/IndiaBoundary_5.png" /> India Boundary'
                });
var format_Wheat50KMArea_6 = new ol.format.GeoJSON();
var features_Wheat50KMArea_6 = format_Wheat50KMArea_6.readFeatures(json_Wheat50KMArea_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wheat50KMArea_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wheat50KMArea_6.addFeatures(features_Wheat50KMArea_6);
var lyr_Wheat50KMArea_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wheat50KMArea_6, 
                style: style_Wheat50KMArea_6,
                popuplayertitle: "Wheat 50KM Area ",
                interactive: true,
                    title: '<img src="styles/legend/Wheat50KMArea_6.png" /> Wheat 50KM Area '
                });
var format_PaperMills_7 = new ol.format.GeoJSON();
var features_PaperMills_7 = format_PaperMills_7.readFeatures(json_PaperMills_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMills_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMills_7.addFeatures(features_PaperMills_7);
var lyr_PaperMills_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMills_7, 
                style: style_PaperMills_7,
                popuplayertitle: "Paper Mills",
                interactive: true,
                    title: '<img src="styles/legend/PaperMills_7.png" /> Paper Mills'
                });
var format_PaperMillsTOP20Wheat50km_8 = new ol.format.GeoJSON();
var features_PaperMillsTOP20Wheat50km_8 = format_PaperMillsTOP20Wheat50km_8.readFeatures(json_PaperMillsTOP20Wheat50km_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMillsTOP20Wheat50km_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMillsTOP20Wheat50km_8.addFeatures(features_PaperMillsTOP20Wheat50km_8);
var lyr_PaperMillsTOP20Wheat50km_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMillsTOP20Wheat50km_8, 
                style: style_PaperMillsTOP20Wheat50km_8,
                popuplayertitle: "Paper Mills TOP 20 Wheat 50 km",
                interactive: true,
    title: 'Paper Mills TOP 20 Wheat 50 km<br />\
    <img src="styles/legend/PaperMillsTOP20Wheat50km_8_0.png" /> 4588201 - 7138801 Tons<br />\
    <img src="styles/legend/PaperMillsTOP20Wheat50km_8_1.png" /> 7138801 - 9116244 Tons<br />\
    <img src="styles/legend/PaperMillsTOP20Wheat50km_8_2.png" /> 9116244 - 9510743 Tons<br />\
    <img src="styles/legend/PaperMillsTOP20Wheat50km_8_3.png" /> 9510743 - 10059861 Tons<br />\
    <img src="styles/legend/PaperMillsTOP20Wheat50km_8_4.png" /> 10059861 - 10175028 Tons<br />'
        });
var group_PaperMills = new ol.layer.Group({
                                layers: [lyr_PaperMills_7,lyr_PaperMillsTOP20Wheat50km_8,],
                                fold: "open",
                                title: "Paper Mills"});
var group_Feedstock = new ol.layer.Group({
                                layers: [lyr_Wheatbelowthreshold1075kTons_3,lyr_Wheat_4,],
                                fold: "open",
                                title: "Feedstock"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_ESRIPhysical_0,lyr_BaseMapGrey_1,lyr_GoogleSatellite_2,],
                                fold: "open",
                                title: "Base map "});

lyr_ESRIPhysical_0.setVisible(true);lyr_BaseMapGrey_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Wheatbelowthreshold1075kTons_3.setVisible(true);lyr_Wheat_4.setVisible(true);lyr_IndiaBoundary_5.setVisible(true);lyr_Wheat50KMArea_6.setVisible(false);lyr_PaperMills_7.setVisible(true);lyr_PaperMillsTOP20Wheat50km_8.setVisible(true);
var layersList = [group_Basemap,group_Feedstock,lyr_IndiaBoundary_5,lyr_Wheat50KMArea_6,group_PaperMills];
lyr_Wheatbelowthreshold1075kTons_3.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Wheat_4.set('fieldAliases', {'VALUE Wheat (kTons)': 'VALUE Wheat (kTons)', });
lyr_IndiaBoundary_5.set('fieldAliases', {'fid_1': 'fid_1', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', });
lyr_Wheat50KMArea_6.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'VALUE': 'VALUE', });
lyr_PaperMills_7.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'Wheat': 'Wheat', 'VALUE Whea': 'VALUE Whea', });
lyr_PaperMillsTOP20Wheat50km_8.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'N° TOP 20': 'N° TOP 20', 'Wheat 50KM': 'Wheat 50KM', });
lyr_Wheatbelowthreshold1075kTons_3.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Wheat_4.set('fieldImages', {'VALUE Wheat (kTons)': 'TextEdit', });
lyr_IndiaBoundary_5.set('fieldImages', {'fid_1': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_Wheat50KMArea_6.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'VALUE': 'TextEdit', });
lyr_PaperMills_7.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'Wheat': '', 'VALUE Whea': 'TextEdit', });
lyr_PaperMillsTOP20Wheat50km_8.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'N° TOP 20': 'TextEdit', 'Wheat 50KM': 'TextEdit', });
lyr_Wheatbelowthreshold1075kTons_3.set('fieldLabels', {'VALUE': 'inline label - always visible', });
lyr_Wheat_4.set('fieldLabels', {'VALUE Wheat (kTons)': 'inline label - always visible', });
lyr_IndiaBoundary_5.set('fieldLabels', {'fid_1': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', });
lyr_Wheat50KMArea_6.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'no label', 'My Site _1': 'no label', 'VALUE': 'inline label - always visible', });
lyr_PaperMills_7.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'Wheat': 'inline label - always visible', 'VALUE Whea': 'hidden field', });
lyr_PaperMillsTOP20Wheat50km_8.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'N° TOP 20': 'inline label - always visible', 'Wheat 50KM': 'inline label - always visible', });
lyr_PaperMillsTOP20Wheat50km_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});