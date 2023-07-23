/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from 'prop-types'
import { classroomService } from "../Service/ClassroomService"
import { useEffect } from "react"
import "./SVGClassroom.css"


export const SVGClassroom = (props) => {

  function addLineBreaks(text) {
    var lines = text.split(' ')
    var i = 0

    return(

      lines.map( (line) => {

        return (
          <>
          <tspan dx={0} dy={i + "em"} key={line}>
            {line + "\n"}
          </tspan>
          </>)
        
      } )
    )
  }

  const getPathBBox = () => {
    const path = document.getElementById(props.classroom.id)

    const boundingBox = path.getBBox()
    return boundingBox
  }

  const clickFunc = async () =>{
    const content = await classroomService.getClassroomInfo(props.classroom.id)
    props.setCardFunc(content)
    props.showCardFunc()
  }

  const backgroundColor = () => {
    if(props.classroom.habilitada){
      return "#92ff92"
    }else{
      return "#FF8B8B"
    }
  }

  useEffect(() => {

    const boundingBox = getPathBBox()
    const label = document.getElementById(props.classroom.id+"label")
    
    const centerX = boundingBox.x + boundingBox.width / 2
    const centerY = boundingBox.y + boundingBox.height / 2

    label.setAttribute('x', centerX)
    label.setAttribute('y', centerY)
  },[])


    return (
      <g key={props.classroom.id} id={"aula" + props.classroom.id}>
        <title id="title262">{props.classroom.nombre}</title>
        <path
          transform={props.transform}
          id={props.classroom.id}
          d={props.classroom.geometria}
          fill={backgroundColor()}
          stroke="#fff"
          strokeWidth=".13435"
          style={{ paintOrder: "stroke markers fill" }}
          onClick={clickFunc}
        />
        <text onClick={clickFunc} style={{whiteSpace: "pre-line"}} strokeWidth="0px" fill="#000000" stroke="#000000" textAnchor='middle' fontSize={3.5} id={props.classroom.id + "label"}>{addLineBreaks(props.classroom.nombreSVG)}</text>
      </g>
    )

}

SVGClassroom.propTypes = {
    classroom: PropTypes.object,
    setCardFunc: PropTypes.func,
    showCardFunc: PropTypes.func,
    transform: PropTypes.string
}
