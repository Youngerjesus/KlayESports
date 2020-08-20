package com.klayesports.modules.team;

import com.klayesports.modules.player.Player;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@EqualsAndHashCode(of="id")
@NoArgsConstructor
@AllArgsConstructor
public class Team {
  @Id @GeneratedValue
  private Long id;

  @Column(unique = true)
  private String name;

  @OneToMany(mappedBy = "team")
  private Set<Player> players;
}
