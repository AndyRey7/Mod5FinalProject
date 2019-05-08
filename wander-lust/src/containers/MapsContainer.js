import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapAutoComplete from '../components/MapAutoComplete';
import MapMarker from '../components/MapMarker';
import PlaceCard from '../components/PlaceCard';
import DistanceSlider from '../components/DistanceSlider';
import '../App.css'

import { Button, Input, Divider, message } from 'antd';

class MapsContainer extends Component {

    state = {
      constraints: [{ name: '', time: 0 }],
      searchResults: [],
      mapsLoaded: false,
      markers: [],
      map: {},
      mapsApi: {},
      locationLatLng: {},
      autoCompleteService: {},
      placesService: {},
      geoCoderService: {},
      directionService: {}
  }


  // Update name for constraint with index === key
  updateConstraintName = ((event, key) => {
    event.preventDefault();
    const prevConstraints = this.state.constraints;
    const constraints = Object.assign([], prevConstraints);
    constraints[key].name = event.target.value;
    this.setState({ constraints });
  });

  // Updates distance (in KM) for constraint with index == key
  updateConstraintTime = ((key, value) => {
    const prevConstraints = this.state.constraints;
    const constraints = Object.assign([], prevConstraints);
    constraints[key].time = value;
    this.setState({ constraints });
  });

  // Adds a Marker to the GoogleMaps component
  addMarker = ((lat, lng, name) => {
    const prevMarkers = this.state.markers;
    const markers = Object.assign([], prevMarkers);

    // If name already exists in marker list just replace lat & lng.
    let newMarker = true;
    for (let i = 0; i < markers.length; i++) {
      if (markers[i].name === name) {
        newMarker = false;
        markers[i].lat = lat;
        markers[i].lng = lng;
        message.success(`Updated "${name}" Marker`);
        break;
      }
    }
    // Name does not exist in marker list. Create new marker
    if (newMarker) {
      markers.push({ lat, lng, name });
      message.success(`Added new "${name}" Marker`);
    }

    this.setState({ markers });
  });

  // Runs once when the Google Maps library is ready
  // Initializes all services that we need
  apiHasLoaded = ((map, mapsApi) => {
    this.setState({
      mapsLoaded: true,
      map,
      mapsApi,
      locationLatLng: new mapsApi.LatLng(this.props.hotel.lat, this.props.hotel.lng),
      autoCompleteService: new mapsApi.places.AutocompleteService(),
      placesService: new mapsApi.places.PlacesService(map),
      geoCoderService: new mapsApi.Geocoder(),
      directionService: new mapsApi.DirectionsService(),
    });
  });

  // With the constraints, find some places
  handleSearch = (() => {
    const { markers, constraints, placesService, directionService, mapsApi } = this.state;
    if (markers.length === 0) {
      message.warn('Add a valid place and address and try again!');
      return;
    }
    const filteredResults = [];
    const marker = markers[0];
    const timeLimit = constraints[0].time;
    const markerLatLng = new mapsApi.LatLng(marker.lat, marker.lng);

    const placesRequest = {
      location: markerLatLng,
      type: ['restaurant', 'cafe'], // List of types: https://developers.google.com/places/supported_types
      query: 'restaurant',
      rankBy: mapsApi.places.RankBy.DISTANCE, // Cannot be used with radius.
    };

    // First, search for restaurants
    placesService.textSearch(placesRequest, ((response) => {
      // Only look at the nearest top 6.
      const responseLimit = Math.min(6, response.length);
      for (let i = 0; i < responseLimit; i++) {
        const hotelPlace = response[i];
        const { rating, name } = hotelPlace;
        const address = hotelPlace.formatted_address; // e.g 1633 Broadway Rd..,
        const priceLevel = hotelPlace.price_level; // 1, 2, 3...
        let photoUrl = '';
        let openNow = false;
        if (hotelPlace.opening_hours) {
          openNow = hotelPlace.opening_hours.open_now; // e.g true/false
        }
        if (hotelPlace.photos && hotelPlace.photos.length > 0) {
          photoUrl = hotelPlace.photos[0].getUrl();
        }

        // Second, For each hotelPlace, check if it is within acceptable travelling distance
        const directionRequest = {
          origin: markerLatLng,
          destination: address, // Address of hotel
          travelMode: 'WALKING',
        }
        directionService.route(directionRequest, ((result, status) => {
          if (status !== 'OK') { return }
          const travellingRoute = result.routes[0].legs[0]; // { duration: { text: 1mins, value: 600 } }
          const travellingTimeInMinutes = travellingRoute.duration.value / 60;
          if (travellingTimeInMinutes < timeLimit) {
            const distanceText = travellingRoute.distance.text; // 6.4km
            const timeText = travellingRoute.duration.text; // 11 mins
            filteredResults.push({
              name,
              rating,
              address,
              openNow,
              priceLevel,
              photoUrl,
              distanceText,
              timeText,
            });
          }
          // Finally, Add results to state
          this.setState({ searchResults: filteredResults });
        }));
      }
    }));
  });

