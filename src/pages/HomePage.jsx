import DestinationCard from '../components/DestinationCard';
import ActivityCard from '../components/ActivityCard';
import VideoBlock from '../components/VideoBlock';

export default function HomePage() {
    return (
        <div className="Home">
            <h1>HomePage</h1>
            <DestinationCard />
            <ActivityCard />
            <VideoBlock/>
        </div>
    );
}