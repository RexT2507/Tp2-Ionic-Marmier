import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private camera: Camera, private router: Router) {}

  title: string;

  image: any = '';

  updateTitle() {
    this.title = 'Nouveau titre';
  }

  openCam() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {

      this.image = (window as any).Ionic.WebView.convertFileSrc(imageData);
     }, (err) => {

      alert('error ' + JSON.stringify(err));
     });
  }

  signOut() {
    this.router.navigate(['login']).then(() => {
      window.location.reload();
    });
  }

}
