import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Activity } from '../../../models/Activity';

@Component({
  selector: 'app-activity-edit-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './activity-edit-modal.html',
  styleUrl: './activity-edit-modal.css',
})
export class ActivityEditModal {
  @Input() activity!: Activity; // actividad a editar
  @Input() categories: any[] = []; // lista de categorías

  @Output() close = new EventEmitter<void>(); // evento para cerrar el modal
  @Output() save = new EventEmitter<any>(); // evento para guardar cambios

  form!: FormGroup; // formulario

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(this.activity.title, Validators.required),
      date: new FormControl(this.activity.date, Validators.required),
      duration: new FormControl(this.activity.duration),
      location: new FormControl(this.activity.location),
      capacity: new FormControl(this.activity.capacity),
      categoryId: new FormControl(this.activity.categoryId),
      description: new FormControl(this.activity.description),
      active: new FormControl(this.activity.active),
    });
  }

  /** Envía cambios */
  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
