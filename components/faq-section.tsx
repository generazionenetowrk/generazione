"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const faqs = [
  {
    q: "Quanto costa iscriversi?",
    a: "Iscriversi a GenerΛzione è gratuito. Non ci sono quote, abbonamenti o fee di alcun tipo. Essendo un movimento di idealisti per idealisti, il contributo che chiederemo sarà solo in termini di tempo ed energie. Non chiediamo un euro per farne parte.",
  },
  {
    q: "Cosa succede subito dopo che compilo il form per diventare membro?",
    a: "Ricevi immediatamente un'email di benvenuto con: (a) il link al canale Telegram ufficiale; (b) un breve video che ti spiega come funziona il movimento; (c) la password per accedere alle sezioni operative del sito; (d) le prime indicazioni su come muoverti.",
  },
  {
    q: "Come accedo alle sezioni operative del sito per specializzarmi?",
    a: "Le sezioni operative si sbloccano con la password che ricevi via email dopo l'iscrizione a membro. Ogni ruolo (Attivismo, Clippers, Studenti, Influencers…) ha una sua area dedicata, accessibile solo ai membri.",
  },
  {
    q: "Ho fatto l'application per una sezione, perché non ho ricevuto risposta via email?",
    a: "Ogni candidatura viene esaminata dal responsabile della sezione. Non tutte vengono accettate: solo chi risulta più in linea con i requisiti del ruolo riceve una risposta positiva.",
  },
  {
    q: "Posso uscire quando voglio?",
    a: "Sì. GenerΛzione non è un contratto, un partito o una setta. Se vuoi uscire, disiscriviti dalla mailing list e abbandona i canali Telegram. Nessuna trattenuta, nessuna spiegazione dovuta.",
  },
  {
    q: "È obbligatorio essere su Telegram?",
    a: "Sì, il canale su Telegram è il nervo operativo del movimento. Senza Telegram non puoi ricevere gli annunci, i drop, e non puoi partecipare alle sezioni.",
  },
  {
    q: "C'è un'età per iscriversi?",
    a: "Il movimento è di tipo generazionale, pensato dunque per giovani fino ai 35 anni. Se però non rientri in questa fascia d'età, condividi la visione del movimento e vuoi comunque farne parte, sei libero di iscriverti come membro, tenendo però a mente che soprattutto per il reclutamento nelle sezioni operative l'età sarà fortemente presa in considerazione.",
  },
  {
    q: "Posso iscrivermi se sono una donna?",
    a: "Sì, puoi iscriverti liberamente, tenendo però a mente che soprattutto per il reclutamento in talune sezioni operative il genere sarà fortemente preso in considerazione.",
  },
  {
    q: "Devo essere \"di destra\"?",
    a: "No. Chi condivide la nostra visione è dei nostri.",
  },
  {
    q: "I miei dati sono al sicuro?",
    a: "Sì. Il sito è ospitato su infrastruttura sovrana, i form sono cifrati end-to-end, e non condividiamo nessun dato con terzi, aziende o entità governative. Tutti i dati che chiederemo non saranno mai di tipo privato.",
  },
  {
    q: "Posso partecipare in modo anonimo?",
    a: "Sì. Puoi usare uno pseudonimo su Telegram e nei canali operativi. I form non chiederanno il tuo cognome o data di nascita. L'unico dato che ci serve al momento dell'iscrizione è un'email valida e la città (per capire la distribuzione geografica dei membri). Nessuno ti chiederà mai di mostrare la faccia o di dichiarare pubblicamente la tua adesione se non lo vuoi.",
  },
  {
    q: "Non c'è una sezione adatta a me. Che posso fare?",
    a: "Periodicamente rilasceremo nuove sezioni operative per avere un'elite a 360 gradi, in ogni ambito. Puoi aspettare l'uscita di quella che farà al caso tuo, rimanendo connesso per non perderti annunci e novità, tenendo a mente che i membri sono altrettanto importanti.",
  },
  {
    q: "Posso stare in più sezioni contemporaneamente?",
    a: "Sì, se hai le competenze e il tempo per contribuire davvero a entrambe. Nessuna esclusività.",
  },
  {
    q: "Quanto tempo devo dedicarci?",
    a: "Quanto vuoi. Come Membro base ti chiediamo solo di leggere le email, seguire la pagina Instagram di GenerΛzione, seguire il canale Telegram attentamente, e completare le azioni che condivideremo all'interno di ognuno di questi medium. Se vieni accettato all'interno di una sezione operativa, l'impegno cresce a seconda del ruolo che scegli e delle missioni che accetti.",
  },
  {
    q: "Cosa succede se non sono attivo?",
    a: "Nulla di punitivo. Resti in mailing list e sui canali. Ma i membri che partecipano regolarmente vengono nel tempo classificati e ricevono priorità sugli inviti agli eventi ristretti, sulle premiere in anteprima e sui ruoli di responsabilità futuri.",
  },
  {
    q: "Siete un partito?",
    a: "No. GenerΛzione è un movimento culturale e generazionale apolitico. Non presentiamo candidati, non partecipiamo a elezioni, non firmiamo manifesti di partito.",
  },
  {
    q: "Collaborate con partiti?",
    a: "No. Nessuna affiliazione con nessun partito politico esistente. Alcuni nostri membri possono avere simpatie individuali per l'uno o l'altro, ma il movimento come tale è indipendente e non prende ordini da nessuna forza politica.",
  },
  {
    q: "Cosa pensate della violenza?",
    a: "La rifiutiamo integralmente. La nostra guerra è culturale, intellettuale, mediatica, organizzativa. Chi cerca uno sfogo violento non è dei nostri.",
  },
  {
    q: "Chi c'è dietro GenerΛzione?",
    a: "Il movimento nasce dall'incontro tra Luca Venier, studente di scienze politiche e creatore di contenuti su identità europea e filosofia politica, e Andrea, attivista e co-fondatore del famigerato Remigration Summit, e cresce con l'apporto di migliaia di giovani italiani che lavorano per costruire il proprio futuro.",
  },
  {
    q: "Come vi finanziate?",
    a: "In questa fase non abbiamo sponsor, non riceviamo fondi da partiti, non abbiamo investitori esterni e non vendiamo nulla.",
  },
  {
    q: "Ci saranno eventi fisici?",
    a: "Sì, ci saranno eventi fisici. I primi ad essere informati, gli unici a poter prendervi parte e a ricevere priorità partecipativa saranno in ordine: appartenenti a una o più sezioni operative, membri.",
  },
  {
    q: "Posso partecipare solo da remoto?",
    a: "Sì. Quasi tutte le sezioni sono nate come reti digitali distribuite. Alcuni eventi e sezioni, per loro natura, richiedono presenza fisica, ma tutti gli altri ruoli sono compatibili con partecipazione online-only.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="border-b"
      style={{ borderColor: "oklch(1 0 0 / 0.07)" }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span
          className="text-sm sm:text-base font-semibold pr-8 group-hover:text-primary transition-colors duration-200"
          style={{ color: open ? "oklch(0.70 0.14 142)" : "oklch(0.85 0.015 142)" }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <Plus
            className="w-4 h-4 transition-colors duration-200"
            style={{ color: open ? "oklch(0.60 0.19 142)" : "oklch(0.50 0.01 142)" }}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-sm leading-relaxed"
              style={{ color: "oklch(0.60 0.01 142)" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  return (
    <section id="faq" className="relative px-4 sm:px-6 lg:px-8 py-24 border-t border-primary/10">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/25 bg-primary/5 rounded-full px-4 py-1.5">
            FAQ
          </span>
        </motion.div>

        <div>
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
