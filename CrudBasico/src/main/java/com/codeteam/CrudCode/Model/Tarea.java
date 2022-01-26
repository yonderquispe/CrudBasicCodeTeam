/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.codeteam.CrudCode.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author yonder
 */
@Entity
@Table(name="Tb_Tarea")
public class Tarea {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="Id")
    private Integer Id;
    
    @Column(name="Tarea")
    private String Tarea;
    
    @Column(name="Finalizado")
    private Boolean Finalizado;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer Id) {
        this.Id = Id;
    }

    public String getTarea() {
        return Tarea;
    }

    public void setTarea(String Tarea) {
        this.Tarea = Tarea;
    }

    public Boolean getFinalizado() {
        return Finalizado;
    }

    public void setFinalizado(Boolean Finalizado) {
        this.Finalizado = Finalizado;
    }
    
}
