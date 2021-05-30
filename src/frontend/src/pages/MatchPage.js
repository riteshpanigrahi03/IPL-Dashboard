import {React, useEffect,useState} from 'react';
import {useParams } from 'react-router-dom'
import { LatestMatch } from '../components/LatestMatch';
import { OtherMatches } from '../components/OtherMatches';

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
    },[]);

    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
        </div>
    );
}
