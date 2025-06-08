import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactiveformComponent } from './user-reactiveform.component';

describe('UserReactiveformComponent', () => {
  let component: UserReactiveformComponent;
  let fixture: ComponentFixture<UserReactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReactiveformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
