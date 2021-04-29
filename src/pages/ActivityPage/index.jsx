import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import ActivityHero from '../../components/ActivityHero'
import ActivityContentHead from "../../components/ActivityContentHead"
import ActivityContentBody from "../../components/ActivityContentBody"
import ActivityRelated from '../../components/ActivityRelated'

import './style.scss'

export default function ActivityPage() {
  
	const language = useSelector(state => state.language);
	const currency = useSelector(state => state.currency);

	const [ activitUuid, setActivitUuid ] = useState(null);
	const [ apiActivity, setApiActivity ] = useState([]);

	const getDeeplinks = async () => {
    const { data: response } = await axios.get(`https://fe-tui-apiproxy.musement.com/deeplinks?url=${btoa(window.location.pathname)}`)
		setActivitUuid(response.identifier);
  }

	useEffect(() => {
    getDeeplinks();
  }, []);

	useEffect(() => {
		if (activitUuid) {
      console.log(activitUuid)
			const api = ["", "media", "related-activities?limit=4"];
			Promise.all(api.map((activity) => {
				return axios.get(`https://fe-tui-apiproxy.musement.com/activities/${activitUuid}/${activity}`, {
					headers: {
						'Accept-Language': `${language}`,
						'x-musement-currency': `${currency}`,
						'x-musement-version': "3.4.0",
					}
				})
				})
			)
			.then((responses) => {
				const apiActivity = responses.map((response) => response.data)
				setApiActivity(apiActivity)
			});
		}
    
  }, [activitUuid, currency, language])
 
  return (
    <div>
			{apiActivity.length > 0 && 
				<div>
					<ActivityHero activities={apiActivity[0]} activitiesMedia={apiActivity[1]} />
					<div className='activity_content'>
				    <div className='activity_content__container'>
					    <ActivityContentHead data={apiActivity[0]} />
					    <ActivityContentBody data={apiActivity[0]} />
				    </div>
			    </div>					
          <ActivityRelated topActivities={apiActivity[2]}/>
				</div>
			}
		</div>
	);
}
