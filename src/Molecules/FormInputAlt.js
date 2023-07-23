/* eslint-disable no-unused-vars */
import { FormControl, FormLabel,Input,FormHelperText,Flex,FormErrorMessage, InputGroup,Text } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import "./FormInputAlt.css"

export const FormInputAlt  = (props) => {

    return (
        <>
            <FormControl isRequired={props.isRequired} isInvalid={props.errorCondition}>
                <Text className='form-label-alt' paddingLeft={"10px"}>{props.label}</Text>
                <InputGroup >
                    {props.leftElement}
                    <Input isDisabled={props.isDisabled} name={props.name} onBlur={props.onBlur} backgroundColor={"white"} type={props.type} placeholder={props.placeholder} value={props.state} onChange= {props.handleChange} ></Input>
                </InputGroup>             
                {!props.errorCondition ? (
                <FormHelperText className='helper-text'> {props.helperText} </FormHelperText>) : (
                    <FormErrorMessage className='error-text'>{props.errorText}</FormErrorMessage>
                )}

            </FormControl>
        </>
    )
}

FormInputAlt.propTypes = {
    dataTestId: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    leftElement: PropTypes.any,
    type: PropTypes.string,
    state: PropTypes.any,
    handleChange: PropTypes.func,
    helperText: PropTypes.string,
    errorText: PropTypes.string,
    errorCondition: PropTypes.bool,
    isRequired: PropTypes.bool,
    onBlur: PropTypes.func,
    defaultValue: PropTypes.any,
    name: PropTypes.string,
    isDisabled: PropTypes.bool,
  }

  export default FormInputAlt