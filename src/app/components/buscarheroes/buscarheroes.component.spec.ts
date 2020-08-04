import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarheroesComponent } from './buscarheroes.component';

describe('BuscarheroesComponent', () => {
  let component: BuscarheroesComponent;
  let fixture: ComponentFixture<BuscarheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
