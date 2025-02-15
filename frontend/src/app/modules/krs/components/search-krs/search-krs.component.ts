import { Component } from '@angular/core';
import { KrsService } from '../../services/krs.service';
import { IKrsCopy } from '../../../../core/models/krs-copy.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Message } from '../../../../core/models/message.model';
import { MessageType } from '../../../../shared/enums/message-type.enum';
import { MessageComponent } from '../../../../shared/components/message/message.component';

@Component({
  selector: 'app-search-krs',
  imports: [ReactiveFormsModule, MessageComponent],
  templateUrl: './search-krs.component.html',
  styleUrl: './search-krs.component.scss',
})
export class SearchKrsComponent {
  /**
   * Krs copy data.
   */
  public krsCopy: IKrsCopy | undefined;

  /**
   * KRS search form.
   */
  public searchForm: FormGroup;

  /**
   * Message. Response status.
   */
  public message: Message | undefined;

  /**
   * Loading state.
   */
  public loading: boolean = false;

  public get krsNumber() {
    return this.searchForm.get('krsNumber');
  }

  public get register() {
    return this.searchForm.get('register');
  }

  /**
   * Create instance of component.
   * @param {KrsService} _krsService 
   * @param {FormBuilder} _formBuilder 
   */
  constructor(
    private _krsService: KrsService,
    private _formBuilder: FormBuilder
  ) {
    this.searchForm = this._formBuilder.group(
      {
        krsNumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('\\d+')]],
        register: ['P'],
      }
    )
  }

  /**
   * Submit event handler.
   */
  public onSubmit() {
    this.krsCopy = undefined;
    this.loading = true;
    this.message = undefined;

    this._krsService.getKrsCopy(this.krsNumber?.value, this.register?.value).subscribe({
      next: krs => {
        this.krsCopy = krs;
      },
      error: error => {
        console.log(error);

        if (error.status === 404) {
          this.message = new Message(MessageType.Info, "Nie znaleziono podmiotu.");
        } else {
          this.message = new Message(MessageType.Error, "Wystąpił błąd serwera.");
        }

        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    })
  }
}
