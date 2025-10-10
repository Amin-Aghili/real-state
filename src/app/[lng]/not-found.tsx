"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="glass p-8 rounded-xl max-w-md mx-auto">
          <h1 className="mb-4 text-6xl font-bold text-gradient">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Page Not Found</p>
          <p className="mb-8 text-muted-foreground">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link href="/">
            <Button className="bg-accent hover:bg-accent/90 text-white">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
