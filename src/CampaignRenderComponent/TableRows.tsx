import { TableCell, TableRow } from "@mui/material";
import React from "react";

function RowOfTable ({ campaign }: any){

    return (
        <TableRow >
            <TableCell sx={{fontSize: 18, fontWeight:400, textAlign: "center"}} >{campaign.title}</TableCell>
            <TableCell sx={{fontSize: 18, fontWeight:400 }} id='description-campaign-body' >{campaign.description}</TableCell>
            <TableCell sx={{fontSize: 18, fontWeight:400 }} id='during-campaign-body' >{campaign.campaignStart} - {campaign.campaignEnd}</TableCell>
            <TableCell sx={{fontSize: 18, fontWeight:400, textAlign: "center"}} >{campaign.budget}</TableCell>
            <TableCell sx={{fontSize: 18, fontWeight:400, textAlign: "center"}} >{campaign.paid}</TableCell>
            <TableCell sx={{fontSize: 18, fontWeight:400, textAlign: "center"}} >{campaign.language}</TableCell>
        </TableRow>
    ); 
}


// className='campaign-title-body'
export default RowOfTable;