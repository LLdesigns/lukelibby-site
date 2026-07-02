import { AdventureSidebar } from './AdventureSidebar'
import { MapControls, UserProfileChip } from './MapChrome'
import { MapSurface } from './MapSurface'
import { SearchToolbar } from './SearchToolbar'

export function MapWorkspaceLayout() {  return (
    <div className="ovr-map-layout ovr-map-layout--workspace">
      <MapSurface />
      <div className="ovr-map-layout__workspace">
        <AdventureSidebar />
        <div className="ovr-map-layout__map-area">
          <SearchToolbar />
          <UserProfileChip />
          <MapControls />
        </div>
      </div>
    </div>
  )
}
