/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-inner-declarations */
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { DayPilotCalendar, DayPilot } from '@daypilot/daypilot-lite-react'
import "./Calendar.css"
import { useLocation } from 'react-router-dom'
import { ModalEvent } from '../Organisms/ModalEvent'
import { classroomService } from '../Service/ClassroomService'
import {AsignacionDTO} from '../Domain/AsignacionDTO'
import { set } from 'ol/transform'

export const Calendar = (props) => {

  const location = useLocation()
  const [selectedEvent, setSelectedEvent] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const canEdit =() => {
    if(location.state){
      return "Update"
    }else{
      return "Disabled"
    }
  }

  const handleEventClick = (args) => {
    if(location.state){
    const event = args.e.data
    setSelectedEvent(event)
    setIsOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleActionButton = () => {
    //eliminar selectedEvent de props.events
    props.deleteEvent(selectedEvent.id)
    setIsOpen(false)
  }

  return (
    <div>
      <DayPilotCalendar 
        onEventClick = {handleEventClick}
        onEventMove = { props.setEdit }
        onEventResized = {props.setEdit }
        eventMoveHandling = {canEdit()}
        showCurrentTime = {true}
        heightSpec = "BusinessHoursNoScroll"
        businessBeginsHour = {8}
        businessEndsHour = {23}
        timeFormat={"Clock24Hours"}
        events = {props.events}
        locale="es-es"
        startDate = {props.startDate}
        viewType = "WorkWeek"
        headerDateFormat="dddd"/>

        <ModalEvent isOpen={isOpen} onClose={handleCloseModal} handleActionButton={handleActionButton} event={selectedEvent}/>
      
    </div>
  )
}


Calendar.propTypes = {
  events: PropTypes.array,
  startDate: PropTypes.string,
  deleteEvent: PropTypes.func.isRequired,
  modifyEvent: PropTypes.func.isRequired,
  getAsignaciones: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
}