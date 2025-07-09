import { Routes } from '@angular/router';
import { AdvertisementFormComponentComponent } from './advertisement-form-component/advertisement-form-component.component';
import { AdvertisementTableComponentComponent } from './advertisement-table-component/advertisement-table-component.component';
import { EditProductComponentComponent } from './edit-product-component/edit-product-component.component';

export const routes: Routes = [
    {path: 'advertisement-form-component', component: AdvertisementFormComponentComponent, title: 'Advertisement Form'},
    {path: 'advertisement-table-component', component: AdvertisementTableComponentComponent, title:'Advertisement Table'},
    {path: '', redirectTo: '/advertisement-form-component', pathMatch: 'full'},
    {path: 'edit-product-component', component: EditProductComponentComponent, title: 'Edit Advertisement'},
    
    
];
