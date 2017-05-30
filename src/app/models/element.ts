export class Element {
    name: string;
    description: string;
    link: string;
    imageUrl: string;
}

export class Group {
    group: string;
    elements: Array<Element>;
}
