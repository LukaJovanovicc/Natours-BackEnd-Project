export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaGVqeiIsImEiOiJjbGR5bGdmMXMwanp2M29wNnd3NTJqeHpjIn0.KdfPPKzWRlB3Oj7qmNAbDQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/hejz/cldylvjt7001801nx081dty0m',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
