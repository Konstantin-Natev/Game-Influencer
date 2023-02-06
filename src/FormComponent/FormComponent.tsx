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

    const onSubmitHeandler = (event: any) =>{
        event.preventDefault();

        const innerErrors = validate(campaignParameters);
        setErrors(innerErrors);

        if(!Object.keys(innerErrors).length){
            addCampaign(campaignParameters);
        }
    };

    return(
        <form id="campaign-form" method='POST' onSubmit={onSubmitHeandler}>
            <div className="container">

                <h1>Game Campaign</h1>
  
                <label htmlFor="name" className="label-title" >Name:</label>
                <input  type="text" id="campaign-title" name="title"  placeholder="Enter game name..." value={campaignParameters.title} onChange={handleValueChange}/> 
                <label className="error">{errors.title}</label>

                <label htmlFor="description" className="label-title" >Description:</label> 
                <textarea id="campaign-description" name="description"  placeholder=" Enter game description..." value={campaignParameters.description} onChange={handleValueChange} ></textarea>
                <label className="error">{errors.description}</label>

                <label htmlFor="during" className="label-title" >During Campaign:</label>
                <input type="date" id="campaign-start" name="campaignStart" value={campaignParameters.campaignStart} onChange={handleValueChange} min="1997-01-01" max="2030-12-31"/>
                <label className="error">{errors.campaignStart}</label>
                <input type="date" id="campaign-start" name="campaignEnd"  value={campaignParameters.campaignEnd} onChange={handleValueChange} min="1997-01-02" max="2030-12-31"/>
                <label className="error">{errors.campaignEnd}</label>

                <label htmlFor="budget" className="label-title" >Budget:</label>
                <input type="text" id="campaign-budget" name="budget" placeholder="Enter campaign budget..." value={campaignParameters.budget} onChange={handleValueChange}/>
                <label className="error">{errors.budget}</label>

                <label htmlFor="paid" className="label-title" >Paid with Crypto:</label>
                <span className="buttons">
                    <input type="radio" className="campaign-paid" name="paid" value="yes" onChange={handleValueChange}/>
                    <label htmlFor="html" className="paid-decision">Yes</label>
                </span>

                <span className="buttons">
                    <input type="radio" className="campaign-paid" name="paid" value="no" onChange={handleValueChange}/>
                    <label htmlFor="html" className="paid-decision">No</label>
                </span>
                <label className="error">{errors.paid}</label>
           
                <label htmlFor="language" className="label-title" >Language:</label>
                <select className="language-option" name="language" id="languages" form="languagesform" value={campaignParameters.language} onChange={handleValueChange}>
                    <option className="language-option" value="English">English</option>
                    <option className="language-option" value="German">German</option>
                    <option className="language-option" value="Spanish">Spanish</option>
                    <option className="language-option" value="Japanese">Japanese</option>
                </select>
                

                <input type="submit" id="submit-btn" value="Submit Form"/>
            </div>
        </form>
    )
}

export default FormComponent;