import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Campaign } from '../App';
import { campaignClasses as classes } from './CampaignRenderComponentStyle';

function RowOfTable({ campaign }: { campaign: Campaign }) {
    return (
        <TableRow>
            <TableCell className={classes.centerCellsBody}>
                {campaign.title}
            </TableCell>
            <TableCell className={classes.leftCellsBody}>
                {campaign.description}
            </TableCell>
            <TableCell className={classes.leftCellsBody}>
                {campaign.campaignStart} - {campaign.campaignEnd}
            </TableCell>
            <TableCell className={classes.centerCellsBody}>
                {campaign.budget}
            </TableCell>
            <TableCell className={classes.centerCellsBody}>
                {campaign.paid}
            </TableCell>
            <TableCell className={classes.centerCellsBody}>
                {campaign.language}
            </TableCell>
        </TableRow>
    );
}

export default RowOfTable;
