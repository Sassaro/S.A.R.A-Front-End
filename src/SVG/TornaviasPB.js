/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React from 'react'
import { useState } from "react"
import ClassroomCard from '../Molecules/ClassroomCard'
import { Box, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { classroomService } from '../Service/ClassroomService'
import { useEffect } from 'react'
import { SVGClassroom } from '../Organisms/SVGClassroom'
import { useParams } from 'react-router-dom'
import "../SVG/SVGStyles.css"

export const TornaviasPB = (props) => {

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
  viewBox="0 0 230 230"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="g4" stroke="#000">
    <g id="g3" fill="none">
      <path
        id="path1"
        d="m95.228 199.33a93.68 87.072 0 0 1-70.209-63.2"
        style={{ paintOrder: "stroke fill markers" }}
      />
      <path
        id="path1-4"
        d="m31.008 81.971c11.025-21.108 18.55-33.51 42.548-45.298 23.901-11.302 51.868-12.542 76.818-3.4053"
        style={{ paintOrder: "stroke fill markers" }}
      />
      <path
        id="path1-1"
        d="m176.07 47.576a93.212 86.84 0 0 1 31.367 86.009 93.212 86.84 0 0 1-68.102 65.008"
        strokeWidth=".99618"
        style={{ paintOrder: "stroke fill markers" }}
      />
      <g id="g1">
        <path
          id="path4"
          d="m101.4 173.71a65.942 60.809 0 0 1-40.789-26.726"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <path
          id="path4-9"
          d="m56.026 138.84a65.942 60.809 0 0 1-3.6587-9.4542"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <path
          id="path4-3"
          d="m177.43 136.5a65.942 60.809 0 0 1-44.986 36.985"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <path
          id="path4-3-5"
          d="m157.97 67.265a65.942 60.809 0 0 1 22.498 60.062"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <path
          id="path4-3-5-5"
          d="m100.04 55.702a65.942 60.809 0 0 1 49.288 5.9304"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <path
          id="path4-3-5-5-6"
          d="m54.419 91.704a65.942 60.809 0 0 1 35.856-33.212"
          style={{ paintOrder: "stroke fill markers" }}
        />
      </g>
      <g id="g2" strokeWidth="1.0074">
        <path
          id="path5"
          d="m104.57 161.04a51.871 48.015 0 0 1-32.301-21.056"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <path
          id="path5-1"
          d="m68.589 133.62a51.871 48.015 0 0 1-2.8029-7.4152"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <path
          id="path5-5"
          d="m164.21 131.79a51.871 48.015 0 0 1-34.931 28.989"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <path
          id="path5-5-1"
          d="m154.88 82.467a51.871 48.015 0 0 1 11.743 42.075"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <path
          id="path5-5-1-1"
          d="m103.11 67.767a51.871 48.015 0 0 1 32.065 1.8552"
          style={{ paintOrder: "stroke fill markers" }}
        />
        <path
          id="path5-5-1-1-2"
          d="m67.97 96.593a51.871 48.015 0 0 1 27.675-26.343"
          style={{ paintOrder: "stroke fill markers" }}
        />
      </g>
      <path
        id="path2"
        d="m98.155 186.74a79.74 74.213 0 0 1-59.248-54.213"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path2-0"
        d="m43.445 86.726c8.7001-17.093 16.566-28.799 36.878-38.367 20.312-9.5678 44.05-10.599 65.232-2.834"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path2-1"
        d="m148.67 46.568a79.74 74.213 0 0 1 8.0041 3.8177"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path2-4"
        d="m167.38 57.187a79.74 74.213 0 0 1 26.867 73.441 79.74 74.213 0 0 1-58.141 55.596"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path2-4-0"
        d="m131.98 187.14a79.74 74.213 0 0 1-8.7382 1.2496"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <circle
      id="path34"
      cx="129.49"
      cy="160.76"
      r=".044712"
      strokeWidth=".26458"
    />
    <g id="g7" fill="none" strokeWidth=".5">
      <path
        id="path35"
        d="m129.37 160.84 3.3913 12.498"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <g id="g6">
        <path
          id="path36"
          d="m142.69 170.23-5.715-11.775"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path37"
          d="m150.66 166.33-7.4107-10.865"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path38"
          d="m158.83 160.93-9.2633-9.8286"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path39"
          d="m172.77 145.26-11.964-6.5314"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path42"
          d="m177.76 136.88-14.005-5.1498"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path43"
          d="m180.87 127.08-14.476-2.8575"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path44"
          d="m181.84 108.68-14.162 1.256"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path45"
          d="m176.82 90.498-12.906 5.244"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path46"
          d="m165.11 73.698-10.017 8.9179"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path47"
          d="m159.24 78.911-6.2802-5.4952"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path48"
          d="m158.42 67.293-5.4638 6.3116"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path49"
          d="m148.86 46.673 3.9079-8.1711"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path50"
          d="m161.42 42.498-8.704-4.0411"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path51"
          d="m156.4 50.403 4.9737-7.8602"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path52"
          d="m167.49 57.276 8.7923-9.6715"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path53"
          d="m186.05 56.365-10.08 8.4155"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path54"
          d="m202.38 80.45-12.278 5.1184"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path55"
          d="m207.12 93.607-13.188 3.2657"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path56"
          d="m209.26 106.17-13.377 1.1932"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path57"
          d="m209.73 119.45-13.502-0.40821"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path58"
          d="m207.5 133.17-13.157-2.6063"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path59"
          d="m203.48 145.83-12.403-4.616"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path60"
          d="m196.76 158.61-11.43-6.4686"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path61"
          d="m187.12 171.17-10.174-8.2271"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path62"
          d="m176.54 180.84-8.6981-9.6087"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path63"
          d="m165.36 188.25-7.2851-10.394"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path64"
          d="m153.9 193.9-5.5266-11.43"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path65"
          d="m146.45 196.67-4.2078-11.932"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path66"
          d="m136.09 185.96 3.5797 12.655"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path67"
          d="m133.89 195.97-1.9783-8.8551"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path68"
          d="m123.53 188.28 0.72223 9.1063"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path69"
          d="m133.89 196.01-9.6087 1.3816"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path70"
          d="m98.008 186.65-2.8421 12.701"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path71"
          d="m86.995 183.49-5.1513 11.99"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path72"
          d="m65.99 171.77-9.0592 10.214"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path73"
          d="m56.975 163.87-10.48 9.148"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path74"
          d="m48.627 153.61-12.035 7.3717"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path75"
          d="m42.898 143.22-13.278 5.8174"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path76"
          d="m38.857 132.91-13.944 3.4638"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path77"
          d="m101.16 173.72 3.153-12.656"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path78"
          d="m74.472 161.56 9.148-9.8141"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path79"
          d="m60.75 147.17 11.812-7.0164"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path80"
          d="m68.433 133.45-12.612 5.1957"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path81"
          d="m65.857 126.43-13.278 3.153"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path82"
          d="m81.831 78-8.8865-9.1691"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path83"
          d="m63.807 58.437-9.6715-9.5459"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path84"
          d="m73.604 51.623-7.7875-10.896"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path85"
          d="m84.343 46.411-5.558-11.932"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path86"
          d="m90.31 44.181-4.7416-12.184"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path87"
          d="m96.307 42.486-3.3913-12.529"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path88"
          d="m108.68 40.57-1.6015-12.906"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path89"
          d="m121.3 40.507 0.62802-13.126"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path90"
          d="m134.11 42.046 3.0773-12.529"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path91"
          d="m145.32 45.312 4.7416-11.901"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path92"
          d="m95.365 70.244-5.244-11.556"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path93"
          d="m103.47 67.732-3.1401-12.089"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path94"
          d="m111.51 66.539-1.8841-12.498"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path95"
          d="m119.51 66.476 0.59662-12.78"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path96"
          d="m127.77 67.481 3.3913-12.341"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path97"
          d="m134.87 69.522 5.1812-11.932"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path98"
          d="m137.19 64.561 7.9131 3.5483"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path99"
          d="m149.19 61.295-4.145 6.8768"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path100"
          d="m94.944 157.91 5.9284-12.634"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path101"
          d="m94.034 141.55 6.8832 3.7303"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path102"
          d="m84.863 152.61 9.1702-11.08"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path103"
          d="m92.391 143.73 7.3939 3.9967"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path104"
          d="m99.274 148.83-7.616-4.0411"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path105"
          d="m90.548 145.7 8.1266 4.463"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path106"
          d="m98.141 151.3-8.3709-4.5518"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path107"
          d="m89.038 147.7 8.5263 4.8627"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path108"
          d="m97.098 153.63-9.0148-4.7516"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path109"
          d="m96.401 155.15-9.3889-5.1184"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path110"
          d="m81.36 149.88 9.9228-10.237"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path111"
          d="m85.851 134.24 5.4952 5.3696"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path112"
          d="m73.793 141.93 11.995-7.6933"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path113"
          d="m83.731 135.62 5.9729 5.6842"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path114"
          d="m88.572 142.46-6.0617-5.9285"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path115"
          d="m87.75 143.42-6.5058-6.0839"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path116"
          d="m86.928 144.17-6.7722-6.2393"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path117"
          d="m85.818 145.19-6.8832-6.3059"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path118"
          d="m84.975 146.15-7.1053-6.639"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path119"
          d="m84.064 147.28-7.2829-7.0386"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path120"
          d="m80.073 79.225 11.21 10.268"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path121"
          d="m68.549 94.957 14.099 5.7464"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path122"
          d="m91.157 89.305-8.6039 11.304"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path123"
          d="m88.897 87.295-9.0435 12.215"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path124"
          d="m78.252 98.882 9.2633-12.843"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path125"
          d="m86.353 84.94-9.7343 13.188"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path126"
          d="m75.017 97.626 10.08-13.848"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path127"
          d="m83.778 82.554-10.457 14.319"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path128"
          d="m71.595 96.15 10.99-14.57"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path129"
          d="m85.662 79.476 9.2633-5.7464"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path130"
          d="m95.836 74.923-9.0749 5.7464"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path131"
          d="m87.955 81.926 8.4469-5.4952"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path132"
          d="m97.092 77.529-8.3213 5.3382"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path133"
          d="m89.682 83.967 7.8817-5.2126"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path134"
          d="m98.223 79.947-7.5991 4.9614"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path135"
          d="m91.566 86.07 7.2537-4.8044"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path136"
          d="m93.701 71.061 6.343 12.466"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path137"
          d="m83.715 77.09 9.4203 10.676"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path138"
          d="m100.04 83.276-7.0967 4.5218"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path139"
          d="m165.06 97.253-14.521 5.1069"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path140"
          d="m167.46 107.91-15.099 1.7319"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path141"
          d="m152.65 109.67-2.0872-7.2163"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path142"
          d="m155.14 109.33-2.1316-7.8158"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path143"
          d="m156.67 109.18-2.3092-8.06"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path144"
          d="m158.16 108.91-2.3758-8.3043"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path145"
          d="m159.71 108.82-2.7755-8.6373"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path146"
          d="m161.09 108.56-2.6645-8.8372"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path147"
          d="m162.51 108.4-2.7533-9.2368"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path148"
          d="m164.11 108.18-2.8865-9.4145"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path149"
          d="m167.9 111.91-15.292 0.65942"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path150"
          d="m166.93 123.19-14.696-2.7633"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path151"
          d="m152.64 112.42-0.37681 8.2271"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path153"
          d="m155.03 120.99 0.33306-8.4597"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path154"
          d="m156.47 121.32 0.46628-8.9482"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path155"
          d="m157.98 121.5 0.24424-9.1702"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path156"
          d="m159.27 121.86 0.48849-9.6143"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path157"
          d="m160.82 122.08 0.33306-9.8808"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path158"
          d="m162.2 122.25 0.5551-10.058"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path159"
          d="m163.67 122.52 0.44408-10.391"
          style={{ paintOrder: "stroke markers fill" }}
        />
      </g>
    </g>
  </g>
  <ellipse
    id="path160"
    cx="116.48"
    cy="114.2"
    rx="21.548"
    ry="20.574"
    fill="#666"
    strokeWidth={0}
    style={{ paintOrder: "stroke markers fill" }}
  />
  <g id="g5" stroke="#000">
    <g id="g8" fill="#999" strokeWidth=".25">
      <path
        id="path3"
        d="m124.19 196.24 9.5477-1.2878"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path6"
        d="m124.03 195.42 9.5033-1.2434"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path8"
        d="m124.12 194.4 9.1924-1.1546"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path10"
        d="m123.99 193.57 9.1258-1.1546"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path11"
        d="m123.99 192.73 8.9482-1.1546"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path12"
        d="m123.94 192.02 8.815-1.1324"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <g id="g9" strokeWidth=".38">
      <path
        id="path13"
        d="m131.88 186.65 0.1695 0.84336"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path14"
        d="m160.94 43.311-8.5593-3.9289"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path15"
        d="m160.5 44.083-8.4892-3.8353"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path16"
        d="m159.84 45.088-8.2085-3.9522"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path17"
        d="m159.19 45.977-8.0682-3.999"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path18"
        d="m158.74 46.796-8.0214-3.999"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <g id="g13" fill="#92ff92">
      <path
        id="path187"
        d="m24.567 136.42 41.697-10.114"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path188"
        d="m54.185 91.047 14.397 5.3631"
        strokeWidth="1.0575"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path189"
        d="m25.4 91.877 40.415 12.039"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <path
      id="path190"
      d="m25.273 133.6c-1.5338-6.2618-2.2186-11.572-2.3249-18.03-0.07048-4.2812 0.1124-7.6712 0.62822-11.646 0.56615-4.3624 2.0618-11.288 2.4325-11.263 0.075 0.0051 8.7237 2.5679 19.219 5.6951 10.496 3.1273 19.215 5.7231 19.376 5.7686l0.29355 0.0826-0.17399 0.77022c-0.60044 2.658-0.94423 6.043-0.94754 9.3294-0.0039 3.9004 0.4305 7.5331 1.3116 10.968 0.10228 0.39872 0.16598 0.72495 0.14156 0.72495s-8.8962 2.1468-19.715 4.7706c-10.819 2.6239-19.692 4.7706-19.718 4.7706-0.02604 0-0.2613-0.87346-0.52281-1.941z"
      fill="#d1d1d1"
      strokeWidth=".35356"
      style={{ paintOrder: "stroke markers fill" }}
    />
  </g>
  <text
    id="text215"
    x="155.65778"
    y="185.0307"
    fill="#ffa467"
    fontSize="3.175px"
    stroke="#ffffff"
    strokeWidth={0}
    style={{ paintOrder: "stroke markers fill" }}
    xmlSpace="preserve"
  >
    <tspan id="tspan215" x="155.65778" y="185.0307" strokeWidth={0} />
  </text>
  <path
    id="path217"
    d="m62.176 93.381c-3.0924-1.1514-5.8737-2.1884-6.1809-2.3044l-0.55848-0.21095 0.77993-1.5558c3.4401-6.8624 8.5885-13.406 14.691-18.671 2.0535-1.7718 1.5734-1.8418 3.8906 0.56731 1.098 1.1415 3.0202 3.1384 4.2714 4.4375l2.2752 2.3621-0.96998 0.81575c-1.4453 1.2156-4.087 3.892-5.5239 5.5967-2.4113 2.8606-4.2285 5.5903-5.9861 8.9928l-1.066 2.0634z"
    fill="#808080"
    strokeWidth={0}
    style={{ paintOrder: "stroke markers fill" }}
  />

  {classrooms.map( (it) => {
    return (
      <SVGClassroom classroom={it} key={it.id} setCardFunc={props.setCardFunc} showCardFunc={props.showCardFunc}></SVGClassroom>
    )
  } )}

  <text
    id="text1"
    x="123.75915"
    y="62.76825"
    fill="none"
    fontSize="3.175px"
    stroke="#ffffff"
    strokeWidth={0}
    style={{ paintOrder: "stroke markers fill" }}
    xmlSpace="preserve"
  >
    <tspan id="tspan1" x="123.75915" y="62.76825" strokeWidth={0} />
  </text>
  <g id="g10" fill="#808080" strokeWidth={0}>
    <path
      id="path9"
      d="m29.411 146.64c-1.1139-2.5499-1.4656-3.4755-2.5806-6.7923-0.91137-2.7109-0.97566-3.0067-0.68164-3.1332 0.46831-0.20169 11.814-2.9472 12.179-2.9472 0.22582 3e-5 0.46995 0.52789 0.93016 2.0112 0.34319 1.1061 1.0798 3.1638 1.637 4.5725 0.55715 1.4087 1.013 2.6398 1.013 2.7358 0 0.12639-9.3667 4.3613-11.528 5.212-0.11789 0.0464-0.54027-0.67629-0.96942-1.6588z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path19"
      d="m91.579 197.85c-2.7291-0.69892-4.9979-1.3564-8.2054-2.3779-0.39703-0.12645-0.75575-0.31821-0.79713-0.42613-0.04137-0.10793 0.95699-2.5956 2.2186-5.5281l2.2938-5.3321 2.6192 0.85997c1.4406 0.47296 3.7557 1.1446 5.1448 1.4924 1.389 0.34785 2.5548 0.64944 2.5903 0.67021 0.10107 0.059-2.4726 11.478-2.5844 11.466-0.05472-6e-3 -1.5307-0.37676-3.28-0.82472z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path20"
      d="m138.26 192.33c-0.84891-3.0003-1.4896-5.5091-1.4238-5.575 0.2082-0.2082 5.058-1.491 5.19-1.3728 0.0694 0.0622 0.4618 1.0812 0.87203 2.2645s1.2516 3.5925 1.8699 5.3535l1.124 3.2019-2.4637 0.67728c-1.3551 0.3725-2.7249 0.72865-3.0443 0.79141l-0.58059 0.11412z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path21"
      d="m144.69 190.6c-1.0169-2.9069-1.849-5.3562-1.849-5.4432 0-0.14955 4.8278-1.9778 5.2509-1.9885 0.23428-6e-3 5.2456 10.234 5.0863 10.393-0.13138 0.13139-6.2383 2.3238-6.4729 2.3238-0.0916 0-0.99856-2.3783-2.0155-5.2852z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path22"
      d="m174.18 62.253c-1.0804-1.0275-2.8641-2.6261-3.9639-3.5525l-1.9995-1.6844 3.8581-4.2341c2.122-2.3287 3.9152-4.2582 3.9848-4.2878 0.27024-0.1147 5.6972 4.5846 7.9882 6.9172l1.1683 1.1895-4.1518 3.457c-2.2835 1.9014-4.3246 3.5935-4.536 3.7602-0.36925 0.29144-0.45961 0.23122-2.3484-1.5651z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path23"
      d="m156.59 76.125c-1.3891-1.2315-2.6301-2.3433-2.7577-2.4707-0.18461-0.18427 0.21379-0.74717 1.948-2.7524 1.199-1.3864 2.2866-2.5208 2.4167-2.5208 0.28414 0 3.8883 3.0368 5.2678 4.4386l0.98162 0.99744-2.5391 2.2397c-1.3965 1.2319-2.5959 2.2549-2.6654 2.2735-0.0695 0.01855-1.2629-0.97387-2.6519-2.2054z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path24"
      d="m141.07 65.931c-1.8971-0.86883-3.4681-1.5991-3.4911-1.6228-0.0682-0.07002 2.3697-5.6401 2.5496-5.825 0.25614-0.26356 8.2406 3.0625 8.2194 3.4242-0.0208 0.35459-3.3366 5.5435-3.5599 5.5707-0.14783 0.01805-1.8209-0.67804-3.7179-1.5469z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path25"
      d="m111.41 63.61c-0.17872-1.1833-0.55406-3.6792-0.83412-5.5467l-0.50915-3.3951 0.66949-0.11058c1.1948-0.19734 8.5197-0.33438 8.7616-0.1639 0.18768 0.13226 0.18092 1.2586-0.0339 5.6443-0.1476 3.0136-0.29519 5.5046-0.32803 5.5355-0.0328 0.03094-1.7115 0.08585-3.7303 0.12202l-3.6705 0.06576z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path26"
      d="m70.087 46.092c-1.9527-2.744-3.4581-5.0313-3.3676-5.1164 0.67891-0.64087 11.213-5.8038 11.842-5.8038 0.10352 0 4.7019 9.568 5.2101 10.841 0.0278 0.06962-0.60361 0.40968-1.4031 0.75569-1.8593 0.80467-6.224 2.9723-7.5016 3.7258-0.54138 0.31922-1.0438 0.57594-1.1164 0.57051-0.07265-0.0054-1.721-2.2428-3.6631-4.972z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path27"
      d="m59.274 53.443c-3.3554-3.2951-4.3685-4.3934-4.1772-4.5278 0.13894-0.09764 1.2062-0.89989 2.3717-1.7828 3.8663-2.9289 8.3023-5.7708 8.5576-5.4824 0.32829 0.37086 6.792 9.5021 6.8698 9.7051 0.04631 0.12069-0.44555 0.5417-1.093 0.93561-1.6516 1.0048-4.4539 2.9405-6.2782 4.337-0.85054 0.65103-1.6082 1.1796-1.6838 1.1746-0.07553-5e-3 -2.1307-1.9667-4.5669-4.3592z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path40"
      d="m103.58 66.994c0-0.05152-0.62623-2.505-1.3916-5.4522-0.7654-2.9472-1.3655-5.3847-1.3335-5.4167 0.11419-0.11419 3.8838-0.83001 5.7678-1.0953 1.055-0.14855 2.1078-0.30019 2.3394-0.33697 0.40861-0.06488 0.42372-0.04995 0.50656 0.49971 0.047 0.31162 0.42777 2.8286 0.84629 5.5935 0.41851 2.7649 0.75225 5.0408 0.74167 5.0577-0.0106 0.0168-0.93945 0.14872-2.0642 0.29313-1.8345 0.23554-4.5698 0.70138-5.181 0.88232-0.12732 0.0377-0.2315 0.0264-0.2315-0.02513z"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <path
      id="path170"
      d="m166.92 141.7c-3.035-1.6485-5.5202-3.0368-5.5228-3.0855-3e-3 -0.0486 0.27234-0.55456 0.61084-1.1245 0.3385-0.56991 1.061-1.9455 1.6055-3.0567 0.89116-1.8189 1.0179-2.0119 1.2697-1.9328 0.67642 0.21234 11.612 4.2616 11.672 4.3222 0.19253 0.19252-3.6062 7.5585-4.0346 7.8234-0.0457 0.0283-2.5662-1.2974-5.6012-2.9458z"
      style={{ paintOrder: "stroke markers fill" }}
    />
  </g>
  <g stroke="#000">
    <g id="g11" fill="none">
      <path
        id="path29"
        d="m7.6348 86.659a112.98 106.16 0 0 1 56.45-66.189"
        strokeWidth="1.2726"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path30"
        d="m7.8083 86.222 18.189 5.8679"
        strokeWidth="1.0163"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path31"
        d="m63.465 20.083 9.6533 16.746"
        strokeWidth="1.0258"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <g id="g15" fill="#808080">
      <g id="g12">
        <path
          id="path32"
          d="m31.194 81.917 12.378 4.7793"
          strokeWidth=".30019"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path33"
          d="m39.491 85.062 9.1625-15.87"
          strokeWidth=".3"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path41"
          d="m36.768 84.041 9.1814-15.903"
          strokeWidth=".3"
          style={{ paintOrder: "stroke markers fill" }}
        />
      </g>
      <g id="g14" strokeWidth=".1">
        <g id="g196">
          <path
            id="path191"
            d="m40.914 82.618-2.5655-1.07"
            style={{ paintOrder: "stroke markers fill" }}
          />
          <path
            id="path192"
            d="m41.194 82.266-2.7357-1.07"
            style={{ paintOrder: "stroke markers fill" }}
          />
          <path
            id="path193"
            d="m41.34 81.962-2.7114-1.0943"
            style={{ paintOrder: "stroke markers fill" }}
          />
        </g>
        <g id="g196-8" transform="translate(2.5536 -4.4257)">
          <path
            id="path191-8"
            d="m40.914 82.618-2.5655-1.07"
            style={{ paintOrder: "stroke markers fill" }}
          />
          <path
            id="path192-8"
            d="m41.194 82.266-2.7357-1.07"
            style={{ paintOrder: "stroke markers fill" }}
          />
          <path
            id="path193-4"
            d="m41.34 81.962-2.7114-1.0943"
            style={{ paintOrder: "stroke markers fill" }}
          />
        </g>
        <g id="g196-89" transform="translate(5.7513 -10.104)">
          <path
            id="path191-81"
            d="m40.914 82.618-2.5655-1.07"
            style={{ paintOrder: "stroke markers fill" }}
          />
          <path
            id="path192-3"
            d="m41.194 82.266-2.7357-1.07"
            style={{ paintOrder: "stroke markers fill" }}
          />
          <path
            id="path193-3"
            d="m41.34 81.962-2.7114-1.0943"
            style={{ paintOrder: "stroke markers fill" }}
          />
        </g>
      </g>
    </g>
    <g id="g17" fill="#f2f2f2">
      <path
        id="path196"
        transform="scale(.26458)"
        d="m156.75 323.84c-3.2884-1.2678-6.0793-2.4054-6.2019-2.5279-0.12388-0.12388 7.3529-13.342 16.832-29.758 9.3803-16.244 17.055-29.621 17.055-29.726 0-0.10508-0.23246-0.33623-0.51658-0.51367-0.60507-0.37787-0.4679-0.57048-4.0419 5.6754l-2.3164 4.0481-4.1663-1.6653c-2.2914-0.91593-4.2532-1.7483-4.3595-1.8498-0.10628-0.10144 1.0476-2.3353 2.5642-4.9642 2.566-4.4479 2.7248-4.8036 2.2882-5.1229-0.25809-0.18871-0.54669-0.34312-0.64134-0.34312-0.0947 0-7.8137 13.248-17.153 29.44s-17.107 29.629-17.261 29.861c-0.24693 0.37173-1.3657 6.8e-4 -9.6228-3.1916-5.1389-1.9867-9.3813-3.6501-9.4275-3.6963-0.11004-0.11004 7.9754-15.426 13.122-24.857 22.197-40.675 39.613-65.25 61.447-86.706 2.6247-2.5793 6.2311-5.9951 8.0142-7.5908l3.242-2.9012 1.8272 1.7418c1.0049 0.95799 8.5763 8.4097 16.825 16.559l14.998 14.817-2.9102 2.5006c-7.4339 6.3878-16.388 15.41-23.445 23.625-15.947 18.562-30.57 41.408-47.351 73.975l-2.8218 5.4765z"
        strokeWidth=".098251"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <g id="g16" strokeWidth=".049126">
        <path
          id="path197"
          transform="scale(.26458)"
          d="m160.91 290.76c-2.2876-0.92547-4.2591-1.7278-4.3811-1.783-0.18828-0.0852 0.57129-1.473 5.0241-9.1797 2.8852-4.9937 5.3017-9.1352 5.37-9.2035 0.0788-0.0788 1.6846 0.52427 4.3993 1.6521 2.3514 0.97692 4.3222 1.8198 4.3795 1.873 0.11385 0.1057-10.292 18.221-10.503 18.285-0.0712 0.0215-2.0012-0.71821-4.2888-1.6437z"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path198"
          transform="scale(.26458)"
          d="m151.1 307.43c-2.3948-0.97105-4.3737-1.7803-4.3974-1.7983-0.0431-0.0327 7.7272-13.552 7.8926-13.732 0.048-0.0523 2.0754 0.73739 4.5054 1.7548l4.4181 1.8498-3.9381 6.8237c-2.166 3.753-3.9805 6.8337-4.0322 6.8458-0.0518 0.0122-2.0535-0.77239-4.4484-1.7434z"
          style={{ paintOrder: "stroke markers fill" }}
        />
        <path
          id="path199"
          transform="scale(.26458)"
          d="m144.45 319.17c-2.4084-0.93524-4.4156-1.7385-4.4604-1.785-0.0601-0.0623 4.6783-8.4797 4.958-8.8074 0.0486-0.0569 8.6237 3.4744 8.7869 3.6186 0.0749 0.0661-4.6612 8.4867-4.8585 8.6382-0.0259 0.0199-2.0176-0.72908-4.426-1.6643z"
          style={{ paintOrder: "stroke markers fill" }}
        />
      </g>
    </g>
  </g>
  <g id="g28">
    <path
      id="path201"
      d="m25.727 91.397c-1.0238-0.30093-17.035-5.4895-17.08-5.535-0.070378-0.07038 0.67918-2.4383 1.5174-4.7937 8.43-23.688 25.402-43.687 48.13-56.721 1.8637-1.0687 5.2696-2.8847 5.3183-2.8358 0.05107 0.05135 8.7068 15.072 8.7068 15.109 0 0.01797-0.71355 0.40449-1.5857 0.85899-11.991 6.2491-20.123 12.884-26.963 22-3.7388 4.9828-7.1611 10.641-11.998 19.834-1.0495 1.995-1.2504 2.4414-1.138 2.529 0.11248 0.08756-0.26992 0.94159-2.1679 4.8413-1.2674 2.6043-2.3257 4.7526-2.3517 4.7741-0.02599 0.02151-0.20045-0.0059-0.38769-0.06097z"
      fill="#808080"
      stroke="#000"
      strokeWidth=".036763"
      style={{ paintOrder: "stroke markers fill" }}
    />
    <text
      id="text201"
      transform="matrix(.20712 0 0 .27393 30.583 53.862)"
      fill="#000000"
      stroke="#000000"
      strokeWidth=".37795"
      style={{
        paintOrder: "stroke markers fill",
        shapeInside: "url(#rect202)",
        whiteSpace: "pre"
      }}
      xmlSpace="preserve"
    >
      <tspan id="tspan3" x={0} y={0}>
        Biblioteca
      </tspan>
      <tspan id="tspan4" x={0} y={15}>
        Central
      </tspan>
    </text>
  </g>
  <g stroke="#000">
    <g id="g211" transform="rotate(1.9861,-63.831,216.4)">
      <path
        id="path202"
        d="m107.37 198.71 4.8146-8.3912"
        strokeWidth=".1"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path209"
        d="m112.15 190.28 5.3304 8.116"
        strokeWidth=".1"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path210"
        d="m107.37 198.67 10.072-0.30941"
        strokeWidth=".10082"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <g id="g211-1" transform="rotate(-17.707,-363.09,-74.164)">
      <path
        id="path202-1"
        d="m107.37 198.71 4.8146-8.3912"
        strokeWidth=".1"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path209-6"
        d="m112.15 190.28 5.3304 8.116"
        strokeWidth=".1"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        id="path210-7"
        d="m107.37 198.67 10.072-0.30941"
        strokeWidth=".10082"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
    <g id="g18">
      <text
        id="text211"
        transform="scale(.26458)"
        strokeWidth=".37795"
        style={{
          paintOrder: "stroke markers fill",
          shapeInside: "url(#rect211)",
          whiteSpace: "pre"
        }}
        xmlSpace="preserve"
      />
      <text
        id="text212"
        x="166.039"
        y="28.986303"
        fontSize="3.175px"
        strokeWidth=".1"
        style={{ paintOrder: "stroke markers fill" }}
        xmlSpace="preserve"
      >
        <tspan id="tspan212" x="166.039" y="28.986303" strokeWidth=".1">
          Entrada
        </tspan>
      </text>
      <text
        id="text212-1"
        x="106.97243"
        y="208.95125"
        fontSize="3.175px"
        strokeWidth=".1"
        style={{ paintOrder: "stroke markers fill" }}
        xmlSpace="preserve"
      >
        <tspan id="tspan212-3" x="106.97243" y="208.95125" strokeWidth=".1">
          Entrada
        </tspan>
      </text>
    </g>
  </g>
</svg>


    )
}

TornaviasPB.propTypes = {
  showCardFunc: PropTypes.func,
  setCardFunc: PropTypes.func,
  floorNumber: PropTypes.number
}