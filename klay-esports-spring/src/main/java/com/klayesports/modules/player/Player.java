package com.klayesports.modules.player;

import com.klayesports.modules.playerdata.PlayerData;
import com.klayesports.modules.team.Team;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter @EqualsAndHashCode(of="id")
@NoArgsConstructor
@AllArgsConstructor
public class Player{
  @Id @GeneratedValue
  private Long id;

  private String name;

  @OneToOne
  private PlayerData playerData;

  @ManyToOne
  private Team team;
}
