
export interface IListItemProps {
    loading: boolean;
    name?: IName;
    phone: String;
    email: String;
    image: string;
}

interface IName {
    title: String;
    first: String;
    last: String;
}