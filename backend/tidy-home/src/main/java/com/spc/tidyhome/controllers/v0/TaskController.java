package com.spc.tidyhome.controllers.v0;

import com.spc.tidyhome.entities.Task;
import com.spc.tidyhome.services.TaskService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;

@RestController
@RequestMapping("/api/v0/tasks")
public class TaskController {

  @Autowired
  private TaskService taskService;

  public TaskController(TaskService taskService) {
    this.taskService = taskService;
  }

  @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<List<Task>> getTasks() {
    return new ResponseEntity<List<Task>>(taskService.getAllTasks(), HttpStatus.OK);
  }

  @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Task> create(@RequestBody Task newTask) throws ServerException {
    Task task = taskService.save(newTask);

    if (null == task) {
      throw new ServerException("Task not created.");
    } else {
      return new ResponseEntity<>(task, HttpStatus.CREATED);
    }
  }

  @PutMapping("{id}")
  public ResponseEntity<Task> update(@PathVariable long id, @RequestBody Task taskDetails) throws EntityNotFoundException {
    Task updateTask = taskService.findById(id).orElseThrow(() -> new EntityNotFoundException());

    updateTask.setName(taskDetails.getName());

    taskService.save(updateTask);

    return new ResponseEntity<>(updateTask, HttpStatus.OK);
  }

  @DeleteMapping("{id}")
  public ResponseEntity delete(@PathVariable long id) throws EntityNotFoundException {
    Task deleteTask = taskService.findById(id).orElseThrow(() -> new EntityNotFoundException());

    taskService.delete(deleteTask);

    return new ResponseEntity(HttpEntity.EMPTY, HttpStatus.OK);

  }
}
