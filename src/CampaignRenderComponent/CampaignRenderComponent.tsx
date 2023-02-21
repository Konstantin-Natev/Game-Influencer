import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import { Campaign } from '../App'
import RowOfTable from './TableRows'
import {
    campaignClasses as classes,
    StyledCampaign,
} from './CampaignRenderComponentStyle'
import { Hits } from 'react-instantsearch-dom'

function CampaignRenderComponent({ campaigns }: { campaigns: Campaign[] }) {
    const Hit = ({ hit }: { hit: Campaign }) => {
        return <RowOfTable key={hit.objectID} campaign={hit} />
    }

    return (
        <StyledCampaign>
            <TableContainer className={classes.tableContainer}>
                <Table>
                    <TableHead>
                        <Grid>
                            <TableRow sx={{ width: 900 }}>
                                <TableCell className={classes.cellsHeader}>
                                    Campaign
                                </TableCell>
                                <TableCell className={classes.centerCellHeader}>
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
                        </Grid>
                    </TableHead>
                    <TableBody>
                        <Hits hitComponent={Hit} />
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledCampaign>
    )
}

export default CampaignRenderComponent
