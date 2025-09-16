import WorldMapSVG from './../assets/images/world-map.svg?react';

export function WorldMap() {
  return (
    <section className='world-map'>
      <div className="globe">
        <WorldMapSVG className="world-svg" alt="world map" />
      </div>
      <div class="ring-container">
        <div class="ringring"></div>
        <div class="circle"></div>
      </div>
    </section>
  )
}
