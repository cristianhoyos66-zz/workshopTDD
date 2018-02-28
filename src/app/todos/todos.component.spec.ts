import { async, ComponentFixture, TestBed, tick, fakeAsync, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { from } from 'rxjs/observable/from';

import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      providers: [
        TodosService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', async(() => {
    fixture.debugElement
      .query(By.css('.set-title'))
      .triggerEventHandler('click', null);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = fixture.debugElement.query(By.css('h1')).nativeElement.innerText;
      expect(value).toEqual('¡Título!');
    });
  }));

  it('should increment after 5 seconds', fakeAsync(() => {
    fixture.debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);

    tick(2000);
    fixture.detectChanges();
    const value1 = component.value;
    expect(value1).toBe(0); // value should still be 0 after 2 seconds

    tick(3000);
    fixture.detectChanges();

    const value2 = component.value;
    expect(value2).toBe(1); // 3 seconds later, our value should now be 1
  }));

  it('todos should have an object array', () => {
    const todosService = TestBed.get(TodosService);

    spyOn(todosService, 'getTodos').and.callFake(() => {
      return from([[
        {title: 'Cambiar el mundo'}
      ]]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0);
  });

  it('todos should have an object array',
  inject([TodosService], (todosService: TodosService) => {
    spyOn(todosService, 'getTodos').and.callFake(() => {
      return from([[
        {title: 'Cambiar el mundo'}
      ]]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0);
  })
);

});
