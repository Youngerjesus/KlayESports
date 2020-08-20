package com.klayesports.modules.playerdata;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
@EqualsAndHashCode(of="id")
@NoArgsConstructor
@AllArgsConstructor
public class PlayerData {

  @Id @GeneratedValue
  private Long id;

  private String season;

  private int seasonYear;

  private String position;

  private int games;

  private float winRate;

  private float kda;

  private float avgKills;

  private float avgDeaths;

  private float avgAssists;

  private float csm;

  private int gpm;

  private float kp;

  private float dmg;

  private int dpm;

  private float vspm;

  private float avgWpm;

  private float avgWcpm;

  private float avgVwpm;

  private int gd15;

  private int csd15;

  private int xpd15;

  private float fb;

  private float fbVictim;

  private int pentaKills = 0;

  private int soloKills = 0;
}
