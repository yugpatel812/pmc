import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericGrid } from './generic-grid';

describe('GenericGrid', () => {
  let component: GenericGrid;
  let fixture: ComponentFixture<GenericGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
