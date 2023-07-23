/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { useContext, useEffect } from "react"
import MapContext from "../Utils/MapContext"
import OLTileLayer from "ol/layer/Tile"
import PropTypes from 'prop-types'

  const TileLayer = ({ source, zIndex = 0 }) => {
    const { map } = useContext(MapContext) 

    useEffect(() => {
        if (!map) return
        let tileLayer = new OLTileLayer({ source, zIndex,})

        map.addLayer(tileLayer)

        tileLayer.setZIndex(zIndex)


		return () => {
			if (map) {
				map.removeLayer(tileLayer)
			}
		}
    }, [map])

    return null

}

TileLayer.propTypes = {
    source: PropTypes.any,
    zIndex: PropTypes.number
}

export default TileLayer
