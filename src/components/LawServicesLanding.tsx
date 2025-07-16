import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Users, 
  Handshake, 
  Building2, 
  Shield, 
  FileCheck, 
  AlertTriangle, 
  Gavel,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  BookOpen,
  Settings,
  FileX
} from "lucide-react";
import heroImage from "@/assets/hero-lawyer.jpg";

const services = [
  {
    icon: FileText,
    title: "Contrato com Prestadores de Serviço",
    description: "Elaboração e revisão de contratos para garantir segurança jurídica nas relações comerciais."
  },
  {
    icon: Building2,
    title: "Contrato com Fornecedores",
    description: "Proteção completa em contratos de fornecimento, cláusulas de qualidade e prazos."
  },
  {
    icon: Users,
    title: "Acordo entre Sócios",
    description: "Estruturação jurídica de sociedades e definição de direitos e deveres dos sócios."
  },
  {
    icon: Handshake,
    title: "Contrato de Parceria Comercial",
    description: "Formalização de parcerias estratégicas com segurança e clareza nas obrigações."
  },
  {
    icon: Users,
    title: "Contrato com Representantes ou Distribuidores",
    description: "Regulamentação de canais de distribuição e representação comercial."
  },
  {
    icon: Building2,
    title: "Contrato de Locação Comercial",
    description: "Proteção de interesses em locações comerciais, cláusulas específicas e garantias."
  },
  {
    icon: Shield,
    title: "Contrato de Confidencialidade (NDA)",
    description: "Proteção de informações sigilosas e propriedade intelectual da empresa."
  },
  {
    icon: FileText,
    title: "Contrato de Implementação de Software",
    description: "Regulamentação de serviços de TI, licenças de software e suporte técnico."
  },
  {
    icon: FileCheck,
    title: "Contrato de Cessão de Direitos",
    description: "Transferência segura de direitos autorais, marcas e propriedade intelectual."
  },
  {
    icon: BookOpen,
    title: "Elaboração e Revisão de Contratos",
    description: "Criação e análise detalhada de contratos personalizados para sua empresa."
  },
  {
    icon: AlertTriangle,
    title: "Matriz de Risco Contratual",
    description: "Análise e mapeamento de riscos contratuais para tomada de decisão estratégica."
  },
  {
    icon: Gavel,
    title: "Rescisão Contratual",
    description: "Orientação especializada para rescisões contratuais seguras e sem passivos."
  },
  {
    icon: Settings,
    title: "Gestão de Contratos",
    description: "Acompanhamento e gestão completa do ciclo de vida dos seus contratos."
  }
];

const benefits = [
  "Mais de 10 anos de experiência em direito contratual",
  "Atendimento personalizado e humanizado",
  "Contratos elaborados sob medida para seu negócio",
  "Consultoria estratégica em gestão de riscos",
  "Acompanhamento completo do processo",
  "Preços justos e transparentes"
];

export default function LawServicesLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gavel className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Dra. Advocacia Contratual</span>
          </div>
          <Button variant="hero" size="lg">
            <Phone className="h-4 w-4 mr-2" />
            Fale Conosco
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero/90" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge variant="secondary" className="mb-6 text-accent-foreground bg-accent/20 border-accent">
            Advocacia Especializada em Contratos
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Proteja seu Negócio com<br />
            <span className="text-accent">Contratos Seguros</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Elaboração, revisão e gestão de contratos empresariais com foco na proteção 
            dos seus interesses e crescimento sustentável do seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="text-lg px-8 py-6">
              <CheckCircle className="h-5 w-5 mr-2" />
              Solicitar Consultoria
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Phone className="h-5 w-5 mr-2" />
              (11) 9999-9999
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Nossos Serviços
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Especialidades em Direito Contratual
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções jurídicas completas para todas as necessidades contratuais 
              da sua empresa, com foco na prevenção de conflitos e proteção de interesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full shadow-soft hover:shadow-elegant transition-all duration-300 border-none bg-card/80 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Sobre Nós
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Experiência e Excelência em Advocacia Contratual
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Com mais de uma década de experiência no direito empresarial, nossa advocacia 
                especializada oferece soluções jurídicas estratégicas para empresas de todos os portes. 
                Nosso foco é prevenir conflitos e garantir que seus contratos sejam instrumentos 
                de crescimento e proteção para o seu negócio.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" size="lg">
                <Star className="h-4 w-4 mr-2" />
                Conhecer Nossa Metodologia
              </Button>
            </div>
            
            <div className="lg:pl-12">
              <Card className="p-8 shadow-elegant border-none bg-gradient-accent text-accent-foreground">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gavel className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Dra. [Seu Nome]</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Advogada especializada em Direito Empresarial e Contratos
                  </p>
                  <div className="space-y-2 text-sm opacity-80">
                    <p>OAB/SP nº XXXXX</p>
                    <p>Pós-graduada em Direito Empresarial</p>
                    <p>Membro da Comissão de Direito Empresarial OAB/SP</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para Proteger seu Negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e receba uma consultoria personalizada 
            para suas necessidades contratuais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="text-lg px-8 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Agendar Consultoria
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Mail className="h-5 w-5 mr-2" />
              Enviar E-mail
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Contato
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Fale Conosco
              </h2>
              <p className="text-lg text-muted-foreground">
                Estamos prontos para atender suas necessidades jurídicas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 shadow-soft border-none">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Telefone</h3>
                <p className="text-muted-foreground">(11) 9999-9999</p>
              </Card>
              
              <Card className="text-center p-6 shadow-soft border-none">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">E-mail</h3>
                <p className="text-muted-foreground">contato@advocacia.com</p>
              </Card>
              
              <Card className="text-center p-6 shadow-soft border-none">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Endereço</h3>
                <p className="text-muted-foreground">São Paulo - SP</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gavel className="h-6 w-6" />
                <span className="text-lg font-bold">Dra. Advocacia Contratual</span>
              </div>
              <p className="text-primary-foreground/80">
                Advocacia especializada em contratos empresariais, 
                oferecendo segurança jurídica para o seu negócio.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>Elaboração de Contratos</li>
                <li>Revisão Contratual</li>
                <li>Gestão de Contratos</li>
                <li>Consultoria Jurídica</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-primary-foreground/80 text-sm">
                <p>(11) 9999-9999</p>
                <p>contato@advocacia.com</p>
                <p>São Paulo - SP</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
            <p>&copy; 2024 Dra. Advocacia Contratual. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}