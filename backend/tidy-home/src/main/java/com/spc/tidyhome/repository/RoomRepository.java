package com.spc.tidyhome.repository;

import com.spc.tidyhome.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
  Room findByName(String name);
}
