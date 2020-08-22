package com.klayesports.modules.player;

import com.klayesports.modules.tag.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;

@Service
@Transactional
@RequiredArgsConstructor
public class PlayerService {

  private final PlayerRepository playerRepository;

  public Set<Tag> getTags(Player player){
    Optional<Player> playerById = playerRepository.findById(player.getId());
    return playerById.orElseThrow().getTags();
  }

  public void addTag(Player player, Tag tag){
    Optional<Player> playerById = playerRepository.findById(player.getId());
    playerById.ifPresent(p -> p.getTags().add(tag));
  }

  public void removeTag(Player player, Tag tag){
    Optional<Player> playerById = playerRepository.findById(player.getId());
    playerById.ifPresent(p -> p.getTags().remove(tag));
  }


}
