import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./style.css";
export default function Futter() {
  return (
    <div className="yandexMap">
      <YMaps query={{ apikey: "dfa847d6-9e7f-4092-a9ef-2b0131bed41d" }}>
        <Map
          defaultState={{
            center: [55.76, 37.64],
            zoom: 10,
          }}
          width={"100%"}
          height={500}
          options={{ suppressMapOpenBlock: true }}
        >
          <Placemark defaultGeometry={[55.751574, 37.573856]} />
        </Map>
      </YMaps>
    </div>
  );
}
