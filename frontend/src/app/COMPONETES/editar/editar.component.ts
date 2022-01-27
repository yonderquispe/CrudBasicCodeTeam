import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea, TareaService } from 'src/app/SERVICE/tarea.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:string="";
  tareaActual: Tarea={id:'',tarea:'',finalizado:false};
  constructor(
    private tareaService:TareaService,
    private antivateRouter: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id= this.antivateRouter.snapshot.params.id;
    this.tareaService.getUnaTarea(this.id).subscribe(
      res=>{
        this.tareaActual=res;
      },

      err=>console.log(err)
    );
  }
  
  guardad(){
    this.tareaService.editTarea(this.id, this.tareaActual).subscribe(
      res=>{
        this.router.navigate(['/inicio']);
      },

      err=>console.log(err)
    );
  }

}
