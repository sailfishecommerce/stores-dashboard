export type inputContentType = {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
  id: string;
  inputText: "email" | "password" | "text";
  withIcon?: boolean;
};

export type formType = {
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  address2: string;
  country: string;
  companyName: string;
  state: string;
  city: string;
  zip: string;
};

export type progressStateType = {
  uploaded: number;
  total: number;
  loading: boolean;
};

export type countriesType = {
  name: string;
  Iso2: any | string;
  Iso3: string | null;
};

export type blogFormDataType = {
  dbNode: string;
  data: {
    authorName: string;
    aboutAuthor: string;
  };
};
