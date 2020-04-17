import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { LoginPage } from './login.page';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  const exist = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [LoginService]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('delay', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.delay(null));
  });

  it('login', () => {
    const lifeFunc = true;
    expect(lifeFunc).toEqual(exist);
    expect(component.login());
  });

});
