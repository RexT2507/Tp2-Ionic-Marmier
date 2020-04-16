import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import Coord from '../models/Coord';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private camera: Camera,
    private router: Router,
    private geolocation: Geolocation,
    private localNotifications: LocalNotifications
  ) {}

  title: string;

  image: any = '';

  latitude: any[] = [];
  longitude: any[] = [];

  coord: Coord;

  updateTitle() {
    this.title = 'Nouveau titre';
  }

  openCam() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
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

  geoLoc() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    const watch = this.geolocation.watchPosition();
    watch.subscribe(
      (data) => {
        this.latitude.push(data.coords.latitude);
        console.log(this.latitude);
        this.longitude.push(data.coords.longitude);
        console.log(this.longitude);
     });
  }

  regNotification(time: number) {
    this.localNotifications.schedule({
      title: `Notification de ${time}`,
      text: `Tp noté Ionic Ynov`,
      trigger: {
        at: new Date(
          new Date().getTime() + time
        )
      },
    });
  }


}
