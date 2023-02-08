import { useState } from 'react';
import './App.css';
import FormComponent from './FormComponent/FormComponent';
import CampaignRenderComponent from './CampaignRenderComponent/CampaignRenderComponent';
import React from 'react';
import { Grid } from '@mui/material';

export interface CampaignPattern {
  id: string,
  title: string,
  description: string,
  campaignStart: string,
  campaignEnd: string,
  budget: string,
  paid: string,
  language: string,
}; 

const campaign : CampaignPattern = {
  id: '1',
  title:'World of Warcraft',
  description: 'Cool game!sdasdasdasdasd sdadasd asdasdsadsa sdasdasd asdasda asdad',
  campaignStart: '01.01.2023',
  campaignEnd: '01.31.2023',
  budget: '1000',
  paid: 'yes',
  language: 'English',
};

function App() {

  const [campaigns, setCampaign] = useState([campaign]);
  
 const addCampaign  = (addCampaignPattern : CampaignPattern)  =>{
    setCampaign([
      ...campaigns,
      addCampaignPattern])
  };

  return (
    <Grid container xs={10} sm={11} lg={6} >
      <Grid item  >
      <FormComponent addCampaign={addCampaign}/>
      </Grid>

      <Grid item >
      <CampaignRenderComponent campaigns={campaigns}/>
      </Grid>
    </Grid>
  );
}

export default App;
