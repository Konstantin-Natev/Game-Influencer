import React, { useEffect, useState } from "react";
import './FormComponents.css'

function FormComponent( {addCampaign} ){
    
    const [campaignParametars, setCampaignParametars] = useState({
        title: '',
        description: '',
        campaignStart: '',
        campaignEnd: '',
        budget: '',
        paid: '',
        language: 'English',
    });  

    const [error, setError] = useState({});

    let isNoError = true;

    useEffect(() =>{
        console.log(error);
        if(Object.keys(error).length === 0){
            isNoError = true;
        }else if(Object.keys(error).length >= 1){
            isNoError = false;
        }
    },[error]);


    const validate = (values) => {
        const errors = {};

        if(!values.title){
            errors.title = 'Campaign name field is require!';
            isNoError = false;
        }else if(values.title.length > 20){
            errors.title = 'Campaign name must be 20 characters!';
            isNoError = false;
        }

        if(!values.description){
            errors.description = 'Campaign description field is require!';
            isNoError = false;
        }else if(values.description.length > 200){
            errors.title = 'Campaign name must be 20 characters!';
            isNoError = false;
        }

        if(!values.campaignStart){
            errors.campaignStart = 'Start campaign date field is require!';
            isNoError = false;
        }

        if(!values.campaignEnd){
            errors.campaignEnd = 'End campaign date field is require!';
            isNoError = false;
        }

        if(!values.budget){
            errors.budget = 'Budget field is require!';
            isNoError = false;
        }else if(Number(values.budget) > 10000){
            errors.budge = 'Budget must be up to 10 000';
            isNoError = false;
        }

        if(!values.paid){
            errors.paid = 'Payment method is require!';
            isNoError = false;
        }  
        
        return errors;        
    };

    const handleValueChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setCampaignParametars({
            ...campaignParametars,[name]:value
        }); 
    };

    const onSubmitHeandler = (e) =>{
        e.preventDefault();

        setError(validate(campaignParametars));

        if (isNoError) {
            addCampaign(campaignParametars);
        }
    };

    return(
        <form id="campaign-form" method='POST' onSubmit={onSubmitHeandler}>
            <div className="container">

                <h1>Game Campaign</h1>
  
                <label htmlFor="name" className="label-title" >Name:</label>
                <input  type="text" id="campaign-title" name="title"  placeholder="Enter game name..." value={campaignParametars.title} onChange={handleValueChange}/> 
                <label className="error">{error.title}</label>

                <label htmlFor="description" className="label-title" >Description:</label> 
                <textarea id="campaign-description" name="description"  placeholder=" Enter game description..." value={campaignParametars.description} onChange={handleValueChange} ></textarea>
                <label className="error">{error.description}</label>

                <label htmlFor="during" className="label-title" >During Campaign:</label>
                <input type="date" id="campaign-start" name="campaignStart" value={campaignParametars.campaignStart} onChange={handleValueChange} min="1997-01-01" max="2030-12-31"/>
                <label className="error">{error.campaignStart}</label>
                <input type="date" id="campaign-start" name="campaignEnd"  value={campaignParametars.campaignEnd} onChange={handleValueChange} min="1997-01-02" max="2030-12-31"/>
                <label className="error">{error.campaignEnd}</label>

                <label htmlFor="budget" className="label-title" >Budget:</label>
                <input type="text" id="campaign-budget" name="budget" placeholder="Enter campaign budget..." value={campaignParametars.budget} onChange={handleValueChange}/>
                <label className="error">{error.budget}</label>

                <label htmlFor="paid" className="label-title" >Paid with Crypto:</label>
                <span className="buttons">
                    <input type="radio" className="campaign-paid" name="paid" value="yes" onChange={handleValueChange}/>
                    <label htmlFor="html" className="paid-decision">Yes</label>
                </span>

                <span className="buttons">
                    <input type="radio" className="campaign-paid" name="paid" value="no" onChange={handleValueChange}/>
                    <label htmlFor="html" className="paid-decision">No</label>
                </span>
                <label className="error">{error.paid}</label>
           
                <label htmlFor="language" className="label-title" >Language:</label>
                <select className="language-option" name="language" id="languages" form="languagesform" value={campaignParametars.language} onChange={handleValueChange}>
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