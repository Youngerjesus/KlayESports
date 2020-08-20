package com.klayesports.modules.account;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter @EqualsAndHashCode(of="id")
@NoArgsConstructor @AllArgsConstructor
public class Account {
  @Id @GeneratedValue
  private Long id;

  @Column(unique = true)
  private String email;

  @Column(unique = true)
  private String nickname;

  private String password;

  private String occupation;
}
