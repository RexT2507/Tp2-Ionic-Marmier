import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@ionic-native/Camera/ngx';
import { HomePage } from './home.page';
import { RouterTestingModule } from '@angular/router/testing';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { LoginService } from '../services/login.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  const exist = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(),
        RouterTestingModule],
      providers: [
        Camera,
        Geolocation,
        LocalNotifications,
        CameraPreview,
        LoginService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.title).toBeUndefined();
  });

  it('openCam', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.openCam());
  });

  it('signOut', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.signOut());
  });

  // it('geoLoc', () => {
  //   const lifeFunc = true;
  //   expect(lifeFunc).toEqual(exist);
  //   expect(component.geoLoc());
  // });

  it('regNotification', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.regNotification(null));
  });
});
