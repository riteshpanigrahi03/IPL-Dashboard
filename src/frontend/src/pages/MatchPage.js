import {React, useEffect,useState} from 'react';
import {useParams } from 'react-router-dom'
import { LatestMatch } from '../components/LatestMatch';
import { OtherMatches } from '../components/OtherMatches';
import "./MatchPage.scss"
import {YearSelector} from '../components/YearSelector'

export const MatchPage = (props) => {
    
    const [matches,setMatches] = useState([]);
    const {teamName,year} = useParams();
    useEffect(()=>{

        const fetchMatches = async () =>{
            const response = await fetch(`http://localhost:8095/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            console.log(data);
            setMatches(data);
            //console.log(team);

        }
        fetchMatches();
    },[teamName,year]);

    return (
        <div className="MatchPage">
            
            <div className="year_selector">
                <h3> Select Year </h3>
                <YearSelector teamName={teamName} />
            </div>
            
            <div>
            <h1>{teamName} matches for year {year}</h1>
            {matches.map(match => <LatestMatch teamName={teamName} match={match}></LatestMatch>)}
            </div>
            
        </div>
    );
}
