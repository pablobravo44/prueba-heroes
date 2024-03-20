import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from 'src/app/services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/services/notifications.service';
import { firstLetterUppercaseValidator } from 'src/app/common/validators/first-upper-case-validator';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-edit-hero-page',
  templateUrl: './edit-hero-page.component.html',
  styleUrls: ['./edit-hero-page.component.css']
})
export class EditHeroPageComponent {

  currentID: string = "";
  imageUploading = false;
  editForm: FormGroup;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private fb: FormBuilder, private router: Router, private notificationsService: NotificationsService, private loadingService: LoadingService) {
    this.loadingService.show();
    this.currentID = this.route.snapshot.paramMap.get('id')!;
    this.editForm = this.fb.group({
      name: ['', [Validators.required, firstLetterUppercaseValidator()]],
      universe: ['', Validators.required],
      description: [''],
      image: [''],
    });
  }

  ngOnInit() {
    this.heroService.getItem(this.currentID).subscribe((data: any) => {
      if (data) {
        this.editForm.patchValue({
          name: data[0].name,
          universe: data[0].universe,
          description: data[0].description,
          image: data[0].image,
        });
        this.loadingService.hide();
      }
    });
  }

  onFileSelected(event: Event) {
    this.imageUploading = true;
    const input = event.target as HTMLInputElement;
    this.heroService.uploadImage(input.files![0]).then((data) => {
      this.editForm.patchValue({
        image: data
      });
      this.imageUploading = false;
    });
    input.value = '';
  }

  deleteImage(){
    this.editForm.patchValue({
      image: ''
    })
  }

  async submit() {
    this.loadingService.show();
    let editData: any = { 
      name: this.editForm.value.name, 
      description: this.editForm.value.description,  
      universe: this.editForm.value.universe,
      image: this.editForm.value.image
    };

    this.heroService.updateItem(this.currentID, editData).subscribe({
      next: () => {
        this.loadingService.hide();
        this.notificationsService.successNotification("Héroe editado correctamente")
        this.router.navigate(['/'])
      },
      error: (error) => console.error('Error al editar el ítem', error)
    });
  }

}
