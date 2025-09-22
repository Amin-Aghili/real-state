import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="glass p-8 rounded-xl max-w-md mx-auto">
          <h1 className="mb-4 text-6xl font-bold text-gradient">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">{t('notFound.title')}</p>
          <p className="mb-8 text-muted-foreground">
            {t('notFound.subtitle')}
          </p>
          <Link to="/">
            <Button className="bg-accent hover:bg-accent/90 text-white">
              <Home className="mr-2 h-4 w-4" />
              {t('notFound.backHome')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
