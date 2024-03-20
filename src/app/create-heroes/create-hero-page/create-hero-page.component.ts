import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from 'src/app/services/hero.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/services/notifications.service';
import { firstLetterUppercaseValidator } from 'src/app/common/validators/first-upper-case-validator';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-create-hero-page',
  templateUrl: './create-hero-page.component.html',
  styleUrls: ['./create-hero-page.component.css']
})
export class CreateHeroPageComponent {

  imageUploading = false;
  createForm: FormGroup;

  constructor( private heroService: HeroService, private fb: FormBuilder, private router: Router, private notificationsService: NotificationsService, private loadingService: LoadingService) {
    this.createForm = this.fb.group({
      name: ['', [Validators.required, firstLetterUppercaseValidator()]],
      universe: ['', Validators.required],
      description: [''],
      image: [''],
    });
  }

  onFileSelected(event: Event) {
    this.loadingService.show();
    this.imageUploading = true;
    const input = event.target as HTMLInputElement;
    this.heroService.uploadImage(input.files![0]).then((data) => {
      this.createForm.patchValue({
        image: data
      });
      this.imageUploading = false;
      this.loadingService.hide();
    });
    input.value = '';
  }

  deleteImage(){
    this.createForm.patchValue({
      image: ''
    })
  }

  async submit() {
    this.loadingService.show();
    let createData: any = { 
      name: this.createForm.value.name, 
      description: this.createForm.value.description,  
      universe: this.createForm.value.universe,
      image: this.createForm.value.image
    };

    this.heroService.createItem(createData).subscribe({
      next: () => {
        this.loadingService.hide();
        this.notificationsService.successNotification("Héroe creado correctamente");
        this.router.navigate(['/']);
      },
      error: (error) => console.error('Error al crear el ítem', error)
    });
  }

}
