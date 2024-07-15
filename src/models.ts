export interface SessionData {
  access_token: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  role: Role;
  birth_date: string;
  cpf_initials: string;
  phone_number_initials: string;
  company_id: string;
}

export interface Role {
  code: string;
  description: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  company_id: string;
  init_date: Date;
  end_date: Date;
  status: string;
  address: {
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
  };
}

export interface Enrollment {
  id: string;
  event_id: string;
  user_id: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}
