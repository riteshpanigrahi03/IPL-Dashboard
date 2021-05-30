import React from 'react';
import {Link} from 'react-router-dom'

export const LatestMatch=({teamName,match}) => {
    if(!match) return null;
    // console.log(latestMatch);
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`

    return (
        <div>
            <h1>Latest Match</h1>
            
            <h1>vs
            <Link to= {otherTeamRoute}> {otherTeam}</Link>
            </h1>
            <h2>{match.date}</h2>
            <h3>{match.venue}</h3>
            <h3>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
        </div>
    );
}
