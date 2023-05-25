import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  formularioValido = false;
  
  constructor(private router: Router) {}

  validarFormulario() {
    this.formularioValido = this.nombre.trim() !== '' && this.email.trim() !== '';
  }
  
  onSubmit() {
    this.router.navigate(['/resultado'], { queryParams: { nombre: this.nombre, email: this.email } });
  }
  
  confirmarEnvio() {
    if (confirm('¿Estás seguro de enviar el formulario?')) {
      this.onSubmit();
    }
  }  
  
}
