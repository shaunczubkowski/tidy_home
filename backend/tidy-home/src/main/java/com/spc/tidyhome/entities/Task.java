package com.spc.tidyhome.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.io.Serializable;

@Entity
@Table(name = "tasks")
public class Task implements Serializable {

  public Task(String name) {
    this.name = name;
  }

  public Task() {

  }

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO, generator = "seq")
  @GenericGenerator(name = "seq", strategy = "increment")
  private Long id;
  private String name;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Override
  public String toString() {
    return "Task{" +
      "id=" + id +
      ", name='" + name + '\'' +
      '}';
  }
}
