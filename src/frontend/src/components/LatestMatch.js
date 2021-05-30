import React from 'react';
import { Link } from 'react-router-dom'
import "./LatestMatch.scss"

export const LatestMatch = ({ teamName, match }) => {
    if (!match) return null;
    // console.log(latestMatch);
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`
    const matchWon = teamName===match.matchWinner

    return (

        <div className={matchWon ? "LatestMatch won_card" : "LatestMatch lost_card"}>
            <div>
                <span className="vs">vs</span>
                <h1>
                    <Link to={otherTeamRoute}> {otherTeam}</Link>
                </h1>
                <h2 className="match_date">{match.date}</h2>
                <h3 className="match_venue">{match.venue}</h3>
                <h3 className="match_result">{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
            </div>
            <div className="additional_detail">
                <h3>First Innings</h3>
                <p>{match.team1}</p>
                <h3>Second Innings</h3>
                <p>{match.team2}</p>
                <h3>Man of the match</h3>
                <p>{match.playerOfMatch}</p>
                {/* <h3>Umpires</h3>
                <p>{match.umpire1}, {match.umpire2}</p> */}


            </div>
        </div>


    );
}
