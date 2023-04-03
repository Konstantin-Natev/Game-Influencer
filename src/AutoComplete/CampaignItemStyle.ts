import { Grid, styled } from '@mui/material'
import { prefixClasses } from '../utils/utils'

const classes = {
    root: 'root',
    links: 'links',
}

prefixClasses('CampaignRenderComponent', classes)

export const StyledCampaign = styled(Grid)(({ theme }) => ({
    [`& .${classes.links}`]: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '18px',
    },
}))

export const campaignClasses = classes
