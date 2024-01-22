import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from './leave/leave.component';
import { AuthGuard } from './auth/auth-guard.guard';

const routes: Routes = [
    {
      path:"leaves", 
      component:LeaveComponent, 
      canActivate:[AuthGuard],
      data:{
        roles:['ADMIN']
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
