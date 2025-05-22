'use client';

import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

interface OLMapProps {
  latitude: number;
  longitude: number;
  satelliteCount: number;
}

const OLMap: React.FC<OLMapProps> = ({ latitude, longitude, satelliteCount }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !popupRef.current) return;

    const coords = fromLonLat([longitude, latitude]);

    const marker = new Feature({
      geometry: new Point(coords),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
          scale: 0.05,
        }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({ features: [marker] }),
    });

    const overlay = new Overlay({
      element: popupRef.current,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -25],
    });

    overlay.setPosition(coords);

    const map = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM() }), vectorLayer],
      view: new View({
        center: coords,
        zoom: 13,
      }),
      overlays: [overlay],
    });

    setTimeout(() => {
      map.updateSize();
    }, 100);

    return () => {
      map.setTarget(undefined);
    };
  }, [latitude, longitude]);

  return (
    <div style={{ position: 'relative' }}>
      <div
        ref={mapRef}
        style={{
          width: '500px',
          height: '510px',
          position: 'relative',
          marginLeft: '-15px',
          marginTop: '-15px',
        }}
      />
      <div
        ref={popupRef}
        style={{
          backgroundColor: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          position: 'absolute',
          whiteSpace: 'nowrap',
        }}
      >
        <strong>Latitude:</strong> {latitude.toFixed(5)}<br />
        <strong>Longitude:</strong> {longitude.toFixed(5)}<br />
        <strong>Satellites:</strong> {satelliteCount}
      </div>
    </div>
  );
};

export default OLMap;
