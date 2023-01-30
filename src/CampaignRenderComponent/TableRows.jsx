function TableRows ({ campaign }){
    campaign.map((row) =>{

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

}

export default TableRows;