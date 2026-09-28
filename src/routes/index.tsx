import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import retrato from "@/assets/psicologa.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "5511999998888";
const EMAIL = "contato@marinaduarte.psi.br";
const TELEFONE = "(11) 99999-8888";

const agendarUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá, Dra. Marina! Gostaria de agendar uma sessão.",
)}`;

const especialidades = [
  {
    titulo: "Ansiedade e Pânico",
    texto:
      "Manejo de crises, pensamentos acelerados e sintomas físicos, com ferramentas práticas para o dia a dia.",
  },
  {
    titulo: "Depressão",
    texto:
      "Acolhimento do sofrimento, resgate de sentido e reconstrução gradual da rotina e dos vínculos.",
  },
  {
    titulo: "Terapia de Casal",
    texto:
      "Mediação de conflitos, comunicação não violenta e reconstrução da confiança entre os parceiros.",
  },
  {
    titulo: "Autoestima e Identidade",
    texto:
      "Trabalho com autocrítica, comparação e insegurança para uma relação mais gentil consigo mesma.",
  },
  {
    titulo: "Luto e Perdas",
    texto:
      "Espaço seguro para elaborar rupturas, lutos e mudanças de vida no seu próprio tempo.",
  },
  {
    titulo: "Estresse e Burnout",
    texto:
      "Limites saudáveis, gestão de sobrecarga e recuperação do prazer no trabalho e no descanso.",
  },
];

const formacao = [
  { ano: "2008", texto: "Graduação em Psicologia — Universidade de São Paulo (USP)" },
  { ano: "2011", texto: "Especialização em Terapia Cognitivo-Comportamental — INTCC" },
  { ano: "2015", texto: "Mestrado em Psicologia Clínica — PUC-SP" },
  { ano: "2019", texto: "Formação em Terapia de Casal e Família — Instituto Familiae" },
  { ano: "2022", texto: "Certificação em Mindfulness aplicado à clínica — UNIFESP" },
];

const faq = [
  {
    p: "Como funciona a primeira sessão?",
    r: "É uma conversa de acolhimento, com cerca de 50 minutos, para entender sua história, suas queixas atuais e combinar juntos os objetivos do processo.",
  },
  {
    p: "Qual a duração e frequência das sessões?",
    r: "Cada sessão dura 50 minutos e, em geral, acontece semanalmente. A frequência pode ser ajustada conforme sua necessidade.",
  },
  {
    p: "O atendimento online é eficaz?",
    r: "Sim. O atendimento online é reconhecido pelo Conselho Federal de Psicologia e apresenta resultados equivalentes ao presencial para a maioria das demandas.",
  },
  {
    p: "Vocês atendem convênio?",
    r: "O atendimento é particular, com recibo para reembolso junto ao seu plano de saúde.",
  },
  {
    p: "O que eu conto fica em sigilo?",
    r: "Sim. O sigilo é garantido pelo Código de Ética Profissional do Psicólogo, com exceções previstas apenas em situações de risco de vida.",
  },
];

function Index() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navegação */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="font-display text-xl tracking-tight">
            Marina Duarte
            <span className="ml-2 align-middle text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Psicóloga
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a>
            <a href="#especialidades" className="transition-colors hover:text-foreground">Especialidades</a>
            <a href="#atendimento" className="transition-colors hover:text-foreground">Atendimento</a>
            <a href="#duvidas" className="transition-colors hover:text-foreground">Dúvidas</a>
            <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
          </nav>
          <a
            href={agendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90"
          >
            Agendar sessão
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <p className="mb-5 inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-secondary-foreground">
              CRP 06/123456
            </p>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Um espaço seguro para
              <span className="block italic text-primary">você se reencontrar</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Sou a Dra. Marina Duarte, psicóloga clínica há mais de 15 anos. Atendo
              adultos e casais em processos de ansiedade, depressão, luto e crises de
              vida — presencialmente em São Paulo ou por videochamada.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={agendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-md transition-all hover:opacity-90"
              >
                Agendar minha sessão
              </a>
              <a
                href="#sobre"
                className="rounded-full border border-border px-8 py-4 text-base font-medium transition-colors hover:bg-secondary"
              >
                Conhecer meu trabalho
              </a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["15+", "anos de clínica"],
                ["800+", "pacientes atendidos"],
                ["100%", "sigilo garantido"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl text-primary">{n}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/40" aria-hidden="true" />
            <img
              src={retrato}
              alt="Dra. Marina Duarte, psicóloga clínica, sentada em seu consultório"
              width={1024}
              height={1280}
              className="relative rounded-[1.75rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Sobre mim</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Escuta cuidadosa, método com evidência
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Minha prática se apoia na Terapia Cognitivo-Comportamental, integrada a
              recursos de mindfulness e de terapia focada em emoções. Isso significa um
              trabalho colaborativo: nós investigamos juntos os padrões que sustentam o
              seu sofrimento e construímos estratégias concretas de mudança.
            </p>
            <p>
              Acredito que terapia não é conselho. É um espaço de confiança onde você
              pode falar sem julgamento, entender sua própria história e desenvolver
              recursos para lidar com o que dói — no seu ritmo.
            </p>
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {formacao.map((f) => (
                <div key={f.ano} className="rounded-xl border border-border bg-background p-5">
                  <span className="font-display text-2xl text-primary">{f.ano}</span>
                  <p className="mt-2 text-sm leading-snug text-foreground">{f.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Especialidades</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
          Em que posso te acompanhar
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {especialidades.map((e) => (
            <article
              key={e.titulo}
              className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-display text-2xl text-primary">{e.titulo}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{e.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Atendimento */}
      <section id="atendimento" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Atendimento</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Como funciona
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-3xl">Presencial</h3>
              <p className="mt-3 text-muted-foreground">
                Consultório na Rua dos Pinheiros, 1200 — sala 34, Pinheiros, São Paulo/SP.
                Ambiente reservado, com acesso fácil pelo metrô Faria Lima.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>Segunda a sexta — 8h às 20h</li>
                <li>Sábado — 9h às 13h</li>
                <li>Sessões de 50 minutos</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-3xl">Online</h3>
              <p className="mt-3 text-muted-foreground">
                Sessões por videochamada para todo o Brasil e brasileiros no exterior,
                em plataforma segura e com a mesma qualidade do presencial.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>Horários flexíveis, incluindo fusos internacionais</li>
                <li>Link enviado antes de cada sessão</li>
                <li>Atendimento particular com recibo para reembolso</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Dúvidas frequentes</p>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
          Antes de começar
        </h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faq.map((f, i) => (
            <div key={f.p}>
              <button
                onClick={() => setAberto(aberto === i ? null : i)}
                aria-expanded={aberto === i}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-lg font-medium">{f.p}</span>
                <span className="shrink-0 text-2xl text-primary">{aberto === i ? "−" : "+"}</span>
              </button>
              {aberto === i && (
                <p className="pb-6 pr-10 leading-relaxed text-muted-foreground">{f.r}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contato / CTA */}
      <section id="contato" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            O primeiro passo pode ser hoje
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg opacity-90">
            Envie uma mensagem e retorno em até 24 horas para combinarmos o melhor
            horário para a sua primeira sessão.
          </p>
          <a
            href={agendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-background px-10 py-4 text-base font-medium text-foreground shadow-lg transition-all hover:opacity-90"
          >
            Agendar sessão pelo WhatsApp
          </a>
          <div className="mt-12 grid gap-6 border-t border-primary-foreground/20 pt-10 text-sm sm:grid-cols-3">
            <div>
              <p className="opacity-70">Telefone</p>
              <a href={`tel:+${WHATSAPP}`} className="mt-1 block font-medium underline-offset-4 hover:underline">
                {TELEFONE}
              </a>
            </div>
            <div>
              <p className="opacity-70">E-mail</p>
              <a href={`mailto:${EMAIL}`} className="mt-1 block font-medium underline-offset-4 hover:underline">
                {EMAIL}
              </a>
            </div>
            <div>
              <p className="opacity-70">Consultório</p>
              <p className="mt-1 font-medium">R. dos Pinheiros, 1200 — sala 34, São Paulo/SP</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>Dra. Marina Duarte — Psicóloga Clínica — CRP 06/123456</p>
        <p className="mt-1">
          Este site tem caráter informativo e não substitui atendimento profissional.
        </p>
      </footer>
    </div>
  );
}
