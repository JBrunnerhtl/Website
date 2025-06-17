import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLanguages } from './programming-languages';

describe('ProgrammingLanguages', () => {
  let component: ProgrammingLanguages;
  let fixture: ComponentFixture<ProgrammingLanguages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingLanguages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingLanguages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
