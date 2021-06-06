import { React, useEffect, useState } from 'react';
import { TeamTile } from '../components/TeamTile';
import './HomePage.scss';


export const  HomePage =(props) => {
    const [teams, setTeams] = useState([]);
    
    useEffect(() => {

        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8095/teams`);
            const data = await response.json();
            console.log(data);
            setTeams(data);
            //console.log(team);

        }
        fetchMatches();
    }, []);
    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app_name">IPL Dashboard</h1>
            </div>
            <div className="team_grid">
                { teams.map(team => <TeamTile key={team.id} teamName={team.teamName} />)}
            </div>
        </div>
    );
}

