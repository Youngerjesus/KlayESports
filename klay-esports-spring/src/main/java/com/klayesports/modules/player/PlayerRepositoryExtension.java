package com.klayesports.modules.player;

import com.klayesports.modules.tag.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Transactional(readOnly = true)
public interface PlayerRepositoryExtension {
  Page<Player> findPagingPlayerByKeyword(Set<Tag> tags, Pageable pageable);

  List<Player> findByKeyword(Set<Tag> tags);
}
