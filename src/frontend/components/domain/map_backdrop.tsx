export function MapBackdrop() {
  return (
    <div className="map-backdrop" aria-hidden="true">
    <img src="/bucovice-map.svg" alt="" className="map-backdrop-image" />
    <div className="map-backdrop-scrim" />
    <div className="map-backdrop-glow" />
    </div>
  );
}
