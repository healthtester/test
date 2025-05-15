
export default function AppFooter() {
  return (
    <footer className="bg-card border-t border-border py-6 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} My Health Navigator. All rights reserved.</p>
        <p className="text-sm mt-1">Your guide to informed health decisions.</p>
      </div>
    </footer>
  );
}

