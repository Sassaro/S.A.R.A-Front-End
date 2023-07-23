/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-mixed-spaces-and-tabs */
import { useContext, useEffect } from "react"
import MapContext from "../Utils/MapContext"
import OLImageLayer from 'ol/layer/Image'
import ImageStatic from 'ol/source/ImageStatic'
import PropTypes from 'prop-types'

const ImageLayer = ({ url, style, zIndex = 0 }) => {
	const { map } = useContext(MapContext)

	useEffect(() => {
		if (!map) return

		let imageLayer = new OLImageLayer({
			source:new ImageStatic({
                imageExtent: [0, 0, 1000, 1000],
                url: url
            })
		})

		map.addLayer(imageLayer)
		imageLayer.setZIndex(zIndex)

		return () => {
			if (map) {
				map.removeLayer(imageLayer)
			}
		}
	}, [map])

	return null
}

ImageLayer.propTypes = {
    url: PropTypes.any,
    style: PropTypes.any,
    zIndex: PropTypes.number
}

export default ImageLayer