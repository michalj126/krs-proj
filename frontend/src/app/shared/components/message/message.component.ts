import { Component, computed, input } from '@angular/core';
import { Message } from '../../../core/models/message.model';
import { MessageType } from '../../enums/message-type.enum';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  public message = input.required<Message>();

  public alertType = computed(() => {
    if (this.message().type === MessageType.Error) {
      return "alert-error";
    }

    return "alert-info";
  })
}
