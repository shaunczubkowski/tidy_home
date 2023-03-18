package com.spc.tidyhome.controllers.v0;

import com.spc.tidyhome.entities.Room;
import com.spc.tidyhome.services.RoomService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;

@RestController
@RequestMapping("/api/v0/rooms")
public class RoomController {

  @Autowired
  private RoomService roomService;

  public RoomController(RoomService roomService) {
    this.roomService = roomService;
  }

  @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<List<Room>> getRooms() {
    return new ResponseEntity<List<Room>>(roomService.getAllRooms(), HttpStatus.OK);
  }

  @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Room> create(@RequestBody Room newRoom) throws ServerException {
    Room room = roomService.save(newRoom);

    if (null == room) {
      throw new ServerException("Room not created.");
    } else {
      return new ResponseEntity<>(room, HttpStatus.CREATED);
    }
  }

  @PutMapping("{id}")
  public ResponseEntity<Room> update(@PathVariable long id, @RequestBody Room roomDetails) throws EntityNotFoundException {
    Room updateRoom = roomService.findById(id).orElseThrow(() -> new EntityNotFoundException());

    updateRoom.setName(roomDetails.getName());
    updateRoom.setActive(roomDetails.getActive());

    roomService.save(updateRoom);

    return new ResponseEntity<>(updateRoom, HttpStatus.OK);
  }

  @DeleteMapping("{id}")
  public ResponseEntity delete(@PathVariable long id) throws EntityNotFoundException {
    Room deleteRoom = roomService.findById(id).orElseThrow(() -> new EntityNotFoundException());

    roomService.delete(deleteRoom);

    return new ResponseEntity(HttpEntity.EMPTY, HttpStatus.OK);
  }
}
