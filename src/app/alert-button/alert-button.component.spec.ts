import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertButtonComponent } from './alert-button.component';
import { DebugElement } from '@angular/core';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;

  const exist = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // La severity a-t-elle une valeur excate
  it('should have an severity level of 404', () => {
    expect(component.severity).toBe(404);
  });

  // Content contient t'il une autre valeur
  it('should have a message with `magique`', () => {
    expect(component.content).toContain('magique');
  });

  // Condition logique comparaison numérique
  it('should have a severity level greater than 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  it('toggle', () => {
    const lifeFunc = true;
    expect(component.toggle());
    expect(lifeFunc).toEqual(exist);
  });

  it('toggleAsync', () => {
    const lifeFunc = true;
    expect(component.toggleAsync());
    expect(lifeFunc).toEqual(exist);
  });


});
