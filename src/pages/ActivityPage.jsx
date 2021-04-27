import ActivityHero from '../components/ActivityHero'
import ActivityContentHead from "../components/ActivityContentHead"
import ActivityRelated from '../components/ActivityRelated'
import {useSelector} from 'react-redux'

export default function ActivityPage() {
  
	const uuid = useSelector(state => state.uuid);
	//deve arrivare come props
 
  return (
    <div>
			<ActivityHero uuid={uuid} />
			<ActivityContentHead uuid={uuid}/>
			<ActivityRelated uuid={uuid}/>
		</div>
	);
}
