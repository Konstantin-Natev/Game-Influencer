import React from 'react'
import { useState } from 'react'
import './App.css'
import FormComponent from './FormComponent/FormComponent'
import CampaignRenderComponent from './CampaignRenderComponent/CampaignRenderComponent'
import { Grid } from '@mui/material'
import { InstantSearch, SearchBox } from 'react-instantsearch-dom'

import algoliasearch from 'algoliasearch'
import { StyledForm } from './FormComponent/FormComponentStyle'
import '@algolia/autocomplete-theme-classic'
import { Autocomplete } from './AutoComplete/AutoComplete'
import { getAlgoliaResults } from '@algolia/autocomplete-js'
import { CampaignItem } from './AutoComplete/CampaignItem'
import instantsearch from 'instantsearch.js'
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions'

export interface Campaign {
    [x: string]: string | undefined
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
    '42f7d3b90af41b669ae6b9e72bbd98fd'
)

const index = searchClient.initIndex('game_influencer_demo')

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

                    <Autocomplete
                        openOnFocus={true}
                        placeholder="Search..."
                        getSources={({ query }: { query: string }) => [
                            {
                                sourceId: 'campaign',
                                getItems() {
                                    return getAlgoliaResults({
                                        searchClient,
                                        queries: [
                                            {
                                                indexName:
                                                    'game_influencer_demo',
                                                query,
                                            },
                                        ],
                                    })
                                },
                                templates: {
                                    item({
                                        item,
                                        components,
                                    }: {
                                        item: Campaign
                                        components: any
                                    }) {
                                        return (
                                            <CampaignItem
                                                hit={item}
                                                components={components}
                                            />
                                        )
                                    },
                                },
                            },
                        ]}
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
