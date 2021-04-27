import ActivityHero from '../components/ActivityHero'
import ActivityContentHead from "../components/ActivityContentHead";
import ActivityRelated from '../components/ActivityRelated'

export default function ActivityPage() {

	//deve arrivare come props
  const uuid = "47543853-76bc-4cbb-b4e1-4c2030f216f9"

  return (
    <div>
			<ActivityHero contentUuid={uuid} />
			<ActivityContentHead />
      <ActivityRelated/>
		</div>
	);
}
