import axios, { AxiosResponse } from "axios";

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

export interface ApiResponse {
  status: "success" | "error";
  message: string;
  data?: any;
  errors?: string[];
  statusCode?: number;
}

const BASE_URL = "http://localhost:4000";

export async function Register(data: RegisterRequest): Promise<ApiResponse> {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(
      `${BASE_URL}/auth/register`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return {
        status: "success",
        message: response.data.message,
        data: response.data,
      };
    } else {
      return {
        status: "error",
        message: response.data.message || "Login Failed",
        errors: response.data.errors,
      };
    }
  } catch (error: any) {
    return {
      status: "error",
      message: error.response?.data.message || "Registration Failed",
      errors: error.response?.data.errors,
    };
  }
}

export async function Login(data: LoginRequest): Promise<ApiResponse> {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(
      `${BASE_URL}/auth/login`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 200) {
      return {
        status: "success",
        message: response.data.message,
        data: response.data,
      };
    } else {
      return {
        status: "error",
        message: response.data.message || "Login Failed",
        errors: response.data.errors,
      };
    }
  } catch (error: any) {
    return {
      status: "error",
      message: error.response?.data.message || "Login Failed",
      errors: error.response?.data.errors,
    };
  }
}
