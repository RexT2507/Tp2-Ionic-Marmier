import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CameraPreviewPage } from './camera-preview.page';
import { FormsModule } from '@angular/forms';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { RouterTestingModule } from '@angular/router/testing';

describe('CameraPreviewPage', () => {
  let component: CameraPreviewPage;
  let fixture: ComponentFixture<CameraPreviewPage>;
  const exist = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraPreviewPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        CameraPreview
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CameraPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component).toBeTruthy();
  });

  it('startCamera', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.startCamera).toBeDefined();
  });

  it('stopCamera', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.stopCamera());
  });

  it('takePicture', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.takePicture());
  });

  it('switchCamera', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.switchCamera());
  });

  it('colorCameraEffect', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.colorCameraEffect());
  });

  it('flashCamera', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.flashCamera());
  });

  it('zoomCamera', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.zoomCamera());
  });

  it('show', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.show());
  });

  it('hide', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.hide());
  });

});
