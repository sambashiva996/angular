import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from '../../_course-resources/template-form-controls/template-form-controls.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: "Home - Joe's Robot Shop"},
    {path: 'catalog', component: CatalogComponent, title: "Calalog - Joe's Robot Shop"},
    {path: 'cart', component: CartComponent, title: "Cart - Joe's Robot Shop"},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'sign-in', component: SignInComponent, title: "Sign-in - Joe's Robot Shop" },
    {path: 'form-controls', component: TemplateFormControlsComponent}
];
