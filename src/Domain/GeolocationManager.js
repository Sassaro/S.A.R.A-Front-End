import * as ol from "ol"

class GeolocationManager{

    geolocationObject

    startGeolocation(){

        this.geolocationObject = new ol.Geolocation({
            tracking: true,
            trackingOptions: {
              enableHighAccuracy: true,
            },
        })
        
    }

    getPosition(){

        console.log(this.geolocationObject.getPosition())
        
        return this.geolocationObject.getPosition()
    }

}

export const geolocationManager = new GeolocationManager()