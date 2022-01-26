/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.codeteam.CrudCode.Service;

import com.codeteam.CrudCode.Model.Tarea;
import java.util.List;

/**
 *
 * @author yonder
 */
public interface TareaService {
    public List<Tarea> findAll();
    public Tarea save(Tarea tarea);
    public Tarea findById(Integer id);
    public void delete(Integer id);
    
}
