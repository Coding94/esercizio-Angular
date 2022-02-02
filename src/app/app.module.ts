import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSingleComponent } from './user-single/user-single.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    OrderContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
