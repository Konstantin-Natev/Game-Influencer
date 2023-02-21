import { Grid, Link, Typography } from '@mui/material'
import { Campaign } from '../App'
import { campaignClasses as classes, StyledCampaign } from './CampaignItemStyle'

export function CampaignItem({
    hit,
    components,
}: {
    hit: Campaign
    components: any
}) {
    return (
        <StyledCampaign>
            <Link href={hit.url} className={classes.links}>
                {hit.title}
                <components.Highlight hit={hit} attribute="campaign" />
            </Link>
        </StyledCampaign>
    )
}
