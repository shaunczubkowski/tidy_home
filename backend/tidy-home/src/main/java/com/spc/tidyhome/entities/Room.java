package com.spc.tidyhome.entities;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "rooms")
public class Room implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private Boolean active;

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

  public Boolean getActive() {
    return active;
  }

  public void setActive(Boolean active) {
    this.active = active;
  }

  @Override
  public String toString() {
    return "room{" +
      "id=" + id +
      ", name='" + name + '\'' +
      ", active=" + active +
      '}';
  }
}
