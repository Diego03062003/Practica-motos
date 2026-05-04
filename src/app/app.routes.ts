import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Productos } from './pages/products/products';

export const routes: Routes = [
    {path: '', component: Home },//Ruta de inicio
    {path: 'nosotros', component: About },
    {path: 'contacto', component: Contact },
    {path: 'productos', component: Productos},
    {path: '**', redirectTo: '' } //Si el usuario pone una ruta inexistente, lo redirigimos a la página de inicio
];
