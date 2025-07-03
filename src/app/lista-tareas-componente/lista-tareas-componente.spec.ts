import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareasComponente } from './lista-tareas-componente';

describe('ListaTareasComponente', () => {
  let component: ListaTareasComponente;
  let fixture: ComponentFixture<ListaTareasComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTareasComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTareasComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
