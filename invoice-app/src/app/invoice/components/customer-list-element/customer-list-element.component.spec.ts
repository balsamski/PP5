import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListElementComponent } from './customer-list-element.component';

describe('CustomerListElementComponent', () => {
  let component: CustomerListElementComponent;
  let fixture: ComponentFixture<CustomerListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerListElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
