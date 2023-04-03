import {
    Box,
    FormControlLabel,
    Grid,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
} from '@mui/material'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { Campaign } from '../App'
import { formClasses as classes, StyledForm } from './FormComponentStyle'
import algoliasearch from 'algoliasearch'

interface DeclareError {
    title: string
    description: string
    campaignStart: string
    campaignEnd: string
    budget: string
    paid: string
}

const client = algoliasearch('74TTSJOEZC', '42f7d3b90af41b669ae6b9e72bbd98fd')
const index = client.initIndex('game_influencer_demo')

function FormComponent({ addCampaign }: { addCampaign: Function }) {
    const justCampaign: Campaign = {
        objectID: '',
        title: '',
        description: '',
        campaignStart: '',
        campaignEnd: '',
        budget: '',
        paid: '',
        language: 'English',
    }

    const errorsParameters = {} as DeclareError

    const [campaignParameters, setCampaignParameters] = useState(justCampaign)

    const [errors, setErrors] = useState(errorsParameters)

    const validate = (values: Campaign) => {
        const error = {} as DeclareError

        if (!values.title) {
            error.title = 'Campaign name field is require!'
        } else if (values.title.length > 20) {
            error.title = 'Campaign name must be 20 characters!'
        }

        if (!values.description) {
            error.description = 'Campaign description field is require!'
        } else if (values.description.length > 200) {
            error.title = 'Campaign name must be 20 characters!'
        }

        if (!values.campaignStart) {
            error.campaignStart = 'Start campaign date field is require!'
        }

        if (!values.campaignEnd) {
            error.campaignEnd = 'End campaign date field is require!'
        }

        if (!values.budget) {
            error.budget = 'Budget field is require!'
        } else if (Number(values.budget) > 10000) {
            error.budget = 'Budget must be up to 10 000'
        }

        if (!values.paid) {
            error.paid = 'Payment method is require!'
        }

        return error
    }

    const handleValueChange = (event: any) => {
        const name = event.target.name
        const value = event.target.value

        setCampaignParameters({
            ...campaignParameters,
            [name]: value,
        })
    }

    const onSubmitHandler = (event: any) => {
        event.preventDefault()

        const innerErrors = validate(campaignParameters)
        setErrors(innerErrors)

        if (!Object.keys(innerErrors).length) {
            addCampaign(campaignParameters)
            index.saveObjects([campaignParameters], {
                autoGenerateObjectIDIfNotExist: true,
            })
        }
    }

    return (
        <StyledForm className={classes.root} container>
            <form className={classes.campaignForm} method="POST">
                <Grid className={classes.wrapContainer}>
                    <Typography variant="h3">Game Campaign</Typography>

                    <Typography
                        variant="h5"
                        className={classes.typographyLabel}
                    >
                        Name:
                    </Typography>
                    <TextField
                        className={classes.textField}
                        variant="standard"
                        type="text"
                        placeholder="Enter game name..."
                        name="title"
                        value={campaignParameters.title}
                        onChange={handleValueChange}
                        required
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />
                    <Typography variant="h6" className={classes.textError}>
                        {errors.title}
                    </Typography>

                    <Typography
                        variant="h5"
                        className={classes.typographyLabel}
                    >
                        Description:
                    </Typography>
                    <TextareaAutosize
                        className={classes.textArea}
                        name="description"
                        placeholder=" Enter game description..."
                        value={campaignParameters.description}
                        onChange={handleValueChange}
                        style={{ width: 350, height: 200 }}
                    />
                    <Typography variant="h6" className={classes.textError}>
                        {errors.description}
                    </Typography>

                    <Typography
                        variant="h5"
                        className={classes.typographyLabel}
                    >
                        During Campaign:
                    </Typography>
                    <TextField
                        className={classes.dataField}
                        variant="standard"
                        type="date"
                        name="campaignStart"
                        value={campaignParameters.campaignStart}
                        onChange={handleValueChange}
                        required
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />
                    <Typography variant="h6" className={classes.textError}>
                        {errors.campaignStart}
                    </Typography>

                    <TextField
                        className={classes.dataField}
                        variant="standard"
                        type="date"
                        name="campaignEnd"
                        value={campaignParameters.campaignEnd}
                        onChange={handleValueChange}
                        required
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />
                    <Typography variant="h6" className={classes.textError}>
                        {errors.campaignEnd}
                    </Typography>

                    <Typography
                        variant="h5"
                        className={classes.typographyLabel}
                    >
                        Budget:
                    </Typography>
                    <TextField
                        className={classes.textField}
                        variant="standard"
                        type="text"
                        name="budget"
                        placeholder="Enter campaign budget..."
                        value={campaignParameters.budget}
                        onChange={handleValueChange}
                        required
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />
                    <Typography variant="h6" className={classes.textError}>
                        {errors.budget}
                    </Typography>

                    <Typography
                        variant="h5"
                        className={classes.typographyLabel}
                    >
                        Paid with Crypto:
                    </Typography>
                    <RadioGroup>
                        <FormControlLabel
                            className={classes.paidField}
                            value="yes"
                            name="paid"
                            control={<Radio />}
                            label="Yes"
                            onChange={handleValueChange}
                        />
                        <FormControlLabel
                            className={classes.paidField}
                            value="no"
                            name="paid"
                            control={<Radio />}
                            label="No"
                            onChange={handleValueChange}
                        />
                    </RadioGroup>
                    <Typography variant="h6" className={classes.textError}>
                        {errors.paid}
                    </Typography>

                    <Typography
                        variant="h5"
                        className={classes.typographyLabel}
                    >
                        Language:
                    </Typography>
                    <Select
                        className={classes.selectField}
                        name="language"
                        variant="standard"
                        value={campaignParameters.language}
                        onChange={handleValueChange}
                        inputProps={{
                            disableUnderline: true,
                        }}
                    >
                        <MenuItem value={'English'}>English</MenuItem>
                        <MenuItem value={'German'}>German</MenuItem>
                        <MenuItem value={'Spanish'}>Spanish</MenuItem>
                        <MenuItem value={'Japanese'}>Japanese</MenuItem>
                    </Select>

                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button
                            className={classes.submitButton}
                            type="submit"
                            variant="contained"
                            onClick={onSubmitHandler}
                        >
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </form>
        </StyledForm>
    )
}

export default FormComponent
