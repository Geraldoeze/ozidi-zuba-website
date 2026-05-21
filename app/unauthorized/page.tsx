export default function Unauthorized() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
          <p className="text-muted-foreground">You are not authorised to access this page.</p>
        </div>
      </div>
    );
  }