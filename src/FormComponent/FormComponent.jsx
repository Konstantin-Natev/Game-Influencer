import React from "react";
import './FormComponents.css'

function FormComponent(){

    const onSubmitHeandler = (e) =>{

    }

    return(
        <form id="campaign" method='POST' onSubmit={onSubmitHeandler}>
            <div className="container">

                <h1>Game Campaign</h1>

                <label htmlFor="name" className="label-title" >Name:</label>
                <input type="text" id="campaign-name" name="name"  placeholder="Enter game name..."/>
                
                <label htmlFor="description" className="label-title" >Description:</label> 
                <textarea  role="textbox" id="campaign-description" name="description"  placeholder=" Enter game description..."></textarea>
                
                <label htmlFor="during" className="label-title" >During Campaign:</label>
                <input type="date" id="campaign-start" name="campaign-start" value="" min="1997-01-01" max="2030-12-31"/>
                <input type="date" id="campaign-start" name="campaign-end"  value="" min="1997-01-02" max="2030-12-31"/>
                
                <label htmlFor="budget" className="label-title" >Budget:</label>
                <input type="text" id="campaign-budget" name="budget" placeholder="Enter campaign budget..."/>
                
                <label htmlFor="paid" className="label-title" >Paid with Crypto:</label>
                <span className="buttons">
                    <input type="radio" className="campaign-paid" value=""/>
                    <label htmlFor="html" className="paid-decision">Yes</label>
                </span>

                <span className="buttons">
                    <input type="radio" className="campaign-paid" value=""/>
                    <label htmlFor="html" className="paid-decision">No</label>
                </span>
           
                <label htmlFor="language" className="label-title" >Language:</label>
                <select className="language-option" name="language" id="languages" form="languagesform" value="">
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