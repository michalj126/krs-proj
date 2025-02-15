import { MessageType } from "../../shared/enums/message-type.enum";

export class Message {
    constructor(type: MessageType, message: string) {
        this.type = type;
        this.message = message;
    }

    /**
     * Type of message
     */
    public type: MessageType;
    
    /**
     * Message.
     */
    public message: string;
}