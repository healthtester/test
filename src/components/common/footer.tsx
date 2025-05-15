export default function AppFooter() {
  return (
    <footer className="bg-card border-t border-border py-6 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Healthcare Marketplace. All rights reserved.</p>
        <p className="text-sm mt-1">Your trusted partner in finding quality healthcare.</p>
      </div>
    </footer>
  );
}
