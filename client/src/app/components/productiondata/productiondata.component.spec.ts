import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiondataComponent } from './productiondata.component';

describe('ProductiondataComponent', () => {
  let component: ProductiondataComponent;
  let fixture: ComponentFixture<ProductiondataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductiondataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
