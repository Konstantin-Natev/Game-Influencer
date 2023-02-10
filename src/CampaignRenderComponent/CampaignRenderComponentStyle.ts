import { Grid, styled } from '@mui/material'
import { prefixClasses } from '../utils/utils'

const classes = {
    root: 'root',
    tableContainer: 'tableContainer',
    cellsHeader: 'cellsHeader',
    centerCellsBody: 'centerCellsBody',
    leftCellsBody: 'leftCellsBody',
}

prefixClasses('CampaignRenderComponent', classes)

export const StyledCampaign = styled(Grid)(({ theme }) => ({
    [`& .${classes.tableContainer}`]: {
        marginTop: '150px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '10px',
        padding: '10px',
        width: '900px',
        height: 'auto',
        marginBottom: '50px',
        marginLeft: '-45px',
    },

    [`& .${classes.cellsHeader}`]: {
        fontSize: '22px',
        fontWeight: 600,
    },

    [`& .${classes.centerCellsBody}`]: {
        fontSize: '18px',
        fontWeight: 400,
        textAlign: 'center',
    },

    [`& .${classes.leftCellsBody}`]: {
        fontSize: '18px',
        fontWeight: 400,
        textAlign: 'left',
    },
}))

export const campaignClasses = classes
