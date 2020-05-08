import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CalculatorComponent} from './calculator/calculator.component';

const routes: Routes = [
{ path: "login", component: LoginComponentComponent},
{ path: "calculator", component: CalculatorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
