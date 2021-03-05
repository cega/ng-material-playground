import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    CategoryComponent,
    TagComponent,
    QuestionComponent,
    SidenavMenuComponent
} from './components/index';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/categories',
        pathMatch: 'full',
    },
    {
        path: 'categories',
        component: CategoryComponent,
    },
    {
        path: 'tags',
        component: TagComponent,
    },
    {
        path: 'questions',
        component: QuestionComponent,
    },
    {
        path: 'sidenav',
        component: SidenavMenuComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
