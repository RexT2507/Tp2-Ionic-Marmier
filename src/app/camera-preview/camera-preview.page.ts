import { Component, OnInit, OnDestroy } from '@angular/core';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-camera-preview',
  templateUrl: './camera-preview.page.html',
  styleUrls: ['./camera-preview.page.scss'],
})
export class CameraPreviewPage implements OnInit, OnDestroy {

  image: any;
  // Aucun filtre par défaut
  color = 'none';
  // On met le zoom a 1 par défaut
  zoom = 1;
  // On met le flash à off par défaut
  flash = 'off';

  constructor(private cameraPreview: CameraPreview) { }


  ngOnInit() {
  }

  ngOnDestroy() {
   this.stopCamera();
  }

  // Démarrer la caméra
  startCamera() {
    this.cameraPreview.startCamera({
      x: 80,
      y: 80,
      width: 300,
      height: 300,
      toBack: false,
      previewDrag: true,
      tapPhoto: true
    });
  }

  // Arrêter la caméra
  stopCamera() {
   this.cameraPreview.stopCamera();
  }

  // Prendre une photo
  takePicture() {
    this.cameraPreview.takePicture({
      width: 1280,
      height: 1280,
      quality: 85
    }).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.image = 'assets/img/test.jpg';
    });
  }

  // Changer le mode de la caméra
  switchCamera() {
    this.cameraPreview.switchCamera();
  }

  // Chager le filtre de la caméra
  colorCameraEffect() {
    this.cameraPreview.setColorEffect(this.color);
  }

  // Changer le flash de la caméra
  flashCamera() {
    this.cameraPreview.setFlashMode(this.flash);
  }

  // Changer le zoom de la caméra
  zoomCamera() {
    this.cameraPreview.setZoom(this.zoom);
  }

  /* Afficher et cacher la caméra */
  show() {
    this.cameraPreview.show();
  }

  hide() {
    this.cameraPreview.hide();
  }

}
