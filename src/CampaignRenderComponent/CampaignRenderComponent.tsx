import { Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { CampaignPattern } from '../App';
import './CampaignRenderComponent.css';
import RowOfTable from './TableRows';

function CampaignRenderComponent({ campaigns }: {campaigns : CampaignPattern[]}){

    return(
        <TableContainer sx={{ width: 900 }} id='table-container' >
            <Table  >
                <TableHead >
                    <TableRow >
                        <TableCell sx={{fontSize: 22, fontWeight: 600}}>Campaign</TableCell>
                        <TableCell sx={{fontSize: 22, fontWeight: 600, textAlign:"center"}}>Description</TableCell>
                        <TableCell sx={{fontSize: 22, fontWeight: 600}}>During</TableCell>
                        <TableCell sx={{fontSize: 22, fontWeight: 600}}>Budget</TableCell>
                        <TableCell sx={{fontSize: 22, fontWeight: 600}}>Paid</TableCell>
                        <TableCell sx={{fontSize: 22, fontWeight: 600}}>Language</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {campaigns.map( (row : any) => <RowOfTable key={row._id} campaign={row}/>)}
                </TableBody>
            </Table>
        </TableContainer>

    );
}


export default CampaignRenderComponent;