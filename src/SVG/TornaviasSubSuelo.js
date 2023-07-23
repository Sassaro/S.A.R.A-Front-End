/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from "react"
import ClassroomCard from '../Molecules/ClassroomCard'
import { Box, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import "./SVGStyles.css"
import { SVGClassroom } from '../Organisms/SVGClassroom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { classroomService } from '../Service/ClassroomService'

export const TornaviasSubSuelo = (props) => {

  const [classrooms, setClassrooms] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getBuildingClassrooms()
  },[])

  const getBuildingClassrooms = async () => {
    const aux = await classroomService.getAllBuildingClassroom(id, props.floorNumber)
    setClassrooms(aux)
  }

    return (
<svg
  id="svg1"
  width="210mm"
  height="210mm"
  version="1.1"
  viewBox="0 0 210 210"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="layer1">
    <g fill="none" stroke="#000">
      <path
        id="path1"
        d="m90.687 185.43a93.68 87.072 0 0 1-70.209-63.2"
        style={{ paintOrder: "stroke fill markers" }}
      />
      <path
        id="path2"
        d="m93.614 172.84a79.74 74.213 0 0 1-59.248-54.213"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <g strokeWidth=".5">
        <path
          id="path70"
          d="m93.467 172.75-2.8421 12.701"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path72"
          d="m61.449 157.87-9.0592 10.214"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path73"
          d="m52.434 149.97-10.48 9.148"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path74"
          d="m44.086 139.71-12.035 7.3717"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path75"
          d="m38.357 129.32-13.278 5.8174"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path76"
          d="m34.316 119.01-13.944 3.4638"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path77"
          d="m96.619 159.82 3.153-12.656"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path78"
          d="m69.931 147.66 9.148-9.8141"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path81"
          d="m61.316 112.53-13.278 3.153"
          style={{ paintOrder: "stroke markers fill" }}
        />
      </g>
    </g>
    <path
      id="path187"
      d="m20.026 122.52 41.697-10.114"
      fill="#92ff92"
      stroke="#000"
      style={{ paintOrder: "stroke markers fill" }}
    >
    </path>
    <g strokeWidth=".13435">
      <path
        id="path179"
        d="m88.664 184.44c-0.10801-0.0272-1.2045-0.27314-2.3619-0.53987-5.0382-1.161-10.117-3.2221-14.966-5.2414-2.5903-1.0787-9.0503-4.3522-9.0775-4.5362-0.01141-0.0774 7.4742-9.8781 7.5425-9.8882 0.02274-3e-3 0.5886 0.35737 1.1471 0.6577 5.6022 3.0122 12.784 6.1603 19.379 7.6745 0.75361 0.17302 2.7271 0.65272 2.7759 0.68773 0.07178 0.0514-2.323 10.786-2.6116 11.577-0.06329 0.17333-1.6811-0.3473-1.8326-0.38536z"
        fill="#808080"
        style={{ paintOrder: "stroke markers fill" }}
      >
      </path>
    </g>
    <g stroke="#fff">
      <g strokeWidth=".13435">
        <path
          id="path184"
          d="m40.861 157.16c-2.8974-3.1287-5.3736-6.1779-7.7263-9.5148l-0.42973-0.60952 5.4562-3.3427c3.0009-1.8385 5.4771-3.3427 5.5025-3.3427 0.02551 0 0.49527 0.63163 1.0439 1.4036 2.0118 2.8307 3.4626 4.6108 6.4843 7.9557l0.46915 0.51931-4.7082 4.1089c-2.5896 2.2599-4.7429 4.1184-4.7849 4.1298-0.04219 0.0116-0.63034-0.57678-1.307-1.3074z"
          fill="#808080"
          style={{ paintOrder: "stroke markers fill" }}
        >
        </path>
        <path
          id="path185"
          d="m31.445 145.14c-1.1667-1.816-2.0074-3.2136-2.9659-4.9302-1.0843-1.942-2.6268-5.0355-2.5454-5.1053 0.03702-0.0317 2.6982-1.2063 5.9139-2.6102 3.2157-1.404 5.8734-2.5677 5.9067-2.5862 0.0331-0.0184 0.52575 0.90274 1.0948 2.0471 1.1367 2.2862 2.2878 4.3373 3.6232 6.456l0.87089 1.3819-0.34554 0.21594c-0.44328 0.27701-10.522 6.4383-10.603 6.4817-0.03347 0.018-0.46079-0.58985-0.94958-1.3507z"
          fill="#808080"
          style={{ paintOrder: "stroke markers fill" }}
        >
        </path>
      </g>

      {classrooms.map( (it) => {
      return (
        <SVGClassroom classroom={it} key={it.id} setCardFunc={props.setCardFunc} showCardFunc={props.showCardFunc}></SVGClassroom>
      )
      } )}
    </g>
    <path
      id="path9"
      d="m24.87 132.74c-1.1139-2.5499-1.4656-3.4755-2.5806-6.7923-0.91137-2.7109-0.97566-3.0067-0.68164-3.1332 0.46831-0.20169 11.814-2.9472 12.179-2.9472 0.22582 3e-5 0.46995 0.52789 0.93016 2.0112 0.34319 1.1061 1.0798 3.1638 1.637 4.5725 0.55715 1.4087 1.013 2.6398 1.013 2.7358 0 0.12639-9.3667 4.3613-11.528 5.212-0.11789 0.0464-0.54027-0.67629-0.96942-1.6588z"
      fill="#808080"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
    />
    <ellipse
      id="path160"
      cx="111.2"
      cy="100.33"
      rx="21.548"
      ry="20.574"
      fill="#666"
      strokeWidth={0}
      style={{ paintOrder: "stroke markers fill" }}
    />
    <g stroke="#000">
      <path
        id="path190"
        d="m19.992 119.73c-1.5338-6.2618-2.2186-11.572-2.3249-18.03-0.07048-4.2812 0.1124-7.6712 0.62822-11.646 0.56615-4.3624 2.0618-11.288 2.4325-11.263 0.075 0.0051 8.7237 2.5679 19.219 5.6951 10.496 3.1273 19.215 5.7231 19.376 5.7686l0.29355 0.0826-0.17399 0.77022c-0.60044 2.658-0.94423 6.043-0.94754 9.3294-0.0039 3.9004 0.4305 7.5331 1.3116 10.968 0.10228 0.39872 0.16598 0.72495 0.14156 0.72495-0.02442 0-8.8962 2.1468-19.715 4.7706-10.819 2.6239-19.692 4.7706-19.718 4.7706-0.02604 0-0.2613-0.87346-0.52281-1.941z"
        fill="#d1d1d1"
        strokeWidth=".35356"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path3"
        d="m55.831 133.33 12.435-6.9082"
        strokeWidth=".5"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <g>
        <path
          id="path6"
          d="m100.07 146.92a50.369 46.514 0 0 1-38.885-34.664"
          fill="none"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path6-0"
          d="m96.883 159.57a63.175 58.813 0 0 1-48.771-43.829"
          fill="none"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path7"
          d="m61.546 174.59 8.1643-10.676"
          fill="#92ff92"
          strokeWidth=".5"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path8"
          d="m68.205 178.11 6.7092-11.266"
          fill="#808080"
          strokeWidth=".5"
          style={{ paintOrder: "stroke markers fill" }}
        />
      </g>
    </g>
  </g>
</svg>
    )
}

TornaviasSubSuelo.propTypes = {
  showCardFunc: PropTypes.func,
  setCardFunc: PropTypes.func,
  floorNumber: PropTypes.number
}