import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TabsPage} from "./tabs";

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
            {
                path: '',
                loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
            }
        ]
      },
      {
        path: 'search',
        children: [
            {
                path: '',
                loadChildren: () => import('../searchPage/search.module').then(m => m.SearchPageModule)
            }
        ]
      },
      {
        path: 'customPage',
        children: [
            {
                path: '',
                loadChildren: () => import('../customPage/customPage.module').then(m => m.CustomPageModule)
            }
        ]
      },
      {
        path: 'newsPage',
        children: [
            {
                path: '',
                loadChildren: () => import('../newsPage/customPage.module').then(m => m.NewsPageModule)
            }
        ]
      },
      {
        path: 'shop',
        children: [
            {
                path: '',
                loadChildren: () => import('../shopPage/shopPage.module').then(m => m.ShopPageModule)
            }
        ]
      },
      {
        path: 'menuPage',
        children: [
            {
                path: '',
                loadChildren: () => import('../menuPage/menuPage.module').then(m => m.MenuPageModule)
            }
        ]
      },
        {
        path: 'categoriesList',
        children: [
            {
                path: '',
                loadChildren: () => import('../categoriesList/categoriesList.module').then(m => m.CategoriesListModule)
            }
        ]
      },
        {
        path: 'messages',
        children: [
            {
                path: '',
                loadChildren: () => import('../messagesPage/messagesPage.module').then(m => m.MessagesPageModule)
            }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
