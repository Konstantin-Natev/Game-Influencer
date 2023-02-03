import { useState } from 'react';
import './App.css';
import FormComponent from './FormComponent/FormComponent';
import CampaignRenderComponent from './CampaignRenderComponent/CampaignRenderComponent';
import React from 'react';

interface CampaignPattern {
  _id: string,
  title: string,
  description: string,
  campaignStart: string,
  campaignEnd: string,
  budget: string,
  paid: string,
  language: string,
}; 


const campaign : CampaignPattern = {
  _id: '1',
  title:'World of Warcraft',
  description: 'Cool game!sdasdasdasdasd sdadasd asdasdsadsa sdasdasd asdasda asdad',
  campaignStart: '01.01.2023',
  campaignEnd: '01.31.2023',
  budget: '1000',
  paid: 'yes',
  language: 'English',
};

const addCampaignPattern : CampaignPattern = {
  _id: '',
  title: '',
  description: '',
  campaignStart: '',
  campaignEnd: '',
  budget: '',
  paid: '',
  language: '',
};

function App() {

  const [campaigns, setCampaign] = useState([campaign]);
  
  const addCampaign  = (addCampaignPattern : any)  =>{
    setCampaign([
      ...campaigns,
      addCampaignPattern])
  };

  return (
    <div className="App">
      <FormComponent addCampaign={addCampaign}/>
      <CampaignRenderComponent campaigns={campaigns}/>
    </div>
  );
}

export default App;
