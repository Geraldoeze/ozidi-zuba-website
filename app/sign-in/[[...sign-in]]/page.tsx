import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <SignIn
        appearance={{
          elements: {
            footerAction: "hidden", // hides the "Don't have an account? Sign up" link
          },
        }}
      />
    </div>
  );
}
