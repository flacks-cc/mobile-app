import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  titulo = 'Agregar usuario';
  submitted = false;
  formUsuario: FormGroup;
  idCliente: any | null;

  constructor(public fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.formUsuario = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('[A-Za-zÁ-Úá-ú ]+')]],
      apellidoPaterno: ['', [Validators.required, Validators.pattern('[A-Za-zÁ-Úá-ú]+')]],
      apellidoMaterno: ['', Validators.pattern('[A-Za-zÁ-Úá-ú]+')],
      nombreUsuario: ['', Validators.required]
    });
    // this.idCliente = this.aRoute.snapshot.paramMap.get('idCliente');
  }

  ngOnInit(): void {
    this.agregarUsuario();
  }

  agregarUsuario() {

    // Marcar todos los controles como "touched" para que las validaciones se activen
    this.formUsuario.markAllAsTouched();

    // Valida que todos los campos del formulario sean correctos
    this.submitted = true;
    if (this.formUsuario.invalid) {
      return;
    }
  }

  // Validaciones
  getErrorText(fieldName: string): string {
    const field = this.formUsuario.get(fieldName);

    // Validaciones de campos obligatorios
    if (field?.hasError('required')) {
      if (fieldName === 'nombre') {
        return 'Su nombre es obligatorio.';
      } else if (fieldName === 'apellidoPaterno') {
        return 'Su apellido paterno es obligatorio.';
      } else if (fieldName === 'nombreUsuario') {
        return 'Su nombre de usuario es obligatorio.';
      }
    }

    // Validaciones de solo texto
    if (field?.hasError('pattern')) {
      if (fieldName === 'nombre') {
        return 'Su nombre solo puede contener letras.';
      } else if (fieldName === 'apellidoPaterno') {
        return 'Su apellido paterno solo puede contener letras.';
      } else if (fieldName === 'apellidoMaterno') {
        return 'Su apellido materno solo puede contener letras.';
      }
    }

    return '';
  }
}
