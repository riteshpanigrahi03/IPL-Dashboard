import {React, useEffect,useState} from 'react';
import {useParams } from 'react-router-dom'
import { LatestMatch } from '../components/LatestMatch';
import { OtherMatches } from '../components/OtherMatches';

export const TeamPage = (props) => {
    const [team,setTeam] = useState({matches:[]});
    const {teamName} = useParams();

    useEffect(()=>{

        const fetchMatches = async () =>{
            const response = await fetch(`http://localhost:8095/team/${teamName}`);
            const data = await response.json();
            console.log(data);
            setTeam(data);
            //console.log(team);

        }
        fetchMatches();
    },[teamName]);
    if(!team || !team.teamName){
        return <h1>Team Not found</h1>
    }
    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            {/* <p>{team.matches[0]}</p> */}
            <LatestMatch teamName = {team.teamName} match={team.matches[0]}/>
            {team.matches.slice(1).map(match => <OtherMatches key={match.id} teamName={team.teamName} match={match} />)}
        </div>
    );
}
