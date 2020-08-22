package com.klayesports.modules.player;

import com.klayesports.modules.playerdata.QPlayerData;
import com.klayesports.modules.tag.QTag;
import com.klayesports.modules.tag.Tag;
import com.querydsl.core.QueryResults;
import com.querydsl.jpa.JPQLQuery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;
import java.util.Set;

public class PlayerRepositoryExtensionImpl extends QuerydslRepositorySupport implements PlayerRepositoryExtension {

  public PlayerRepositoryExtensionImpl() {
    super(Player.class);
  }

  @Override
  public Page<Player> findPagingPlayerByKeyword(Set<Tag> tags, Pageable pageable) {
    QPlayer player =  QPlayer.player;
    JPQLQuery<Player> query = from(player)
            .where(player.tags.any().in(tags))
            .leftJoin(player.tags, QTag.tag).fetchJoin()
            .leftJoin(player.playerData, QPlayerData.playerData).fetchJoin()
            .distinct();

    JPQLQuery<Player> pageableQuery = getQuerydsl().applyPagination(pageable, query);
    QueryResults<Player> playerQueryResults = pageableQuery.fetchResults();
    return new PageImpl<>(playerQueryResults.getResults(), pageable, playerQueryResults.getTotal());
  }

  @Override
  public List<Player> findByKeyword(Set<Tag> tags) {
    QPlayer player =  QPlayer.player;
    JPQLQuery<Player> query = from(player)
            .where(player.tags.any().in(tags))
            .leftJoin(player.tags, QTag.tag).fetchJoin()
            .leftJoin(player.playerData, QPlayerData.playerData).fetchJoin()
            .distinct();

    return query.fetch();
  }
}
