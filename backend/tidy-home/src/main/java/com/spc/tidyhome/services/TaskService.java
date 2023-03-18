package com.spc.tidyhome.services;

import com.spc.tidyhome.entities.Task;
import com.spc.tidyhome.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
  @Autowired
  private TaskRepository taskRepository;

  public TaskService(TaskRepository taskRepository) {
    this.taskRepository = taskRepository;
  }

  public List<Task> getAllTasks() {
    return taskRepository.findAll();
  }

  public Task save(Task task) {
    return taskRepository.save(task);
  }

  public Optional<Task> findById(long id) {
    return taskRepository.findById(id);
  }

  public void delete(Task task) {
    taskRepository.delete(task);
  }

}
