package com.spc.tidyhome.services;

import com.spc.tidyhome.entities.Room;
import com.spc.tidyhome.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {
  @Autowired
  private RoomRepository roomRepository;

  public RoomService(RoomRepository roomRepository) {
    this.roomRepository = roomRepository;
  }

  public List<Room> getAllRooms() {
    return roomRepository.findAll();
  }

  public Room save(Room room) {
    return roomRepository.save(room);
  }

  public Optional<Room> findById(long id) {
    return roomRepository.findById(id);
  }

  public void delete(Room room) {
    roomRepository.delete(room);
  }


}
