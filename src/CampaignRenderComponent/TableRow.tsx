import React from "react";

function TableRows ({ campaign }: any){

    return (
        <tr>
            <td className='campaign-title-body'>{campaign.title}</td>
            <td id='description-campaign-body' className='campaign-parameters-body'>{campaign.description}</td>
            <td id='during-campaign-body' className='campaign-parameters-body'>{campaign.campaignStart} - {campaign.campaignEnd}</td>
            <td className='campaign-parameters-body'>{campaign.budget}</td>
            <td className='campaign-parameters-body'>{campaign.paid}</td>
            <td className='campaign-parameters-body'>{campaign.language}</td>
        </tr>
    );

}

export default TableRows;