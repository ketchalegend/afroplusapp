import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';



const routes: Routes = [
    {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: '',
        redirectTo: 'onboarding',
        pathMatch: 'full'
      },

      {
        path: 'onboarding',
        loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
      },
    //,
  //  { path: 'settings', loadChildren: './menuPage/options/settings/settingsPage.module#SettingsModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

