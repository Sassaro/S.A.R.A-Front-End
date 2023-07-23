/* eslint-disable no-unused-vars */
import { FormControl, FormLabel,Input,FormHelperText,Flex,FormErrorMessage, InputGroup } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import "./FormInput.css"

export const FormInput = (props) => {

    return (
        <>
            <FormControl isRequired={props.isRequired} isInvalid={props.errorCondition}>
                <form className="form">
                    <div className="form-group">
                        <input data-testid={props.dataTestId} value={props.state} onChange={props.handleChange} type={props.type} className="form-input" placeholder=" "/>
                        <label className={"form-label"}>{ props.label }</label>
                    </div>
                </form>             
                {!props.errorCondition ? 
                <FormHelperText className='helper-text'> {props.helperText} </FormHelperText> : 
                    <FormErrorMessage data-testid={props.dataTestIdErrorText} className='error-text'>{props.errorText}</FormErrorMessage>
                }

            </FormControl>
        </>
    )
}

FormInput.propTypes = {
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
    dataTestIdErrorText: PropTypes.string,
    labelColor: PropTypes.string,
  }
  
  export default FormInput