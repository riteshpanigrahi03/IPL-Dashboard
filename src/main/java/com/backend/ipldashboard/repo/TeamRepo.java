package com.backend.ipldashboard.repo;

import com.backend.ipldashboard.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TeamRepo extends JpaRepository<Team,Long> {

    Team findByTeamName(String teamName);
}
