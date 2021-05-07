import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MsalGuard } from "@azure/msal-angular";
import { SubscriptionComponent } from "./subscription.component";

const SubscriptionRoutes: Routes = [
  {
    path: "",
    component: SubscriptionComponent,
    canActivate: [MsalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(SubscriptionRoutes)],
  exports: [RouterModule],
})
export class SubscriptionRoutingModule {}
