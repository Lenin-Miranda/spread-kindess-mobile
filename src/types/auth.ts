interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
}

interface AuthAction {
  type: "LOGIN" | "LOGOUT";
  payload?: {
    id: string;
    name: string;
    email: string;
  };
}

interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type { AuthState, AuthAction, AuthContextType, AuthStackParamList };
