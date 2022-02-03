import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  loading = new Subject<boolean>();

  constructor(private toastController: ToastController) {}

  async showMessage(message: string){
    const toast = await this.toastController.create({
      message,
      duration: 3000
    });
    toast.present();
   }
}
