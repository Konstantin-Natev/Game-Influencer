import { Box, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { CampaignPattern } from "../App";
import './FormComponents.css'


type DeclareError = {
    title: string,
    description: string,
    campaignStart: string,
    campaignEnd: string,
    budget: string,
    paid: string,
};

function FormComponent( { addCampaign }: any ){

    const campaignObj : CampaignPattern = {
        id: '',
        title: '',
        description: '',
        campaignStart: '',
        campaignEnd: '',
        budget: '',
        paid: '',
        language: 'English',
    }

    const errorsParameters = {} as DeclareError;

    const [campaignParameters, setCampaignParameters] = useState(campaignObj);  
    
    const [errors, setErrors] = useState(errorsParameters);

    const validate = (values: CampaignPattern) => {
        const error  = {} as DeclareError;

        if(!values.title){
            error.title = 'Campaign name field is require!';

        }else if(values.title.length > 20){
            error.title = 'Campaign name must be 20 characters!';
        }

        if(!values.description){
            error.description = 'Campaign description field is require!';

        }else if(values.description.length > 200){
            error.title = 'Campaign name must be 20 characters!';
        }

        if(!values.campaignStart){
            error.campaignStart = 'Start campaign date field is require!';
        }

        if(!values.campaignEnd){
            error.campaignEnd = 'End campaign date field is require!';
        }

        if(!values.budget){
            error.budget = 'Budget field is require!';  

        }else if(Number(values.budget) > 10000){
            error.budget = 'Budget must be up to 10 000';
        }

        if(!values.paid){
            error.paid = 'Payment method is require!';
        }  

        return error;        
    };

    const handleValueChange = (event: any) =>{
        const name = event.target.name;
        const value = event.target.value;

        setCampaignParameters({
            ...campaignParameters,
            [name]:value
        }); 
    };

    const onSubmitHandler = (event: any) =>{
        event.preventDefault();

        const innerErrors = validate(campaignParameters);
        setErrors(innerErrors);

        if(!Object.keys(innerErrors).length){
            addCampaign(campaignParameters);
        }
    };

    return(
        <form id="campaign-form" method='POST' >
            <div className="container">

                <h1>Game Campaign</h1>

                <Typography variant="h5" sx={{mt:3}}>Name:</Typography>
                <TextField
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
                <Typography variant="h6" color="error" sx={{mt:1}}>{errors.title}</Typography>

                <Typography variant="h5" sx={{mt:3}}>Description:</Typography>
                <TextareaAutosize
                    className="text-area"
                    name="description"
                    placeholder=" Enter game description..."
                    value={campaignParameters.description}
                    onChange={handleValueChange}
                    style={{ width: 350, height:200}}
                />
                <Typography variant="h6" color="error" sx={{mt:1}}>{errors.description}</Typography>
                
                <Typography variant="h5" sx={{mt:3}}>During Campaign:</Typography>
                <TextField
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
                <Typography variant="h6" color="error" sx={{mt:1}}>{errors.campaignStart}</Typography>

                <TextField
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
                <Typography variant="h6" color="error" sx={{mt:1}}>{errors.campaignEnd}</Typography>

                <Typography variant="h5" sx={{mt:3}}>Budget:</Typography>
                <TextField
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
                <Typography variant="h6" color="error" sx={{mt:1}}>{errors.budget}</Typography>

                <Typography variant="h5" sx={{mt:3}}>Paid with Crypto:</Typography>
                <RadioGroup >
                    <FormControlLabel className="campaign-paid" value="yes" name="paid" control={<Radio />} label="Yes" onChange={handleValueChange}/>
                    <FormControlLabel className="campaign-paid" value="no" name="paid" control={<Radio />} label="No" onChange={handleValueChange}/>
                </RadioGroup>
                <Typography variant="h6" color="error" sx={{mt:1}}>{errors.paid}</Typography>
           
                <Typography variant="h5" sx={{mt:3}}>Language:</Typography>
                <Select
                    id="languages"
                    name="language" 
                    variant="standard"
                    className="language-option"
                    value={campaignParameters.language} 
                    onChange={handleValueChange}    
                    inputProps={{
                        disableUnderline: true
                    }}
                >   
                    <MenuItem className="language-option" value={"English"}>English</MenuItem>
                    <MenuItem className="language-option" value={"German"}>German</MenuItem>
                    <MenuItem className="language-option" value={"Spanish"}>Spanish</MenuItem>
                    <MenuItem className="language-option" value={"Japanese"}>Japanese</MenuItem>
                </Select>
         
                <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                        <Button type="submit" variant="contained" id="submit-btn" onClick={onSubmitHandler}>Submit</Button>
                </Box>
            </div>
        </form>
    )
}

export default FormComponent;