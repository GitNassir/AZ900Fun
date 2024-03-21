import { Component, OnInit } from '@angular/core';
import {quizQuestions} from "../../../Models/quizQuestions.model";

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements OnInit {
  cloudQuizQuestions: quizQuestions[] = [
    {
      question: "Hvad karakteriserer cloud computing?",
      options: [
        {
          option: "Data lagres lokalt på brugerens computer",
          correct: false,
          explanation: "Denne påstand modsiger grundprincippet i cloud computing, som indebærer, at data er lagret på fjerne servere og tilgængeligt over internettet, hvilket giver brugere adgang til deres data hvor som helst, så længe de har en internetforbindelse. Dette er modsat lokalt gemte data, hvor adgang er begrænset til den specifikke enhed."
        },
        {
          option: "Ressourcer deles mellem mange brugere over internettet",
          correct: true,
          explanation: "Dette er en præcis karakteristik af cloud computing. Det beskriver, hvordan cloud-tjenester fungerer ved at poolere ressourcer såsom lagerplads og processorkraft, så de kan deles effektivt mellem flere brugere over internettet, hvilket optimerer effektiviteten og reducerer omkostningerne."
        },
        {
          option: "Det kræver betydelige kapitalinvesteringer i hardware",
          correct: false,
          explanation: "En af de væsentligste fordele ved cloud computing er netop reduktionen af behovet for forudgående store investeringer i hardware. Virksomheder kan udnytte cloud-tjenester uden at skulle investere i og vedligeholde egen fysisk infrastruktur, hvilket letter byrden af kapitaludgifter og overgår til en mere forudsigelig driftsomkostningsmodel."
        },
        {
          option: "Det er udelukkende forbeholdt statslige organisationer",
          correct: false,
          explanation: "Denne påstand er ukorrekt, da cloud computing er bredt tilgængeligt og anvendes af en mangfoldighed af organisationstyper, herunder private virksomheder, uddannelsesinstitutioner, nonprofitorganisationer og individuelle brugere, ud over statslige organisationer."
        }
      ]
    },
    {
      question: 'Hvad beskriver bedst en hybrid cloud-model?',
      options: [
        { option: 'En blanding af Linux og Windows servere', correct: false, explanation: 'Hybrid cloud refererer til kombinationen af on-premises og cloud ressourcer, ikke til blandingen af operativsystemer.' },
        { option: 'En kombination af on-premises og cloud-baserede ressourcer', correct: true, explanation: 'Dette beskriver præcist, hvad en hybrid cloud-model indebærer, hvor man integrerer lokale ressourcer med dem i skyen.' },
        { option: 'Brug af flere public clouds, men ingen private clouds', correct: false, explanation: 'Dette beskriver en multi-cloud strategi snarere end en hybrid cloud-model.' },
        { option: 'En cloud-service, der er halvt privat og halvt offentlig', correct: false, explanation: 'Hybrid cloud refererer til integrationen af private og offentlige clouds, ikke en halv/halv opdeling.' },
      ]
    },
    {
      question: 'Hvad er en vigtig fordel ved cloud computing?',
      options: [
        { option: 'Fast hardwareudgift', correct: false, explanation: 'Mens cloud computing kan optimere udgifter, er det ikke begrænset til fast hardwareudgift; det handler mere om skalerbarhed og fleksibilitet.' },
        { option: 'Automatisk softwareopdatering', correct: false, explanation: 'Selvom dette kan være en fordel ved visse cloud-tjenester, er det ikke en kernefordel ved cloud computing generelt.' },
        { option: 'Skalerbarhed', correct: true, explanation: 'Skalerbarhed er en nøglefordel ved cloud computing, da det tillader virksomheder at nemt justere deres ressourcebrug op eller ned.' },
        { option: 'Øget fysisk sikkerhed', correct: false, explanation: 'Selvom cloud-udbydere implementerer robust sikkerhed, refererer dette ikke direkte til den fysiske sikkerhed, som er mere relevant for on-premises datacentre.' },
      ]
    },
    {
      question: 'Hvad forstås ved "public cloud"?',
      options: [
        { option: 'Ressourcer ejet og drevet af en offentlig institution', correct: false, explanation: 'Public cloud refererer ikke til ejerskab af offentlige institutioner, men til cloud-ressourcer, der er tilgængelige offentligt over internettet.' },
        { option: 'Cloud-tjenester udelukkende for offentlige ansatte', correct: false, explanation: 'Public cloud-tjenester er generelt tilgængelige for alle brugere, ikke kun for offentlige ansatte.' },
        { option: 'Ressourcer leveret over internettet, åbne for alle brugere', correct: true, explanation: 'Dette beskriver præcist public cloud, hvor tjenester og ressourcer er tilgængelige for enhver over internettet.' },
        { option: 'En cloud, der bruger offentligt internet', correct: false, explanation: 'Mens public clouds anvender offentligt internet, er denne beskrivelse ikke fuldstændig for at definere en public cloud.' },
      ]
    },
    {
      question: 'Hvilken udtalelse om private clouds er korrekt?',
      options: [
        { option: 'De er placeret på off-site datacentre', correct: false, explanation: 'Private clouds kan være placeret både on-site og off-site; det afgørende er, at infrastrukturen er dedikeret til én organisation.' },
        { option: 'De tilbydes normalt af tredjepartsudbydere', correct: false, explanation: 'Selvom tredjepartsudbydere kan administrere private clouds, er det ikke et definerende træk.' },
        { option: 'De er eksklusive for en organisation', correct: true, explanation: 'Dette er korrekt, da en privat cloud er dedikeret til en enkelt organisation, uanset om den er hosted internt eller eksternt.' },
        { option: 'De kræver internetforbindelse for at fungere', correct: false, explanation: 'Selvom internetforbindelse kan være nødvendig for visse funktioner, kan private clouds også fungere i isolerede netværk.' },
      ]
    },
    {
      question: 'Hvad beskriver bedst "Platform as a Service" (PaaS)?',
      options: [
        { option: 'Infrastruktur leveret over internettet', correct: false, explanation: 'Mens PaaS inkluderer infrastruktur, fokuserer det mere på at give en platform til udvikling og implementering af applikationer.' },
        { option: 'Software leveret over internettet', correct: false, explanation: 'Dette beskriver mere "Software as a Service" (SaaS) end PaaS.' },
        { option: 'En platform for udvikling og implementering af applikationer', correct: true, explanation: 'Dette beskriver nøjagtigt, hvad PaaS tilbyder: en cloud-baseret platform, der gør det muligt for udviklere at bygge, køre og administrere applikationer.' },
        { option: 'Leje af fysiske kontorer via internettet', correct: false, explanation: 'Dette har intet at gøre med PaaS, som fokuserer på softwareudvikling og ikke fysiske rum.' },
      ]
    },
    {
      question: 'Hvordan afregnes typisk tjenester i cloud computing?',
      options: [
        { option: 'Fast månedligt abonnement', correct: false, explanation: 'Mens nogle cloud-tjenester tilbydes via abonnementsmodeller, er det mere karakteristisk for cloud computing at være forbrugsbaseret.' },
        { option: 'Baseret på forbrug', correct: true, explanation: 'Forbrugsbaseret betaling, hvor brugerne betaler for de ressourcer, de faktisk forbruger, er en af de grundlæggende økonomiske attraktioner ved cloud computing.' },
        { option: 'Engangsbeløb for permanent adgang', correct: false, explanation: 'Dette er ikke typisk for cloud-tjenester, som ofte betales løbende baseret på brug eller gennem abonnementer.' },
        { option: 'Baseret på antallet af brugere', correct: false, explanation: 'Selvom nogle SaaS-løsninger kan være prissat pr. bruger, beskriver det ikke den generelle afregningsmodel for cloud computing.' },
      ]
    },
    {
      question: 'Hvilken funktion er typisk for "Software as a Service" (SaaS)?',
      options: [
        { option: 'Giver kunderne mulighed for at køre deres egen infrastruktur', correct: false, explanation: 'SaaS fjerner behovet for kunderne at køre deres egen infrastruktur ved at levere software over internettet.' },
        { option: 'Giver udviklere en platform til at bygge applikationer', correct: false, explanation: 'Dette er mere karakteristisk for Platform as a Service (PaaS) end for SaaS.' },
        { option: 'Leverer applikationer over internettet som en tjeneste', correct: true, explanation: 'Dette definerer SaaS, hvor applikationer leveres til brugere over internettet som en tjeneste.' },
        { option: 'Kræver at kunderne selv håndterer vedligeholdelse og opdateringer', correct: false, explanation: 'En af de store fordele ved SaaS er, at udbyderen håndterer vedligeholdelse og opdateringer, så kunderne ikke behøver at gøre det.' },
      ]
    },
    {
      question: 'Hvilken udtalelse om "Infrastructure as a Service" (IaaS) er korrekt?',
      options: [
        { option: 'Giver kunderne et komplet udviklingsmiljø', correct: false, explanation: 'Mens IaaS giver infrastruktur, er det PaaS, der typisk tilbyder et komplet udviklingsmiljø.' },
        { option: 'Giver kunderne kontrol over deres egen infrastruktur i skyen', correct: true, explanation: 'Dette er essensen af IaaS, hvor kunderne får adgang til og kontrol over infrastruktur i skyen, såsom servere og netværk, men uden de fysiske administrationsbyrder.' },
        { option: 'Giver kunderne færdige applikationer til brug', correct: false, explanation: 'Dette beskriver mere SaaS, hvor færdige applikationer leveres til brugeren som en tjeneste.' },
        { option: 'Tilbyder ingen kontrol over netværksressourcer', correct: false, explanation: 'IaaS giver faktisk brugeren kontrol over deres netværksressourcer, modsat hvad denne påstand siger.' },
      ]
    },
    {
      question: 'Hvad er et karakteristisk træk ved forbrugsbaseret model i cloud computing?',
      options: [
        { option: 'Brugere betaler et fast beløb uanset forbrug', correct: false, explanation: 'Dette modsiger princippet om forbrugsbaseret afregning, hvor betalingen afhænger af forbruget.' },
        { option: 'Brugere abonnerer på en tjeneste og betaler pr. time', correct: false, explanation: 'Selvom nogle cloud-tjenester faktisk kan opkræve pr. tidsenhed, er det ikke det eneste karakteristiske ved forbrugsbaseret afregning.' },
        { option: 'Brugere betaler kun for de ressourcer, de forbruger', correct: true, explanation: 'Dette beskriver præcist forbrugsbaseret afregning, hvor betalingen er direkte relateret til mængden af forbrugte ressourcer.' },
        { option: 'Brugere køber hardware, som cloud-udbyderen administrerer', correct: false, explanation: 'At købe hardware er ikke en del af forbrugsbaseret cloud computing; her lejes ressourcerne som en tjeneste.' },
      ]
    },


    {
      question: 'Hvilket udsagn bedst beskriver "Shared Responsibility Model" i cloud computing?',
      options: [
        { option: 'Cloud-udbyderen er ansvarlig for alt, inklusive kundens data og applikationer', correct: false, explanation: 'I en delt ansvarsmodel deler cloud-udbyderen og kunden ansvaret, hvor udbyderen typisk håndterer infrastrukturen, og kunden håndterer data og applikationer.' },
        { option: 'Kunden er alene ansvarlig for alle aspekter af cloud-tjenesten, inklusive infrastrukturen', correct: false, explanation: 'Dette er ikke korrekt, da udbyderen stadig har ansvaret for visse dele af tjenesten, såsom infrastrukturens sikkerhed.' },
        { option: 'Ansvaret er delt, hvor cloud-udbyderen typisk er ansvarlig for infrastrukturen, og kunden er ansvarlig for deres data', correct: true, explanation: 'Dette beskriver præcist den delt ansvarsmodel, hvor forskellige lag af tjenesten har forskellig ansvarsfordeling.' },
        { option: 'Ansvaret deles ligeligt mellem alle cloud-brugere', correct: false, explanation: 'Ansvaret er ikke nødvendigvis ligeligt fordelt, da det afhænger af tjenestemodellen (IaaS, PaaS, SaaS) og specifikke aftaler.' },
      ]
    },
    {
      question: 'Hvilken model beskriver bedst forbruget af cloud ressourcer, hvor brugeren betaler pr. ressourceenhed?',
      options: [
        { option: 'Flat-rate model', correct: false, explanation: 'Flat-rate modellen indebærer en fast pris, uanset forbruget, hvilket er det modsatte af hvad der spørges om.' },
        { option: 'Forudbetalt model', correct: false, explanation: 'Forudbetalt model indebærer forudbetaling for ressourcer, ikke nødvendigvis betaling pr. enhed forbrugt.' },
        { option: 'Forbrugsbaseret model', correct: true, explanation: 'Forbrugsbaseret model betyder netop, at brugeren betaler for de ressourceenheder, de faktisk forbruger.' },
        { option: 'Gratis model', correct: false, explanation: 'Den gratis model indebærer ingen omkostninger, så det er ikke relevant i denne sammenhæng.' },
      ]
    },
    {
      question: 'Hvilken cloud-tjenestemodel giver mest kontrol over operativsystemer, lagring og implementerede applikationer?',
      options: [
        { option: 'Software as a Service (SaaS)', correct: false, explanation: 'SaaS giver mindst kontrol, da brugeren primært interagerer med softwareapplikationer, ikke infrastrukturen.' },
        { option: 'Platform as a Service (PaaS)', correct: false, explanation: 'PaaS giver mere kontrol end SaaS, men fokuserer mere på applikationsudvikling end på dyb infrastrukturkontrol.' },
        { option: 'Infrastructure as a Service (IaaS)', correct: true, explanation: 'IaaS giver brugerne kontrol over operativsystemer, lagring og netværkskomponenter, hvilket giver mest kontrol blandt cloud-tjenestemodellerne.' },
        { option: 'Function as a Service (FaaS)', correct: false, explanation: 'FaaS fokuserer på individuelle funktioner eller stykker kode, hvilket giver mindre kontrol over hele systemet.' },
      ]
    },
    {
      question: 'Hvilken af følgende er IKKE en almindelig fordel ved cloud computing?',
      options: [
        { option: 'Reducerede driftsomkostninger', correct: false, explanation: 'Reducerede driftsomkostninger er faktisk en af de primære fordele ved cloud computing.' },
        { option: 'Ubegrænset lagringskapacitet', correct: false, explanation: 'Selvom cloud computing tilbyder omfattende skalerbarhed, er "ubegrænset" lagring en overforenkling.' },
        { option: '100% oppetidsgaranti', correct: true, explanation: 'Ingen cloud-tjeneste kan realistisk garantere 100% oppetid, da der altid er risiko for nedetid.' },
        { option: 'Skalerbarhed', correct: false, explanation: 'Skalerbarhed er en af de mest anerkendte fordele ved cloud computing, hvilket tillader organisationer at tilpasse deres ressourcebrug efter behov.' },
      ]
    },
    {
      question: 'Hvad indebærer det, at en cloud-tjeneste er "elastisk"?',
      options: [
        { option: 'Den kan strække sig fysisk for at rumme mere hardware', correct: false, explanation: 'Elasticitet refererer ikke til fysisk udvidelse, men til evnen til dynamisk at tilpasse ressourceallokeringen.' },
        { option: 'Den kan automatisk tilpasse sig ændringer i belastningen', correct: true, explanation: 'Elasticitet i cloud computing betyder, at tjenesten automatisk kan skalere ressourcer op eller ned i forhold til ændringer i belastning eller efterspørgsel.' },
        { option: 'Den kan kun køre elastiske applikationer', correct: false, explanation: 'Elasticitet er en egenskab ved cloud-tjenesten selv, ikke de applikationer, den kører.' },
        { option: 'Den understøtter kun elastiske databaser', correct: false, explanation: 'Elasticitet er en bredere egenskab, der ikke er begrænset til specifikke typer af databaser eller applikationer.' },
      ]
    },
    {
      question: 'Hvilken cloud computing-model er bedst egnet for en organisation, der har brug for at holde data privat og sikker?',
      options: [
        { option: 'Public Cloud', correct: false, explanation: 'Mens public clouds tilbyder omfattende tjenester, tilbyder de ikke den samme grad af privatliv og kontrol som private eller hybrid clouds.' },
        { option: 'Private Cloud', correct: true, explanation: 'En privat cloud tilbyder dedikerede ressourcer til en organisation, hvilket giver bedre kontrol over data og sikkerhed.' },
        { option: 'Hybrid Cloud', correct: false, explanation: 'Selvom hybrid clouds tilbyder fordele af begge verdener, er private clouds generelt bedre, når målet er maksimal kontrol og sikkerhed.' },
        { option: 'Community Cloud', correct: false, explanation: 'Community clouds er designet til at blive delt mellem organisationer med lignende krav, hvilket ikke nødvendigvis sikrer den privatlivs- og sikkerhedsniveau, som en enkelt organisation måtte kræve.' },
      ]
    },
    {
      question: 'Hvad beskriver "CapEx" i forhold til cloud computing?',
      options: [
        { option: 'Variabel udgift forbundet med forbruget af cloud-tjenester', correct: false, explanation: 'CapEx (kapitaludgifter) refererer til de engangs- eller faste investeringer i infrastruktur, ikke de variable omkostninger, som er mere relateret til OpEx (driftsomkostninger).' },
        { option: 'Kapitaludgifter til fysisk infrastruktur', correct: true, explanation: 'CapEx refererer til de opstartsomkostninger eller investeringer i fysisk infrastruktur, som ofte minimeres med cloud computing, da infrastrukturen lejes frem for købes.' },
        { option: 'Omkostninger forbundet med softwareudvikling', correct: false, explanation: 'Selvom softwareudvikling kan være en del af CapEx, er det i konteksten af cloud computing mere relevant at fokusere på infrastrukturinvesteringerne.' },
        { option: 'Udgifter til operativsystemer i clouden', correct: false, explanation: 'Operativsystemudgifter i clouden er typisk en del af de løbende driftsomkostninger eller OpEx, ikke CapEx.' },
      ]
    },
    {
      question: 'Hvilken fordel ved cloud computing refererer til evnen til hurtigt at øge eller mindske ressourcer?',
      options: [
        { option: 'Elasticitet', correct: true, explanation: 'Elasticitet beskriver præcist denne evne til hurtigt at skalere ressourcer op eller ned baseret på behov.' },
        { option: 'Compliance', correct: false, explanation: 'Compliance refererer til overholdelse af regler og standarder, ikke til skalerbarhed eller ressourcejustering.' },
        { option: 'Agilitet', correct: false, explanation: 'Agilitet er relateret til hurtig udvikling og tilpasning, men elasticitet er den specifikke term, der beskriver skalerbarhed af ressourcer.' },
        { option: 'Fejltolerance', correct: false, explanation: 'Fejltolerance refererer til systemets evne til at forblive operationelt selv i tilfælde af fejl, ikke til skalerbarhed.' },
      ]
    },
    {
      question: 'Hvilken udtalelse er sand, når man sammenligner CapEx og OpEx i cloud computing?',
      options: [
        { option: 'CapEx er altid højere end OpEx i cloud computing', correct: false, explanation: 'Det er ikke korrekt at sige, at CapEx altid er højere end OpEx; cloud computing kan faktisk hjælpe med at reducere CapEx.' },
        { option: 'OpEx eliminerer behovet for store, forudgående investeringer i infrastruktur', correct: true, explanation: 'Ved at flytte til en OpEx-model, kan virksomheder undgå store forudgående CapEx-investeringer, da de betaler for tjenester efterhånden som de bruger dem.' },
        { option: 'CapEx giver større fleksibilitet end OpEx', correct: false, explanation: 'Det er typisk OpEx, der giver mere fleksibilitet i cloud computing, da det tillader virksomheder at justere deres udgifter baseret på forbrug.' },
        { option: 'OpEx er de kapitaludgifter, der kræves for at etablere cloud-tjenester', correct: false, explanation: 'OpEx refererer til de løbende driftsomkostninger, ikke de opstartsomkostninger eller kapitaludgifter, der er associeret med at etablere tjenester.' },
      ]
    },
    {
      question: 'Hvilken teknologi er mest forbundet med cloud computing?',
      options: [
        { option: 'Big Data', correct: false, explanation: 'Selvom big data ofte behandles i skyen, er teknologien selv ikke grundlæggende for cloud computing.' },
        { option: 'Virtualisering', correct: true, explanation: 'Virtualisering er en kernekomponent i cloud computing, da den tillader flere virtuelle instanser at køre på samme fysiske hardware.' },
        { option: 'Quantum computing', correct: false, explanation: 'Quantum computing er en avanceret computingform, men er ikke grundlæggende forbundet med cloud computing.' },
        { option: 'Kryptografi', correct: false, explanation: 'Mens kryptografi er vigtigt for sikkerheden i cloud computing, er det ikke en teknologi, der er unik for eller mest forbundet med cloud computing.' },
      ]
    }
  ];
/*
*
  useCaseQuizQuestions: QuizQuestion[] = [
    {
      question: 'Et nystartet firma ønsker at minimere deres opstartsomkostninger ved at undgå store investeringer i hardware. De har brug for fleksibilitet til hurtigt at skalere deres IT-ressourcer baseret på efterspørgsel. Hvilken cloud-tjenestemodel bør de overveje?',
      options: [
        { option: 'Private Cloud', correct: false },
        { option: 'Hybrid Cloud', correct: false },
        { option: 'Public Cloud', correct: true },
        { option: 'Community Cloud', correct: false },
      ]
    },
    {
      question: 'En offentlig organisation, der håndterer følsomme data, ønsker at flytte deres infrastruktur til skyen. De har brug for fuld kontrol over deres miljø og skal overholde strenge compliance-krav. Hvilken cloud-model er mest hensigtsmæssig?',
      options: [
        { option: 'Public Cloud', correct: false },
        { option: 'Private Cloud', correct: true },
        { option: 'Hybrid Cloud', correct: false },
        { option: 'Community Cloud', correct: false },
      ]
    },
    {
      question: 'En global virksomhed ønsker at benytte cloud computing til at støtte deres geografisk spredte teams med adgang til de samme ressourcer og applikationer. De har brug for en løsning, der kombinerer on-premises ressourcer med cloud-ressourcer. Hvilken cloud-model passer bedst til dette behov?',
      options: [
        { option: 'Public Cloud', correct: false },
        { option: 'Private Cloud', correct: false },
        { option: 'Hybrid Cloud', correct: true },
        { option: 'Community Cloud', correct: false },
      ]
    },
    {
      question: 'En softwareudviklingsvirksomhed ønsker at benytte cloud computing for at kunne skalere deres udviklings- og testmiljøer op og ned hurtigt. De ønsker en løsning, hvor de betaler baseret på forbruget af computing-ressourcer. Hvilken prisstruktur bør de vælge?',
      options: [
        { option: 'Fast månedlig abonnement', correct: false },
        { option: 'Forbrugsbaseret model', correct: true },
        { option: 'Engangsbeløb for permanent adgang', correct: false },
        { option: 'Årlig licens', correct: false },
      ]
    },
    {
      question: 'En virksomhed overvejer at anvende en cloud-løsning for at understøtte deres voksende dataanalysebehov. De ønsker at sikre, at omkostningerne til cloud-ressourcerne kan skaleres med virksomhedens vækst. Hvilken cloud-tjenestemodel bør de overveje?',
      options: [
        { option: 'IaaS', correct: true },
        { option: 'PaaS', correct: false },
        { option: 'SaaS', correct: false },
        { option: 'FaaS', correct: false },
      ]
    },
    {
      question: 'En e-handelsplatform oplever varierende belastning med betydelige trafikspidser omkring helligdage. De ønsker at sikre, at deres infrastruktur automatisk kan skalere for at imødekomme disse skiftende krav uden manuel intervention. Hvilken feature bør de primært søge i en cloud-løsning?',
      options: [
        { option: 'Automatisk skalering', correct: true },
        { option: 'Dedikeret hosting', correct: false },
        { option: 'Private cloud', correct: false },
        { option: 'Langsigtet aftale om ressourcer', correct: false },
      ]
    },
    {
      question: 'Et finansielt firma, der håndterer følsomme kundedata, overvejer at flytte til skyen. De skal overholde strenge sikkerheds- og privatlivsregulativer. Hvilken model bør de vælge for at sikre overensstemmelse og bevare datakontrol?',
      options: [
        { option: 'Public Cloud', correct: false },
        { option: 'Private Cloud', correct: true },
        { option: 'Hybrid Cloud', correct: false },
        { option: 'Community Cloud', correct: false },
      ]
    },
    {
      question: 'En organisation ønsker at udnytte cloud computing til at levere en platform, hvor udviklere kan bygge, teste og implementere applikationer uden at skulle administrere den underliggende infrastruktur. Hvilken tjeneste bør de anvende?',
      options: [
        { option: 'IaaS', correct: false },
        { option: 'PaaS', correct: true },
        { option: 'SaaS', correct: false },
        { option: 'DaaS', correct: false },
      ]
    },
    {
      question: 'En virksomhed har en ældre on-premises applikation, der kræver en betydelig omstrukturering for at køre i skyen. De ønsker at bevare applikationen on-premises, men vil udnytte skyen til nye tjenester og applikationer. Hvilken cloud-tilgang passer bedst til deres behov?',
      options: [
        { option: 'All-in cloud migration', correct: false },
        { option: 'Hybrid Cloud', correct: true },
        { option: 'Multi-cloud', correct: false },
        { option: 'Public Cloud', correct: false },
      ]
    },
    {
      question: 'En medievirksomhed ønsker at lagre enorme mængder af videodata på en omkostningseffektiv måde. De har brug for hurtig adgang til disse data, men kun en lille procentdel ad gangen. Hvilken type cloud storage-løsning er mest passende?',
      options: [
        { option: 'Block Storage', correct: false },
        { option: 'Object Storage', correct: true },
        { option: 'File Storage', correct: false },
        { option: 'Cold Storage', correct: false },
      ]
    }
  ];
  *
  *     <app-quiz [questions]="useCaseQuizQuestions"></app-quiz>

* */



  constructor() { }

  ngOnInit(): void {
  }
}
