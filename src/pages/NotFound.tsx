import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-container py-20">
        <div className="text-center">
          <h1 className="text-8xl font-display text-primary mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! This page doesn't exist.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home size={18} />
            Return to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
