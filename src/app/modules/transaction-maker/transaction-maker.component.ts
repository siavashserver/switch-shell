import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatAutocomplete, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'transaction-maker',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatAutocomplete,
    MatAutocompleteTrigger,
    ReactiveFormsModule,
    MatInput,
    MatSlideToggle,
    MatButton
  ],
  templateUrl: './transaction-maker.component.html',
  styleUrl: './transaction-maker.component.scss'
})
export class TransactionMakerComponent {
  ipOptions: string[] = ["192.168.1.1", "192.168.1.2"];
  portOptions: string[] = ["4200", "5000"];
  protocolOptions: string[] = ["A", "B"];
  transactionOptions: string[] = ["Transaction A", "Transaction B"];
  terminalTypeOptions: string[] = ["Type A", "Type B"];
  terminalNameOptions: string[] = ["Name A", "Name B"];
}
