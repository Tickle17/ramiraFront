import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./style.css";
export default function YandexMap(props) {
  return (
    <div className="yandexMap" ref={props.props.mapRef}>
      <YMaps query={{ apikey: "dfa847d6-9e7f-4092-a9ef-2b0131bed41d" }}>
        <Map
          defaultState={{
            center: [48.700641, 44.510854],
            zoom: 17,
          }}
          width={"100%"}
          height={500}
          options={{ suppressMapOpenBlock: true }}
        >
          <Placemark defaultGeometry={[48.700641, 44.510854]} />
        </Map>
      </YMaps>
    </div>
  );
}
