/* eslint-disable no-unused-vars */
import { Box, Flex } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import "./SubHeader.css"

export const SubHeader = (props) => {
    return (
        <Flex backgroundImage={props.urlImage} className="subHeader">
            <Flex className="textContainer">
                {props.label}
                <Box className="textDecoration"></Box>
            </Flex>

        </Flex>
    )
}

SubHeader.propTypes = {
    label: PropTypes.string,
    urlImage: PropTypes.string
}

export default SubHeader