import { Link } from '@mui/material'
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
            <Link href={hit.objectID} className={classes.links}>
                {hit.title}
                <components.Highlight hit={hit.title} attribute="campaign" />
            </Link>
        </StyledCampaign>
    )
}
