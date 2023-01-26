
function FormComponent(){



    return(
        <form id="campaign" method='POST'>
            <div className="container">

                <h1>Game Campaign</h1>

                <label htmlFor="name" className="label-title" >Name:</label>
                <input type="text" id="campaign-name" placeholder="Enter game name..."/>
                
                <label htmlFor="description" className="label-title" >Description:</label> 
                <input type="text" id="campaign-description" placeholder="Enter game description..."/>
                
                 <label htmlFor="during" className="label-title" >During Campaign:</label>
                <input type="data" id="campaign-start" name="datestart"/>
                <input type="data" id="campaign-start" name="dateend"/>
                
                <label htmlFor="budget" className="label-title" >Budget:</label>
                <input type="text" id="campaign-budget" placeholder="Enter campaign budget..."/>
                
                <label htmlFor="paid" className="label-title" >Paid with Crypto:</label>
                <div className="radio-btn-container">

                <span className="buttons">

                <input type="radio" id="campaign-paid" value="Yes"/>
                <label htmlFor="html">Yes</label>
                </span>

                <span className="buttons">

                <input type="radio" id="campaign-paid" value="No"/>
                <label htmlFor="html">No</label>
                </span>
                </div>


                <label htmlFor="language" className="label-title" >Language:</label>
                <div className="radio-btn-container">

                    <span className="buttons">
                    <input type="radio" id="campaign-language" value="English"/>
                    <label htmlFor="html" className="label-language" >English</label>
                    </span>

                    <span className="buttons">
                    <input type="radio" id="campaign-language" value="German"/>
                    <label htmlFor="html" className="label-language" >German</label>
                    </span>

                    <span className="buttons">
                    <input type="radio" id="campaign-language" value="Spanish"/>
                    <label htmlFor="html" className="label-language" >Spanish</label>
                    </span>

                    <span className="buttons">
                    <input type="radio" id="campaign-language" value="Japanese"/>
                    <label htmlFor="html" className="label-language" >Japanese</label>
                    </span>
                </div>



            </div>
        </form>
    )
}

export default FormComponent;