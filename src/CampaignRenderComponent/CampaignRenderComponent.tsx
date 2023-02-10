import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { Campaign } from '../App';
import RowOfTable from './TableRows';
import {
    campaignClasses as classes,
    StyledCampaign,
} from './CampaignRenderComponentStyle';

function CampaignRenderComponent({ campaigns }: { campaigns: Campaign[] }) {
    return (
        <StyledCampaign>
            <TableContainer className={classes.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.cellsHeader}>
                                Campaign
                            </TableCell>
                            <TableCell
                                className={classes.cellsHeader}
                                sx={{ textAlign: 'center' }}
                            >
                                Description
                            </TableCell>
                            <TableCell className={classes.cellsHeader}>
                                During
                            </TableCell>
                            <TableCell className={classes.cellsHeader}>
                                Budget
                            </TableCell>
                            <TableCell className={classes.cellsHeader}>
                                Paid
                            </TableCell>
                            <TableCell className={classes.cellsHeader}>
                                Language
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {campaigns.map((row: Campaign) => (
                            <RowOfTable key={row.id} campaign={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledCampaign>
    );
}

export default CampaignRenderComponent;
