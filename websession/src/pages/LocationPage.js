import {useState} from "react";
import {AdvancedMarker, APIProvider, Map} from "@vis.gl/react-google-maps";

export default function LocationPage() {
    const [city, setCity] = useState(0)

    const cities = [
        {
            name: 'Астана',
            position: {
                lat: 51.12845736840732,
                lng: 71.4305691417364
            }
        },
        {
            name: 'Алматы',
            position: {
                lat: 43.23534428275968,
                lng: 76.90972869907748
            }
        }
    ]

    return (
        <div className="containermap">
            <div className="sidebar">
                {cities.map((item, i) =>
                    <div key={i} className="city">
                        <button onClick={() => setCity(i)} className="btn btn-outline-secondary">{item.name}</button>
                    </div>
                )}
            </div>
            <div className="content">
                <APIProvider apiKey={process.env.REACT_APP_API_KEY}>
                    <div id="map-container">
                        <Map zoom={18} center={cities[city].position} mapId='9fab5317ca80dbfd'>
                            <AdvancedMarker position={cities[city].position}>
                            </AdvancedMarker>
                        </Map>
                    </div>
                </APIProvider>
            </div>
        </div>
    )
}