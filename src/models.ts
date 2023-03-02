
export interface Identifier {
    id: string;
    use: string;
    type?: any;
    system: string;
    value: string;
    period?: any;
    assigner?: any;
}

export interface Name {
    id: string;
    use: string;
    text?: any;
    family: string;
    given: string[];
    prefix: string[];
    suffix: string[];
    period?: any;
}

export interface Period {
    id: string;
    start: Date;
    end: Date;
}

export interface Telecom {
    id: string;
    system: string;
    value: string;
    use: string;
    rank: number;
    period: Period;
}

export interface Period2 {
    id: string;
    start: Date;
    end: Date;
}

export interface Address {
    id: string;
    use: string;
    type: string;
    text?: any;
    line: string[];
    city: string;
    district: string;
    state: string;
    postalcode: string;
    country: string;
    period: Period2;
}

export interface Patient {
    id: string;
    text?: any;
    identifier: Identifier[];
    active: boolean;
    name: Name[];
    telecom: Telecom[];
    gender: string;
    birthDate?: any;
    deceasedBoolean: boolean;
    deceasedDateTime?: any;
    address: Address[];
}


