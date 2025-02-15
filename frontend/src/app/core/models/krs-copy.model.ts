export interface IKrsCopy {
    copy: ICopy;
}

export interface ICopy {
    kind: string;
    header_a: IHeaderA;
    data: IData;
}

export interface IHeaderA {
    krs_number: string;
    copy_datetime: string;
    state_from_day: string;
}

export interface IData {
    section_1: ISection1;
}

export interface ISection1 {
    subject_data: ISubjectData;
    headquarters: IHeadquarters;
    address: IAddress;
}

export interface ISubjectData {
    legal_form: string;
    regon: string;
    nip: string;
    name: string;
    opp_status: boolean;
}

export interface IHeadquarters {
    country: string;
    province: string;
    district: string;
    borough: string;
    town: string;
}

export interface IAddress {
    street: string;
    house_number: string;
    town: string;
    postal_code: string;
    post: string;
    country: string;
}
