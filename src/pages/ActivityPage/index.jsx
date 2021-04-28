import ActivityHero from '../../components/ActivityHero'
import ActivityContentHead from "../../components/ActivityContentHead";
import ActivityRelated from '../../components/ActivityRelated';
import ActivityContentBody from '../../components/ActivityContentBody';

import './style.scss';

export default function ActivityPage({ uuid }) {

  return (
    <div className="ActivityPage">
			<ActivityHero uuid={uuid} />
			<div className='activity_content'>
				<div className='activity_content__container'>
					<ActivityContentHead uuid={uuid}/>
					<ActivityContentBody uuid={uuid}/>
				</div>
			</div>
      <ActivityRelated/>
		</div>
	);
}
