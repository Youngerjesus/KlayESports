package com.klayesports.modules.player;

import com.klayesports.modules.tag.Tag;
import com.klayesports.modules.tag.TagRepository;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.core.ContainerBase;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.condition.DisabledIfSystemProperties;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
@RunWith(SpringRunner.class)
@RequiredArgsConstructor
public class PlayerControllerTest {

  @Autowired TagRepository tagRepository;
  @Autowired PlayerRepository playerRepository;
  @Autowired PlayerService playerService;

  @Test
  @DisplayName("Search Player By Keyword")
  public void searchPlayer(){
    Tag tag1 = tagRepository.findByTitle("딜링머신");
    Tag tag2 = tagRepository.findByTitle("넥서스");
    Optional<Player> player = playerRepository.findById(1L);
    Set<Tag> tags = new HashSet<>();
    tags.add(tag1);
    tags.add(tag2);

    playerService.addTag(player.orElseThrow(), tag1);
    playerService.addTag(player.orElseThrow(), tag2);

    List<Player> players = playerRepository.findByKeyword(tags);
    players.forEach(playerSearched -> {
      System.out.println("=================");
      System.out.println(playerSearched.getName());
      playerSearched.getTags().forEach(playerTag -> {
        System.out.println(playerTag.getTitle());
      });
    });
  }
}