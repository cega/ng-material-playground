import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { MaterialModule } from "./material.module";

import { AppRoutingModule } from "./app-routing.module";

import { DataService } from "./services/data";

import { AppComponent } from "./app.component";
import { CategoryComponent, QuestionComponent, TagComponent, SidenavMenuComponent } from "./components";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionComponent,
    TagComponent,
    SidenavMenuComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, { delay: 20 })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
