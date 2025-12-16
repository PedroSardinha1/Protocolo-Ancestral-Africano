import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  ArrowDown, 
  Lock, 
  Zap, 
  Users, 
  BookOpen, 
  AlertTriangle,
  HelpCircle
} from 'lucide-react';

// --- Components ---

const Button: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}> = ({ children, onClick, className = '', variant = 'primary', fullWidth = false }) => {
  const baseStyles = "py-4 px-6 rounded-lg font-black uppercase tracking-wide transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-green-600 hover:bg-green-500 text-white shadow-green-900/50 text-lg md:text-xl",
    secondary: "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-900/50 text-base md:text-lg"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

const Section: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
}> = ({ children, className = '', id }) => (
  <section id={id} className={`py-12 md:py-20 px-4 md:px-6 ${className}`}>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 md:p-8 backdrop-blur-sm ${className}`}>
    {children}
  </div>
);

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3 mb-3">
    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
    <span className="text-slate-200 text-base md:text-lg">{text}</span>
  </div>
);

const XItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3 mb-3">
    <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
    <span className="text-slate-300 text-base">{text}</span>
  </div>
);

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="border-b border-slate-800 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
    <h5 className="font-bold text-slate-200 text-lg mb-2 flex items-center gap-2">
      <HelpCircle className="w-5 h-5 text-amber-500" />
      {question}
    </h5>
    <p className="text-slate-400 pl-7 text-sm md:text-base leading-relaxed">{answer}</p>
  </div>
);

// --- Main App ---

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  // Simple countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return prev;
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToCheckout = () => {
    const element = document.getElementById('checkout');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-amber-500 selection:text-black">
      
      {/* 1. HERO SECTION */}
      <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-[url('https://picsum.photos/seed/jungle/1920/1080')] bg-cover bg-center bg-no-repeat bg-blend-multiply bg-slate-900/90">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
          <div className="inline-block bg-amber-600/20 text-amber-500 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase border border-amber-600/30 mb-4">
            Atenção: Apenas para homens
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase drop-shadow-xl">
            Protocolo <span className="text-amber-500">Ancestral Africano</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            O método secreto que possibilitou homens comuns aumentarem <span className="text-white font-bold bg-slate-800 px-1">NO MÍNIMO 3 CM</span> de tamanho, em casa, sem remédios e sem cirurgias.
          </h2>

          <div className="pt-8">
            <Button onClick={scrollToCheckout} className="w-full md:w-auto mx-auto animate-bounce-slow">
              QUERO ACESSAR O PROTOCOLO AGORA
              <ArrowDown className="w-5 h-5" />
            </Button>
            <p className="mt-4 text-xs text-slate-400 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" /> Acesso Seguro e Discreto
            </p>
          </div>
        </div>
        
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </header>

      {/* 2. DOR / IDENTIFICAÇÃO */}
      <Section className="bg-slate-950">
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 uppercase border-l-4 border-amber-600 pl-4 md:pl-6">
            Uma Insegurança Silenciosa
          </h3>
          <p className="text-lg text-slate-400 leading-relaxed">
            Você sabe do que estou falando. Aquele momento no vestiário, ou a hesitação antes de se relacionar com alguém novo. A dúvida constante: <span className="italic text-slate-200">"Será que sou suficiente?"</span>
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Muitos homens carregam esse peso em silêncio. A sensação de que sua presença masculina poderia ser maior, mais imponente. Não se trata apenas de tamanho físico, mas da confiança inabalável que vem de saber que você tem o poder.
          </p>
        </div>
      </Section>

      {/* 3. QUEBRA DE CRENÇA */}
      <Section className="bg-slate-900 border-y border-slate-800">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-amber-500 mb-4 uppercase">
              A culpa não é sua
            </h3>
            <p className="text-slate-300 mb-4">
              Você já deve ter ouvido que "tamanho é genética" ou tentou pílulas milagrosas que só deram dor de cabeça. O problema é que você estava tentando forçar o corpo da maneira errada.
            </p>
            <p className="text-slate-300 font-semibold">
              O Protocolo Ancestral Africano não é mágica. É biologia pura aplicada através de um estímulo corporal correto e sequenciado.
            </p>
          </div>
          <Card className="bg-slate-800">
            <h4 className="font-bold text-lg mb-4 text-slate-200">O que os relatos confirmam:</h4>
            <div className="space-y-3">
              <CheckItem text="Aumento real de no mínimo 3 cm" />
              <CheckItem text="Maior densidade e firmeza" />
              <CheckItem text="Controle total sobre seu corpo" />
              <CheckItem text="Recuperação da autoestima viril" />
            </div>
          </Card>
        </div>
      </Section>

      {/* 4. MECANISMO */}
      <Section className="bg-slate-950">
        <h3 className="text-3xl md:text-4xl font-black text-center text-white mb-12 uppercase">
          Como Funciona o <span className="text-amber-600">Protocolo</span>
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="w-10 h-10 text-amber-500" />,
              title: "1. Ativação Neuromuscular",
              desc: "Acorda terminações nervosas adormecidas, preparando a região para responder a novos estímulos de crescimento."
            },
            {
              icon: <ArrowDown className="w-10 h-10 text-amber-500 rotate-45" />,
              title: "2. Estímulo de Circulação",
              desc: "Técnicas específicas que forçam uma irrigação sanguínea profunda, expandindo a capacidade dos corpos cavernosos."
            },
            {
              icon: <Users className="w-10 h-10 text-amber-500" />,
              title: "3. Microexpansão Tecidual",
              desc: "Exercícios controlados que geram micro-fissuras saudáveis (como na musculação) que se regeneram maiores e mais fortes."
            }
          ].map((item, idx) => (
            <Card key={idx} className="text-center hover:bg-slate-800 transition-colors">
              <div className="bg-slate-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-amber-600/30">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-3">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Essa combinação precisa foi o que possibilitou ganhos de <span className="font-bold text-amber-500">3 cm ou mais</span> em praticantes disciplinados.
          </p>
          <Button onClick={scrollToCheckout} variant="secondary">
            QUERO COMEÇAR APLICAR HOJE
          </Button>
        </div>
      </Section>

      {/* 5. STORY / PROVA HUMANA */}
      <Section className="bg-slate-900 border-y border-slate-800">
        <h3 className="text-3xl font-bold text-center text-white mb-2 uppercase">Relatos Reais</h3>
        <p className="text-center text-slate-400 mb-12">Homens comuns, resultados extraordinários.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-green-600">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-400">R.S.</div>
              <div>
                <p className="font-bold text-white">Ricardo S.</p>
                <p className="text-xs text-slate-400">34 anos • Praticante há 2 meses</p>
              </div>
            </div>
            <p className="text-slate-300 italic">
              "Eu achava que era conversa fiada. Mas decidi tentar porque é natural. Em 45 dias, medi e não acreditei: ganhei 3,2 cm. Mas o melhor não foi nem o tamanho, foi a firmeza. Minha esposa percebeu na hora."
            </p>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-400">M.A.</div>
              <div>
                <p className="font-bold text-white">Marcos A.</p>
                <p className="text-xs text-slate-400">29 anos • Praticante há 5 semanas</p>
              </div>
            </div>
            <p className="text-slate-300 italic">
              "Confesso que comprei com medo, mas o material é muito direto ao ponto. Não tem enrolação. Em menos de um mês, notei uma diferença visual que nunca tive antes. Minha autoestima está em outro nível, me sinto um novo homem."
            </p>
          </Card>
        </div>
      </Section>

      {/* 6. O QUE O CLIENTE RECEBE */}
      <Section className="bg-slate-950">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mb-2">O Que Você Recebe</h3>
            <p className="text-slate-400">Acesso imediato ao material completo</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            <CheckItem text="Protocolo Passo a Passo (E-book Ilustrado)" />
            <CheckItem text="Cronograma de Frequência Semanal" />
            <CheckItem text="Rotina de 15 minutos diários" />
            <CheckItem text="Estratégia Avançada para ganho mínimo de 3cm" />
            <CheckItem text="Ajustes de Intensidade por Fase" />
            <CheckItem text="Guia de Segurança (O que não fazer)" />
            <CheckItem text="Erros comuns que sabotam resultados" />
            <CheckItem text="Técnicas de Manutenção dos Ganhos" />
          </div>
        </div>
      </Section>

      {/* 7. PARA QUEM É / NÃO É */}
      <Section className="bg-slate-900">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-slate-950/50 rounded-xl border border-green-900/30">
            <h4 className="text-xl font-bold text-green-500 mb-6 flex items-center gap-2">
              <CheckCircle2 /> PARA QUEM É
            </h4>
            <div className="space-y-4">
              <CheckItem text="Homens insatisfeitos com o tamanho atual" />
              <CheckItem text="Quem busca um método natural e seguro" />
              <CheckItem text="Quem tem disciplina para seguir instruções" />
              <CheckItem text="Homens que querem retomar a confiança" />
            </div>
          </div>

          <div className="p-6 bg-slate-950/50 rounded-xl border border-red-900/30">
            <h4 className="text-xl font-bold text-red-500 mb-6 flex items-center gap-2">
              <XCircle /> PARA QUEM NÃO É
            </h4>
            <div className="space-y-4">
              <XItem text="Curiosos que não vão aplicar o método" />
              <XItem text="Quem procura pílula mágica do dia para a noite" />
              <XItem text="Menores de 18 anos" />
              <XItem text="Preguiçosos que não têm 15 min por dia" />
            </div>
          </div>
        </div>
      </Section>

      {/* 8. FAQ (Substituindo Garantia) */}
      <Section className="bg-slate-950">
        <div className="max-w-3xl mx-auto">
           <h3 className="text-3xl font-bold text-center text-white mb-10 uppercase">
             Perguntas Frequentes
           </h3>
           <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
             <FaqItem 
               question="Preciso comprar algum equipamento?" 
               answer="Não. O protocolo é 100% natural e manual. Você só precisa das suas mãos e de disciplina para seguir o cronograma."
             />
             <FaqItem 
               question="Vou receber algo em casa?" 
               answer="Não. O produto é um livro digital (E-book). Você recebe o acesso no seu e-mail logo após a confirmação do pagamento, com total sigilo."
             />
             <FaqItem 
               question="Em quanto tempo vejo resultados?" 
               answer="Os resultados variam, mas praticantes disciplinados relatam mudanças visuais significativas e aumento da firmeza entre 3 a 4 semanas de aplicação constante."
             />
             <FaqItem 
               question="A compra é segura?" 
               answer="Sim, utilizamos uma plataforma de pagamento criptografada e 100% segura. Seus dados não são compartilhados com ninguém."
             />
           </div>
        </div>
      </Section>

      {/* 9. CHECKOUT */}
      <section id="checkout" className="py-20 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-2xl relative">
          
          {/* Header do Checkout */}
          <div className="bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center">
            <span className="text-slate-800 font-bold text-sm uppercase">Resumo do Pedido</span>
            <div className="flex items-center gap-1 text-red-600 font-bold text-sm bg-red-100 px-2 py-1 rounded">
               <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
               {timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex gap-4 mb-6">
              <div className="w-20 h-20 bg-slate-900 rounded-lg flex items-center justify-center text-amber-500 shadow-md">
                <BookOpen className="w-10 h-10" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg leading-tight">Protocolo Ancestral Africano</h4>
                <p className="text-sm text-slate-500 mt-1">Acesso Digital Completo</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">OFERTA ATIVA</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-8 border-t border-b border-slate-100 py-4">
              <div className="flex justify-between items-center text-sm text-slate-500 line-through">
                <span>Preço Normal</span>
                <span>R$ 157,90</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-black text-green-600">
                <span>Hoje</span>
                <span>R$ 37,90</span>
              </div>
              <p className="text-xs text-slate-400 text-right">Pagamento único. Sem mensalidades.</p>
            </div>

            {/* Simulação de Formas de Pagamento */}
            <div className="mb-6">
              <p className="text-xs text-slate-500 font-bold mb-2 uppercase">Pagamento Seguro Via:</p>
              <div className="flex gap-2 opacity-70 grayscale hover:grayscale-0 transition-all">
                <div className="h-8 w-12 bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-600">PIX</div>
                <div className="h-8 w-12 bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-600">VISA</div>
                <div className="h-8 w-12 bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-600">MASTER</div>
              </div>
            </div>

            <Button fullWidth onClick={() => alert("Redirecionando para o gateway de pagamento...")}>
              COMPRAR AGORA
            </Button>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
              <Lock className="w-3 h-3" /> Ambiente 100% Seguro e Criptografado
            </div>
          </div>
        </div>
      </section>

      {/* 10. AVISO LEGAL (RODAPÉ) */}
      <footer className="bg-slate-950 py-12 px-4 border-t border-slate-900 text-slate-500 text-xs md:text-sm text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <p>
            <strong>AVISO LEGAL:</strong> Os resultados podem variar de pessoa para pessoa e dependem da dedicação de cada um em seguir o protocolo corretamente. Não garantimos resultados específicos, pois cada organismo reage de uma maneira.
          </p>
          <p>
            Este produto não substitui o parecer médico profissional. Sempre consulte um médico para tratar de assuntos relativos à saúde. Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
          <div className="pt-8 flex items-center justify-center gap-2 opacity-50">
             <AlertTriangle className="w-4 h-4" />
             <span>Produto destinado a maiores de 18 anos.</span>
          </div>
          <p className="pt-4">
            &copy; {new Date().getFullYear()} Protocolo Ancestral. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}