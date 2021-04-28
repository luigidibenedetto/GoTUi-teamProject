import { useState, useEffect } from "react";
//import { useSelector } from "react-redux";
import axios from "axios";

import ActivityHero from '../components/ActivityHero'
import ActivityContentHead from "../components/ActivityContentHead"
import ActivityRelated from '../components/ActivityRelated'

export default function ActivityPage() {
  
	const api = ["", "media", "related-activities?limit=4", "taxonomies" ];
	//const language = useSelector(state => state.language);

	const [ activitUuid, setActivitUuid ] = useState(null);
	const [ apiActivity, setApiActivity ] = useState([]);

	const getDeeplinks = async () => {
    const { data: response } = await axios.get(`https://fe-apiproxy.musement.com/deeplinks?url=${btoa(window.location.pathname)}`)
		setActivitUuid(response.identifier);
  }

	useEffect(() => {
    getDeeplinks();
  }, []);

	useEffect(() => {
		if (activitUuid) {
			Promise.all(api.map((activity) => {
				return axios.get(`https://fe-tui-apiproxy.musement.com/activities/${activitUuid}/${activity}`)
				// verificare la lingua
				})
			)
			.then((responses) => {
				const apiActivity = responses.map((response) => response.data)
				setApiActivity(apiActivity)
			});
		}
    
  }, [activitUuid])

	const uuid = ""
 
  return (
    <div>
			{apiActivity.length > 0 && 
				<div>
					<ActivityHero activities={apiActivity[0]} activitiesMedia={apiActivity[1]} />
					<ActivityContentHead uuid={uuid}/>
					<ActivityRelated topActivities={apiActivity[2]}/>
				</div>
			}
		</div>
	);
}
