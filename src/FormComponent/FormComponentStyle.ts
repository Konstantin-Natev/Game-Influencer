import { Grid, styled } from '@mui/material'
import { prefixClasses } from '../utils/utils'

const classes = {
    root: 'root',
    wrapContainer: 'wrapContainer',
    campaignForm: 'campaignForm',
    typographyLabel: 'typographyLabel',
    textField: 'textField',
    textArea: 'textArea',
    dataField: 'dataField',
    paidField: 'paidField',
    selectField: 'selectField',
    submitButton: 'submitButton',
    textError: 'textError',
}

prefixClasses('FormComponent', classes)

export const StyledForm = styled(Grid)(({ theme }) => ({
    [`&.${classes.root}`]: {
        color: 'white',
    },

    [`& .${classes.wrapContainer}`]: {
        position: 'relative',
        width: '800px',
        height: 'auto',
        borderRadius: '20px',
        padding: '40px',
        boxSizing: 'border-box',
        textAlign: 'center',
        background: '#3e4443',
        boxShadow: '0px 0px 32px 0px #32485e, -14px -14px 20px #191c21',
    },

    [`& .${classes.campaignForm}`]: {
        marginTop: '50px',
        alignItems: 'center',
    },

    [`& .${classes.typographyLabel}`]: {
        marginTop: '20px',
        marginBottom: '10px',
        fontSize: '25px',
    },

    [`& .${classes.textField}`]: {
        background: '#ecf0f3',
        padding: '10px',
        paddingLeft: '20px',
        width: '300px',
        height: '50px',
        marginTop: '10px',
        fontSize: '24px',
        borderRadius: '50px',
    },

    [`& .${classes.textArea}`]: {
        background: '#ecf0f3',
        height: '200px',
        borderRadius: '10px',
        fontSize: '16px',
    },

    [`& .${classes.dataField}`]: {
        background: '#ecf0f3',
        padding: '10px',
        paddingLeft: '20px',
        width: '200px',
        height: '50px',
        marginTop: '10px',
        fontSize: '20px',
        borderRadius: '50px',
    },

    [`& .${classes.paidField}`]: {
        justifyContent: 'center',
    },

    [`& .${classes.selectField}`]: {
        width: '300px',
        height: '30px',
        background: '#ecf0f3',
        padding: '25px',
        marginTop: '10px',
        fontSize: '22px',
        borderRadius: '50px',
    },

    [`& .${classes.submitButton}`]: {
        display: 'flex',
        background: '#778e9c',
        marginTop: '30px',
        height: '60px',
        width: '200px',
        borderRadius: '50px',
        color: 'white',
        fontSize: '22px',
    },

    [`& .${classes.textError}`]: {
        display: 'block',
        marginTop: '10px',
        color: 'red',
        fontWeight: '400',
        fontSize: '22px',
    },
}))

export const formClasses = classes
