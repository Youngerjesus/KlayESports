package com.klayesports.modules.tag;

import lombok.*;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@EqualsAndHashCode(of="id")
@NoArgsConstructor
@AllArgsConstructor
public class Tag {

  @Id @GeneratedValue
  private Long id;

  @Column(unique = true, nullable = false)
  private String title;
}
