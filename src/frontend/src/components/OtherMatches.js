import React from 'react';
import { Link } from 'react-router-dom'
import "./OtherMatches.scss"

export const OtherMatches = ({ teamName, match }) => {
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`
    const matchWon = teamName === match.matchWinner
    return (
        <div className={matchWon ? "OtherMatches won_card" : "OtherMatches lost_card"}>
            <span className="vs">vs</span>
            <h2>
                <Link to={otherTeamRoute}> {otherTeam}</Link>
            </h2>

            <h4 className="match_result">{match.matchWinner} won by {match.resultMargin} {match.result}</h4>


        </div>
    );
}
