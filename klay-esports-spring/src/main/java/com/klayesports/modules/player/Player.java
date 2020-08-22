package com.klayesports.modules.player;

import com.klayesports.modules.playerdata.PlayerData;
import com.klayesports.modules.tag.Tag;
import com.klayesports.modules.team.Team;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

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

  @ManyToMany
  private Set<Tag> tags = new HashSet<>();
}
