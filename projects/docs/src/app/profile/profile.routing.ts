import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MsalGuard } from "@azure/msal-angular";
import { ProfileComponent } from "./profile.component";

const ProfileRoutes: Routes = [
  {
    path: "",
    component: ProfileComponent,
    canActivate: [MsalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ProfileRoutes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
