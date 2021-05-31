import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { FullComponent } from './layouts/full/full.component';
import { SelectivePreloadingStrategyService } from './srv/selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: "home",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeComponentsModule),
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        // Needed for hash routing
        path: "error",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeComponentsModule),
      },
      {
        // Needed for hash routing
        path: "state",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeComponentsModule),
      },
      {
        // Needed for hash routing
        path: "code",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeComponentsModule),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("./profile/profile.module").then((m) => m.ProfileModule),
      },
      {
        path: "trabajador",
        loadChildren: () =>
          import("./trabajador/trabajador.module").then((m) => m.DashboardModule),
      },
      {
        path: "nómina",
        loadChildren: () =>
          import("./payroll/payroll.module").then((m) => m.PayrollModule),
      },
      {
        path: "components",
        loadChildren: () =>
          import("./material-component/material.module").then(
            (m) => m.MaterialComponentsModule
          ),
      },
      {
        path: "subscription",
        loadChildren: () =>
          import("./subscription/subscription.module").then(
            (m) => m.SubscriptionComponentsModule
          ),
      },
    ],
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: SelectivePreloadingStrategyService,
      initialNavigation: !isIframe ? "enabled" : "disabled",
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
