/* eslint-disable consistent-return */
export const validateVarious = (args) =>{
    return args.every((it) => {return it} )
}

export function getErrorMessage(error) {
    return error.response?.data ? error.response.data.message : error.message
}


export function convertTimeFormat(timestart) {
    var hrs = Number(timestart.match(/^(\d+)/)[1])
    var mnts = Number(timestart.match(/:(\d+)/)[1])
    var format = timestart.match(/\s(.*)$/)[1]
        if (format == "PM" && hrs < 12) hrs = hrs + 12
        if (format == "AM" && hrs == 12) hrs = hrs - 12
            var hours = hrs.toString()
            var minutes = mnts.toString()
                if (hrs < 10) hours = "0" + hours
                if (mnts < 10) minutes = "0" + minutes
                var timeend = hours + ":" + minutes + ":00"
                
                return timeend
                
}

export function epsg3857toEpsg4326(pos) {
    let x = pos[0]
    let y = pos[1]
    x = (x * 180) / 20037508.34
    y = (y * 180) / 20037508.34
    y = (Math.atan(Math.pow(Math.E, y * (Math.PI / 180))) * 360) / Math.PI - 90
    return [x, y]
  }

  export function convertFloor(piso) {

    switch(piso){

        case -1:
            return "Sub Suelo"
        case 0: 
            return "Planta Baja"
        case 1: 
            return "Primer Piso"
        
    }
}

export const createTimeFromString = (time) =>{
    return new Date("0000-01-01 " + time + ":00")
}

//Estas funciones son solo para el manejo de las horas del dia, no tienen en cuenta el dia de la fecha

const MILISEGUNDOS_A_MINUTOS = 60000

export let FuncionesDeTiempo = {tiempoEntre,esAntes,esDespues,getHora,getCurrentYear}

function tiempoEntre(fecha1,fecha2){

    return (getHora(fecha2).getTime() - getHora(fecha1).getTime())/MILISEGUNDOS_A_MINUTOS
}

function esAntes(fechainicial,fechaComparacion){

    return (getHora(fechaComparacion).getTime() - getHora(fechainicial).getTime() > 0)

}

function esDespues(fechainicial,fechaComparacion){

    return (getHora(fechaComparacion).getTime() - getHora(fechainicial).getTime() < 0)

}

function getHora(fecha){

    fecha.setFullYear(0)
    fecha.setMonth(0)
    fecha.setDate(0)
    return fecha
}

function getCurrentYear(){
    let aux = new Date()
    return aux.getFullYear()
}

export const ADMIN_ROLE = "ADMIN"

export const ASIGNADOR_ROLE = "ASIGNADOR"