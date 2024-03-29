import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HeaderComponent } from './header/header.component';
// import { AuthorListComponent } from './author-list/author-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        // HeaderComponent,
        // AuthorListComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule{}