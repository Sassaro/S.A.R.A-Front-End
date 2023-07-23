/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-mixed-spaces-and-tabs */
import { useContext, useEffect } from "react"
import MapContext from "../Utils/MapContext"
import OLVectorLayer from "ol/layer/Vector"
import PropTypes from 'prop-types'

const VectorLayer = ({ source, style, zIndex = 0 }) => {
	const { map } = useContext(MapContext)

	useEffect(() => {
		if (!map) return

		let vectorLayer = new OLVectorLayer({
			source,
			style
		})

		map.addLayer(vectorLayer)
		vectorLayer.setZIndex(zIndex)

		return () => {
			if (map) {
				map.removeLayer(vectorLayer)
			}
		}
	}, [map])

	return null
}

VectorLayer.propTypes = {
    source: PropTypes.any,
    style: PropTypes.any,
    zIndex: PropTypes.number
}

export default VectorLayer