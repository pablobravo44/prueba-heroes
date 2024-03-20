import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { NotificationsService } from 'src/app/services/notifications.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-list-hero-page',
  templateUrl: './list-hero-page.component.html',
  styleUrls: ['./list-hero-page.component.css'],
})

export class ListHeroPageComponent implements OnInit {

  items: any[] = [];
  filterControl = new FormControl('');

  constructor(private heroService: HeroService, private notificationsService: NotificationsService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadInitialData();

    this.filterControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((value: any) => {
          this.loadingService.show();
          return this.heroService.getItems(value);
        })
      )
      .subscribe(data => {
        this.items = data;
        this.loadingService.hide();
      });
    }

  loadInitialData() {
    this.loadingService.show();
    this.heroService.getItems().subscribe(data => {
      this.items = data;
      this.loadingService.hide();
    });
  }

  refreshData(){
    this.loadingService.hide();
    this.notificationsService.successNotification("Héroe eliminado correctamente");
    this.heroService.getItems(this.filterControl.value!).subscribe(data => {
      this.items = data;
    });
  }

  deleteItem(itemID: any){
    this.loadingService.show();
    this.heroService.deleteItem(itemID).subscribe({
      next: () => this.refreshData(),
      error: (error) => console.error('Error al eliminar el ítem', error)
    });
  }

}