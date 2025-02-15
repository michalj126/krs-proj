import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchKrsComponent } from './search-krs.component';

describe('SearchKrsComponent', () => {
  let component: SearchKrsComponent;
  let fixture: ComponentFixture<SearchKrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchKrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchKrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
