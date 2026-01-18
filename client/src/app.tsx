import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import { LoginModal } from "@/components/LoginModal";

import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Planos from "@/pages/Planos";
import Resultados from "@/pages/Resultados";
import Profissionais from "@/pages/Profissionais";
import ProfissionalDetalhe from "@/pages/ProfissionalDetalhe";
import Cursos from "@/pages/Cursos";
import CursoDetalhe from "./pages/CursoDetalhe";
import Player from "./pages/Player";
import IaAplicada from "./pages/IaAplicada";
import Login from "@/pages/Login";
import CadastroProfissional from "@/pages/CadastroProfissional";
import Carteira from "@/pages/Carteira";
import DashboardProfissional from "@/pages/DashboardProfissional";
import Chat from "@/pages/Chat";
import Institucional from "@/pages/Institucional";
import NotFound from "@/pages/NotFound";

// Componente para proteger rotas
function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated, isLoading } = useAuth();
  const [, setLocation] = useLocation();

  if (isLoading) return null;

  if (!isAuthenticated) {
    setLocation('/login');
    return null;
  }

  return <Component />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={AboutUs} />
      <Route path="/planos" component={Planos} />
      <Route path="/resultados" component={Resultados} />
      <Route path="/profissionais" component={Profissionais} />
      <Route path="/profissionais/:id" component={ProfissionalDetalhe} />
      <Route path="/cursos" component={Cursos} />
      <Route path="/cursos/:id" component={CursoDetalhe} />
      <Route path="/player/:id" component={Player} />
      <Route path="/ia-aplicada" component={IaAplicada} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro-profissional" component={CadastroProfissional} />
      <Route path="/institucional/:slug" component={Institucional} />
      
      {/* Rotas Protegidas */}
      <Route path="/carteira">
        {() => <ProtectedRoute component={Carteira} />}
      </Route>
      <Route path="/dashboard">
        {() => <ProtectedRoute component={DashboardProfissional} />}
      </Route>
      <Route path="/chat">
        {() => <ProtectedRoute component={Chat} />}
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <AuthProvider>
          <TooltipProvider>
            <Router />
            <LoginModal />
            <Toaster />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
