import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './blog/pages/blog-form/blog-form.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BookFormComponent } from './book/pages/book-form/book-form.component';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full"
  },
=======
>>>>>>> b42906bdcb24807824d8ed151e78337ca179426c
  {
    path: "blog",
    loadChildren: () => import("./blog/blog.module").then(m => m.BlogModule)
  },
  {
    path: "blog/form",
    component: BlogFormComponent,
  },
  {
    path: "book",
    loadChildren: () => import("./book/book.module").then(m => m.BookModule),
  },
  {
    path: "book/form",
    component: BookFormComponent,
  },
  {
    path: "profile",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  {path: '**',
   component: BlogListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
