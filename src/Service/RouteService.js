/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios'
const API_KEY = "5b3ce3597851110001cf624801fab6fcc70c4bb5a16b1770c98c1679"

class RouteService{

    async getRouteFOSSGIS(position,destination){

        console.log("GENERATING ROUTE WITH FOSSGIS")

        const url = 'https://routing.openstreetmap.de/routed-foot/route/v1/foot/' + position[0] +  ',' + position[1] + ';' + destination[0] + ','+ destination[1] + '?overview=false&geometries=polyline&steps=true'
        const response = await axios.get(url)
    
        return response.data.routes[0].legs[0].steps
    }

    async getRouteORS(position,destination){

        console.log("GENERATING ROUTE WITH ORS")

        const url = 'https://api.openrouteservice.org/v2/directions/foot-walking?api_key=' + API_KEY + '&start=' + position[0] + ',%20' + position[1] + '&end=' + destination[0] + ',' + destination[1]
        const response = await axios.get(url)
    
        return response.data.features[0].geometry.coordinates
    }
}

export const routeService = new RouteService()