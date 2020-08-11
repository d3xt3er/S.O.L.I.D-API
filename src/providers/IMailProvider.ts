interface IAddress {
    email: string;
    name: string;
}

export interface IMessege {
    to: IAddress;
    from: IAddress;
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendMail(message: IMessege): Promise<void>;
}