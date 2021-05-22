package com.backend.ipldashboard.controller;

import com.backend.ipldashboard.model.Team;
import com.backend.ipldashboard.repo.MatchRepo;
import com.backend.ipldashboard.repo.TeamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.awt.print.Pageable;

@RestController
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
}
