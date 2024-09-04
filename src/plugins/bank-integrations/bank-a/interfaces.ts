export interface BankAConfig {
  bankName: string;
  apiEndpopint: string;
  credentials: {
    clientId: string;
    clientSecret: string;
  };
}

export interface FormSteps {
  login: {
    username: string;
    password: string;
  };
  transferData: {
    amount: number;
  };
  authorization: {
    authorizationCode: string;
  };
}