  render() {

    const { constraints, mapsLoaded, locationLatLng, markers, searchResults } = this.state;
    const { autoCompleteService, geoCoderService } = this.state; // Google Maps Services
    return (
      <div className="w-100 d-flex py-4 flex-wrap justify-content-center">
        <h1 className="globalFont">Find Some Restaurants Around {this.props.hotel.name}</h1>
        <h2>Address of hotel for reference({this.props.hotel.address})</h2>
        {/* Constraints section */}
        <section className="col-4">
          {mapsLoaded ?
            <div>
              {constraints.map((constraint, key) => {
                const { name, time } = constraint;
                return (
                  <div key={key} className="mb-4">
                    <div className="d-flex mb-2">
                      <Input className="col-4 mr-2" placeholder="Food"  onChange={(event) => this.updateConstraintName(event, key)} />
                      <MapAutoComplete
                        autoCompleteService={autoCompleteService}
                        geoCoderService={geoCoderService}
                        locationLatLng={locationLatLng}
                        markerName={name}
                        addMarker={this.addMarker}
                      />
                    </div>
                    <DistanceSlider
                      iconType="car"
                      value={time}
                      onChange={(value) => this.updateConstraintTime(key, value)}
                      text="Minutes away by car"
                    />
                    <Divider />
                  </div>
                );
              })}
            </div>
            : null
          }
        </section>

        {/* Maps Section */}
        <section className="col-8 h-lg">

          <GoogleMapReact
            bootstrapURLKeys={{

              key: /*'GoogleMapsAPI Key Goes Here' */'AIzaSyACICTQnHpC3uoP3Ah1GdW5MW9LntQt-Ps',
              libraries: ['places', 'directions']
            }}
            defaultZoom={11}
            defaultCenter={{ lat: parseFloat(this.props.hotel.lat), lng: parseFloat(this.props.hotel.lng) }}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)} // "maps" is the mapApi.
          >
            {/* Pin markers on the Map*/}
            {markers.map((marker, key) => {
              const { name, lat, lng } = marker;
              return (
                <MapMarker key={key} name={name} lat={lat} lng={lng} />
              );
            })}
          </GoogleMapReact>
        </section>

        {/* Search Button */}
        <Button className="mt-4 fw-md" type="primary" size="large" onClick={this.handleSearch}>Search!</Button>

        {/* Results section */}
        {searchResults.length > 0 ?
          <>
            <Divider />
            <section className="col-12">
              <div className="d-flex flex-column justify-content-center">
                <h1 className="mb-4 fw-md">Here Are Some Restaurants Around The Area!</h1>
                <div className="d-flex flex-wrap">
                  {searchResults.map((result, key) => (
                    <PlaceCard info={result} key={key} />
                  ))}
                </div>
              </div>
            </section>
          </>
          : null}
      </div>
    )
  }
}

export default MapsContainer;
