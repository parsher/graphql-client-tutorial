export interface IMovie {
    id: number;
    name: string;
    rating: number;
}

export interface IMovieData {
    movie: IMovie;
}

export interface IMovieVars {
    id: number;
}

export interface IMoviesData {
    movies: IMovie[];
}


export interface ILogin {
    email: string;
    passwordHash: string;
  }
  
  export interface IUser {
    id: number;
    name: string;
    email: string;
    passwordHash: string;
    roles: string[];
    token: string;
  }
  
  export interface ILoginData {
    login: IUser | null;
  }
  
  export interface ILoginVars {
    email: string;
    password: string;
  }
  
  export interface ILogoutData {
    logout: boolean;
  }
  
  export interface ISignupData {
    signup: boolean;
  }
  
  export interface ISignupVars {
    name: string;
    email: string;
    password: string;
  }
  
  export interface ICurrentUserData {
    user: IUser;
  }