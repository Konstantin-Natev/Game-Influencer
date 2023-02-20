import { useState } from 'react'
import './App.css'
import FormComponent from './FormComponent/FormComponent'
import CampaignRenderComponent from './CampaignRenderComponent/CampaignRenderComponent'
import React from 'react'
import { Grid } from '@mui/material'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch'
import {
    formClasses as classes,
    StyledForm,
} from './FormComponent/FormComponentStyle'

export interface Campaign {
    title: string
    description: string
    campaignStart: string
    campaignEnd: string
    budget: string
    paid: string
    language: string
    objectID: string
}

const defaultCampaign: Campaign = {
    title: 'World of Warcraft',
    description:
        'Cool game!sdasdasdasdasd dadas asdasdsadsa standard asdasdsadsa dadas',
    campaignStart: '01.01.2023',
    campaignEnd: '01.31.2023',
    budget: '1000',
    paid: 'yes',
    language: 'English',
    objectID: '2',
}

const searchClient = algoliasearch(
    '74TTSJOEZC',
    '5a2720ff92c39622063721be30263bb6'
)

function App() {
    const [campaigns, setCampaign] = useState([defaultCampaign])

    const addCampaign = (addCampaignPattern: Campaign) => {
        setCampaign([...campaigns, addCampaignPattern])
    }
    return (
        <StyledForm>
            <InstantSearch
                searchClient={searchClient}
                indexName="game_influencer_demo"
            >
                <Grid container xs={10} sm={11} lg={6}>
                    <Grid item>
                        <FormComponent addCampaign={addCampaign} />
                    </Grid>
                    <SearchBox
                        translations={{ placeholder: 'Search for Campaign' }}
                    />
                    <Grid item>
                        <CampaignRenderComponent campaigns={campaigns} />
                    </Grid>
                </Grid>
            </InstantSearch>
        </StyledForm>
    )
}

export default App
