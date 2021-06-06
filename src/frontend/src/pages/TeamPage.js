import './TeamPage.scss';
import { React, useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom'
import { LatestMatch } from '../components/LatestMatch';
import { OtherMatches } from '../components/OtherMatches';
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage = (props) => {
    const [team, setTeam] = useState({ matches: [] });
    const { teamName } = useParams();
    const year = process.env.REACT_APP_DATA_END_YEAR;


    useEffect(() => {

        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8095/team/${teamName}`);
            const data = await response.json();
            console.log(data);
            setTeam(data);
            //console.log(team);

        }
        fetchMatches();
    }, [teamName]);
    if (!team || !team.teamName) {
        return <h1>Team Not found</h1>
    }
    return (
        <div className="TeamPage">
            <div className="team_name_section">
                {/* Add logo */}
                <h1 className="teamName">{team.teamName}</h1>
            </div >
            <div className="win_loss_section">
                <PieChart
                    data={[
                        { title: 'Loss', value: team.totalMatches-team.totalWins, color: '#a83232' },
                        { title: 'Wins', value: team.totalWins, color: '#32a868' },
                       
                    ]}
                />
            </div>
            <div className="latest_match_section">
                <h3>Latest Match</h3>
                <LatestMatch teamName={team.teamName} match={team.matches[0]} />
            </div>
            {team.matches.slice(1).map(match => <OtherMatches key={match.id} teamName={team.teamName} match={match} />)}
            <div className="more_matches">
            <Link to={`/teams/${teamName}/matches/${year}`}>More</Link>
            </div>
        </div>
    );
}
