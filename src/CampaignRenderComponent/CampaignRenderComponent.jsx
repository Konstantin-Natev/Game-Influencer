import { useState } from 'react';
import './CampaignRenderComponent.css';
// import TableRows from './TableRows';


const campaign = [{
    title:'World of Warcraft',
    description: 'Cool game!sdasdasdasdasd sdadasd asdasdsadsa sdasdasd asdasda asdad',
    campaignStart: '01.01.2023',
    campaignEnd: '01.31.2023',
    budget: '1000',
    paid: 'yes',
    language: 'English',
}];

function CampaignRenderComponent(){
    const [campaigns, setCampaigns] = useState(campaign);

    const tableRows = campaigns.map((row) => {
        return (
            <tr>
                <td className='campaign-title-body'>{row.title}</td>
                <td id='description-campaign-body' className='campaign-parameters-body'>{row.description}</td>
                <td id='during-campaign-body' className='campaign-parameters-body'>{row.campaignStart} - {row.campaignEnd}</td>
                <td className='campaign-parameters-body'>{row.budget}</td>
                <td className='campaign-parameters-body'>{row.paid}</td>
                <td className='campaign-parameters-body'>{row.language}</td>
            </tr>
        );
    });
    
    return(
        <table className='table-container'> 
            <thead>
            <tr>
                <td className='campaign-title-head'>Campaign</td>
                <td id='description-campaign-head' className='campaign-parameters-head'>Description</td>
                <td id='during-campaign-head' className='campaign-parameters-head'>During</td>
                <td className='campaign-parameters-head'>Buget</td>
                <td className='campaign-parameters-head'>Paid</td>
                <td className='campaign-parameters-head'>Language</td>
            </tr>
            </thead>
            <tbody>
                {/* <TableRows campaign={campaigns}/> */}
                {tableRows}
            </tbody>
        </table>
    );
}


export default CampaignRenderComponent;