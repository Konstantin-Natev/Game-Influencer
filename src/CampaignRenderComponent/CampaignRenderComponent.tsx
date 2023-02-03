import './CampaignRenderComponent.css';
import TableRow from './TableRow';

function CampaignRenderComponent({ campaigns }: any){

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
                {campaigns.map( (row : any) => <TableRow key={row._id} campaign={row}/>)}
            </tbody>
        </table>
    );
}


export default CampaignRenderComponent;