import { SignUp } from "@clerk/nextjs";

const SignInPage = () => {
  return <SignUp forceRedirectUrl="/new-user"/>;
};

export default SignInPage;
