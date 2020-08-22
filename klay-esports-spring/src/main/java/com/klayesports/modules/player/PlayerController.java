package com.klayesports.modules.player;

import com.klayesports.modules.tag.Tag;
import com.klayesports.modules.tag.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequiredArgsConstructor
public class PlayerController {

  private final PlayerRepository playerRepository;
  private final TagRepository tagRepository;

  @GetMapping("/search/{keyword}")
  public List<Player> searchPlayers(@PathVariable String keyword){
    Tag tag = tagRepository.findByTitle(keyword);

    Set<Tag> tags = new HashSet<>();
    tags.add(tag);


    List<Player> players = playerRepository.findByKeyword(tags);
    return players;
  }
}
