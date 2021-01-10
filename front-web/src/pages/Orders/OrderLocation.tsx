import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import api from '../../services/api';
import { OrderLocationData } from './interfaces';

const initialPosition = {
    lat: -7.139762,
    lng: -34.844131,
};

interface Place {
    label?: string;
    value?: string;
    position: {
        lat: number;
        lng: number;
    };
};

interface Props {
    onChangeLocation: (location: OrderLocationData) => void;
}

export default function OrderLocation({ onChangeLocation }: Props) {
    const [address, setAddress] = useState<Place>({
        position: initialPosition,
    });

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await api.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`);

        const places = response.data.features.map((item: any) => {
            return ({
                label: item.place_name,
                value: item.place_name,
                position: {
                    lat: item.center[1],
                    lng: item.center[0]
                },
            });
        });

        callback(places);
    };

    const handleChangeSelect = (place: Place) => {
        setAddress(place);
        
        onChangeLocation({
            latitude: place.position.lat,
            longitude: place.position.lng,
            address: place.label!
        });
    };

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">Selecione onde o pedido deve ser entregue:</h3>
                <div className="filter-container">
                    <AsyncSelect 
                        placeholder="Digite um endereço para entregar o pedido"
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)}
                    />
                </div>
                <MapContainer center={address.position} zoom={16} scrollWheelZoom key={address.position.lat}>
                    <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`}
                    />
                    <Marker position={address.position}>
                        <Popup>
                           {address.label}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}
