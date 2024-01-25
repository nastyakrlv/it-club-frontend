export interface IContenderData {
  id: string;
  role: string;
  email: string;
  inviterId?: string;
  created_at: string;
  updated_at: string;
  contenderInfo?: IContenderInfo;
  mainInfo?: IMainInfo;
}

interface IContenderInfo {
  id: string;
  speciality: string;
  skills: string[];
  lastJobPlace: string;
  workExperience: number;
  vocation: string;
  salary: number;
  userId: string;
  created_at: string;
  updated_at: string;
}

interface IMainInfo {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  gender: string;
  birthdate: string;
  location: string;
  userId: string;
  created_at: string;
  updated_at: string;
}

export interface IPagination {
  page: number;
  limit: number;
  total: number;
}

export interface IContenderUsersResponse {
  data: IContenderData[];
  pagination: IPagination;
}
