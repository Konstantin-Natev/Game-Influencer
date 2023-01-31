import React, { useState } from "react";
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

    const [error, setError] = useState({title:false, description:false});

    const handleValueChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;


        // if (name === 'title') {
        //     if(value.length > 20){
        //         setError(error.name = true);
        //     }else{

        //     }
        // }else if(name === 'description'){
        //     if(value.length > 200){
        //         setError(error.name = true);
        //     }
        // }

        setCampaignParametars({
            ...campaignParametars,[name]:value
        }); 
    };

    const onSubmitHeandler = (e) =>{
        e.preventDefault();

        addCampaign(campaignParametars);
    };

    return(
        <form id="campaign-form" method='POST' onSubmit={onSubmitHeandler}>
            <div className="container">

                <h1>Game Campaign</h1>
  
                <label htmlFor="name" className="label-title" >Name:</label>
                <input  type="text" id="campaign-title" name="title"  placeholder="Enter game name..." value={campaignParametars.title} onChange={handleValueChange}/> 
                {error ? <label className="error">Too much characters !</label>: ""}

                <label htmlFor="description" className="label-title" >Description:</label> 
                <textarea id="campaign-description" name="description"  placeholder=" Enter game description..." value={campaignParametars.description} onChange={handleValueChange} ></textarea>
                {[error.description] ? <label className="error">Too much characters !</label>: ""}

                <label htmlFor="during" className="label-title" >During Campaign:</label>
                <input type="date" id="campaign-start" name="campaignStart" value={campaignParametars.campaignStart} onChange={handleValueChange} min="1997-01-01" max="2030-12-31"/>
                <input type="date" id="campaign-start" name="campaignEnd"  value={campaignParametars.campaignEnd} onChange={handleValueChange} min="1997-01-02" max="2030-12-31"/>
                
                <label htmlFor="budget" className="label-title" >Budget:</label>
                <input type="text" id="campaign-budget" name="budget" placeholder="Enter campaign budget..." value={campaignParametars.budget} onChange={handleValueChange}/>
                
                <label htmlFor="paid" className="label-title" >Paid with Crypto:</label>
                <span className="buttons">
                    <input type="radio" className="campaign-paid" name="paid" value="yes" onChange={handleValueChange}/>
                    <label htmlFor="html" className="paid-decision">Yes</label>
                </span>

                <span className="buttons">
                    <input type="radio" className="campaign-paid" name="paid" value="no" onChange={handleValueChange}/>
                    <label htmlFor="html" className="paid-decision">No</label>
                </span>
           
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