import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VoterComponent } from './voter/voter.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TodosComponent } from './todos/todos.component';
import { TodosService } from './todos/todos.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    UserDetailsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
