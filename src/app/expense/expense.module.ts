import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MdbAutocompleteModule } from 'mdb-angular-ui-kit/autocomplete';
import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbLightboxModule } from 'mdb-angular-ui-kit/lightbox';
import { MdbTableModule } from 'mdb-angular-ui-kit/table';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { SharedModule } from '../shared/shared.module';

import { ExpenseDetailComponent } from './components/expense-detail/expense-detail.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseNewComponent } from './components/expense-new/expense-new.component';
import { ExpenseTableComponent } from './components/expense-table/expense-table.component';
import { ExpenseDeleteComponent } from './components/expense-delete/expense-delete.component';
import { ExpenseEditComponent } from './components/expense-edit/expense-edit.component';

const routes: Routes = [
    {
        path: '',
        component: ExpenseListComponent,
    },
    {
        path: ':id',
        children: [
            {
                path: '',
                component: ExpenseDetailComponent,
            },
            {
                path: 'edit',
                component: ExpenseEditComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [
        ExpenseFormComponent,
        ExpenseListComponent,
        ExpenseNewComponent,
        ExpenseTableComponent,
        ExpenseDetailComponent,
        ExpenseDeleteComponent,
        ExpenseEditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule,
        MdbAutocompleteModule,
        MdbDatepickerModule,
        MdbFormsModule,
        MdbLightboxModule,
        MdbTableModule,
        MdbTooltipModule,
        MdbValidationModule,
    ],
})
export class ExpenseModule {}
