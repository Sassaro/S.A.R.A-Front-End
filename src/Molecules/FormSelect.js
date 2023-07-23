/* eslint-disable no-unused-vars */
import { FormControl, FormLabel, Select, FormHelperText, FormErrorMessage,Text } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'

import "./FormSelect.css"

export const FormSelector = (props) => {

    return (

        <FormControl isRequired={props.isRequired} isInvalid={props.errorCondition} aria-multiselectable={props.multiSelect}>
            <Text className='form-label-alt'> {props.label} </Text>

            <Select isDisabled={props.isDisabled} className={props.extraClassname} onFocus={ props.onFocusFunc } backgroundColor={"white"} placeholder={props.placeholder} value={props.state} onChange= {props.handleChange}> {props.options} </Select>

            {!props.errorCondition ? (
                <FormHelperText> {props.helperText} </FormHelperText>) : (
                    <FormErrorMessage>{props.errorText}</FormErrorMessage>
                )}

        </FormControl>

    )

}

FormSelector.propTypes = {
    dataTestId: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    state: PropTypes.any,
    handleChange: PropTypes.func,
    helperText: PropTypes.string,
    errorText: PropTypes.string,
    errorCondition: PropTypes.bool,
    isRequired: PropTypes.bool,
    multiSelect: PropTypes.bool,
    options: PropTypes.any,
    onFocusFunc: PropTypes.func,
    extraClassname: PropTypes.string,
    isDisabled: PropTypes.bool,
}