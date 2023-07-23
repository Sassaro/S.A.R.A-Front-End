/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from 'prop-types'
import "./controls.css"

const Controls = ({ children }) => {

    return <div className="mapControls">{children}</div>
    
}

Controls.propTypes = {
    children: PropTypes.any
}
export default Controls