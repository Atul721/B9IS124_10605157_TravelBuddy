import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
  isLoading = false;
  isLogin = true;


  constructor(  private router: Router,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  onClick(){
    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Welcome...' })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/auth');
        }, 1500);
      });
  }

}
