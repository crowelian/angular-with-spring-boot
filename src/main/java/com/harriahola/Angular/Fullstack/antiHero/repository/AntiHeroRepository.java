package com.harriahola.Angular.Fullstack.antiHero.repository;

import com.harriahola.Angular.Fullstack.antiHero.entity.AntiHeroEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface AntiHeroRepository extends CrudRepository<AntiHeroEntity, UUID> {
}
