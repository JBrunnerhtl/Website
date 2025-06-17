import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderName } from './header-name';

describe('HeaderName', () => {
  let component: HeaderName;
  let fixture: ComponentFixture<HeaderName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
