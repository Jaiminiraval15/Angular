import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FacultiesComponent } from './faculties/faculties.component';

import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'faculties',component:FacultiesComponent },
  {path:'',component:FacultiesComponent },
  {path:'students',component:StudentComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

