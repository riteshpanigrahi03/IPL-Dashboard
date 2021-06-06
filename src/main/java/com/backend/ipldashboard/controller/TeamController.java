package com.backend.ipldashboard.controller;

import com.backend.ipldashboard.model.Match;
import com.backend.ipldashboard.model.Team;
import com.backend.ipldashboard.repo.MatchRepo;
import com.backend.ipldashboard.repo.TeamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
public class TeamController {

    @Autowired
    TeamRepo teamRepo;
    @Autowired
    MatchRepo matchRepo;

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        Team team =  teamRepo.findByTeamName(teamName);
        team.setMatches(matchRepo.findMatchedsByTeam(teamName,4));
        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);
        return this.matchRepo.getMatchesByTeamBetweenDates(
                teamName,
                startDate,
                endDate
        );
    }
}
