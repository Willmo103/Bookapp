import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { UserPageComponent } from './user-page/user-page.component';
import { BookDisplayPageComponent } from './book-display-page/book-display-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    LoginModalComponent,
    UserPageComponent,
    BookDisplayPageComponent,
    SearchBarComponent,
    SearchResultListComponent,
    SearchResultPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
