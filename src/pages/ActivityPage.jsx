import ActivityHero from '../components/ActivityHero'

export default function ActivityPage() {

	//deve arrivare come props
  const uuid = "47543853-76bc-4cbb-b4e1-4c2030f216f9"

  return (
    <div>
			<ActivityHero contentUuid={uuid} />
			<h1>Other ActivityPage...</h1>
		</div>
	);
}