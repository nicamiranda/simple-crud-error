import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared/shared.module';

// import { BookFormComponent } from './pages/book-form/book-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { BookFormComponent } from './pages/book-form/book-form.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookFormComponent,
    // BookFormComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [BookListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BookModule { }
