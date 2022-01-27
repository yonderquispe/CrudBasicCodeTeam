import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/SERVICE/tarea.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  lista:any=[];
  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.listarTareas();
  }

  listarTareas()
  {
    this.tareaService.getTareas().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:string)
  {
    this.tareaService.deleteTarea(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );
  }

}
