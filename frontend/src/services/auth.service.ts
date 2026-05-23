import api from "./api";

export interface AuthResponse {
  token: string;
  role: "user" | "company";
  profileId: number;
  email: string;
}

export interface UserRegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  phoneNumber: string;
}

export async function registerUser(payload: UserRegisterPayload): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/register/user", payload);
  saveAuth(data);
  return data;
}

export interface CompanyRegisterPayload {
  email: string;
  password: string;
  companyName: string;
}

export async function registerCompany(payload: CompanyRegisterPayload): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/register/company", payload);
  saveAuth(data);
  return data;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/login", payload);
  saveAuth(data);
  return data;
}

function saveAuth(data: AuthResponse) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("role", data.role);
  localStorage.setItem("profileId", String(data.profileId));
  localStorage.setItem("email", data.email);
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("profileId");
  localStorage.removeItem("email");
}

export function getRole(): string | null {
  return localStorage.getItem("role");
}
