import React, { useState } from "react";
import './FormComponents.css'

function FormComponent(){

    const [campaign, setCampaign] = useState({
        title: '',
        description: '',
        campaignStart: '',
        campaignEnd: '',
        budget: '',
        paid: '',
        language: 'English',
    });  

    const handleValueChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setCampaign({
            ...campaign, [name]:value
        }); 
    };

    const onSubmitHeandler = (e) =>{
        e.preventDefault();

        console.log(campaign);
    };

    return(
        <form id="campaign-form" method='POST' onSubmit={onSubmitHeandler}>
            <div className="container">

                <h1>Game Campaign</h1>

                <label htmlFor="name" className="label-title" >Name:</label>
                <input type="text" id="campaign-name" name="title"  placeholder="Enter game name..." value={campaign.title} onChange={handleValueChange}/>
                
                <label htmlFor="description" className="label-title" >Description:</label> 
                <textarea id="campaign-description" name="description"  placeholder=" Enter game description..." value={campaign.description} onChange={handleValueChange}></textarea>
                
                <label htmlFor="during" className="label-title" >During Campaign:</label>
                <input type="date" id="campaign-start" name="campaignStart" value={campaign.campaignStart} onChange={handleValueChange} min="1997-01-01" max="2030-12-31"/>
                <input type="date" id="campaign-start" name="campaignEnd"  value={campaign.campaignEnd} onChange={handleValueChange} min="1997-01-02" max="2030-12-31"/>
                
                <label htmlFor="budget" className="label-title" >Budget:</label>
                <input type="text" id="campaign-budget" name="budget" placeholder="Enter campaign budget..." value={campaign.budget} onChange={handleValueChange}/>
                
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
                <select className="language-option" name="language" id="languages" form="languagesform" value={campaign.language} onChange={handleValueChange}>
                    <option className="language-option" value="english">English</option>
                    <option className="language-option" value="german">German</option>
                    <option className="language-option" value="spanish">Spanish</option>
                    <option className="language-option" value="japanese">Japanese</option>
                </select>

                <input type="submit" id="submit-btn" value="Submit Form"/>
            </div>
        </form>
    )
}

export default FormComponent;