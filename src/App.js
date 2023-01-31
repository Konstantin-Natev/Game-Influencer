import { useState } from 'react';
import './App.css';
import CampaignRenderComponent from './CampaignRenderComponent/CampaignRenderComponent';
import FormComponent from './FormComponent/FormComponent';


const campaign = [{
  _id: '1',
  title:'World of Warcraft',
  description: 'Cool game!sdasdasdasdasd sdadasd asdasdsadsa sdasdasd asdasda asdad',
  campaignStart: '01.01.2023',
  campaignEnd: '01.31.2023',
  budget: '1000',
  paid: 'yes',
  language: 'English',
}];

function App() {

  const [campaigns, setCampaign] = useState(campaign);
  
  const addCampaign = ({

    title,
    description,
    campaignStart,
    campaignEnd,
    budget,
    paid,
    language,
    _id,
  }
    ) =>{
    setCampaign([
      ...campaigns,
      {
        title,
        description,
        campaignStart,
        campaignEnd,
        budget,
        paid,
        language,
        _id,
      }])
  };

  return (
    <div className="App">
      <FormComponent addCampaign={addCampaign}/>
      <CampaignRenderComponent campaigns={campaigns}/>
    </div>
  );
}

export default App;
