import { useState } from "react";

const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600;700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { background: #ffffff; -webkit-tap-highlight-color: transparent; }
    button { font-family: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
    :root {
      --black:   #111110;
      --grey1:   #f5f5f4;
      --grey2:   #e8e8e6;
      --grey3:   #c4c4c0;
      --grey4:   #8a8a85;
      --green:   #2d6a4f;
      --green-l: #f0f7f4;
    }
  `}</style>
);

/* ── DATA ───────────────────────────────────────────────────── */
const recipes = [
  {
    id: 1,
    category: "Backen",
    title: "Veganer Zitronen-Mohn-Kuchen",
    source: "Zucker & Jagdwurst",
    prep: "20 Min.",
    bake: "60 Min.",
    form: "Kastenform 31 cm",
    description:
      "Saftiger veganer Klassiker mit feiner Zitronennote, knusprigen Mohnsamen und schneeweißer Zuckerglasur.",
    ingredients: {
      "Für den Teig": [
        "450 g Weizenmehl (Type 405)",
        "16 g (1,5 EL) Backpulver",
        "8 g (1,5 TL) Vanillezucker",
        "0,5 TL Salz",
        "3 Zitronen (Abrieb und Saft)",
        "200 g Zucker",
        "200 g pflanzliche Margarine",
        "200 ml pflanzliche Milch",
        "100 ml Sprudelwasser",
        "4 EL Mohnsamen",
      ],
      "Für die Glasur": [
        "250 g Puderzucker",
        "ca. 3 EL Zitronensaft (oder Wasser)",
      ],
      Außerdem: ["Mehl zum Bestäuben", "pflanzliche Margarine zum Einfetten"],
    },
    steps: [
      "Den Ofen auf 200 °C (Ober-/Unterhitze) vorheizen. In einer großen Schüssel Mehl, Backpulver, Vanillezucker, Salz und den Abrieb einer Zitrone verrühren.",
      "In einer weiteren Schüssel Margarine und Zucker aufschlagen. Die Mischung zur Mehlmischung geben und beides kurz vermengen.",
      "Pflanzliche Milch, Sprudelwasser und ca. 60 ml Zitronensaft dazugeben. Den restlichen Saft beiseitestellen. Alles gründlich, aber zügig verrühren. Zum Schluss Mohnsamen kurz unterrühren.",
      "Kastenform einfetten und mit Mehl bestäuben. Teig einfüllen, bei 200 °C ca. 60 Min. backen. Nach 15 Min. längs einschneiden. Nach dem Backen Oberfläche einstechen und mit Zitronensaft bestreichen.",
      "Puderzucker mit Zitronensaft zu einem dicken Guss verrühren. Vollständig ausgekühlten Kuchen damit überziehen und trocknen lassen.",
    ],
    tip: "Stäbchenprobe: Holzspieß schräg einstechen – bleibt kein Teig haften, ist der Kuchen fertig. Vollständig auskühlen lassen, bevor er aus der Form genommen wird.",
  },
  {
    id: 2,
    category: "Backen",
    title: "Veganes Marmor-Bananenbrot",
    source: "Zucker & Jagdwurst",
    prep: "15 Min.",
    bake: "60 Min.",
    form: "Kastenform 22,5 cm",
    description:
      "Saftiges veganes Bananenbrot mit einem Schoko-Swirl – perfekt für überreife Bananen und alle, die es nicht ganz entscheiden können.",
    ingredients: {
      "Für den hellen Teig": [
        "420 g Dinkelmehl (Typ 630)",
        "16 g (4 TL) Backpulver",
        "100 g Zucker",
        "1,5 TL gemahlene Vanille",
        "10 g Speisestärke",
        "0,5 TL Salz",
        "2 sehr reife Bananen (ca. 200 g)",
        "220 ml pflanzliche Milch",
        "180 ml neutrales Pflanzenöl",
      ],
      "Für den Schokoteig": [
        "2–3 EL (30 g) Backkakao",
        "60 ml pflanzliche Milch",
      ],
      Außerdem: [
        "1 sehr reife Banane (zur Dekoration)",
        "vegane Butter zum Einfetten",
      ],
    },
    steps: [
      "Den Ofen auf 180 °C (Ober-/Unterhitze) vorheizen. Eine Kastenform (ca. 22,5 cm) mit veganer Butter einfetten.",
      "Dinkelmehl, Backpulver, Zucker, gemahlene Vanille, Speisestärke und Salz in eine Schüssel geben und vermengen.",
      "Die zwei Bananen, pflanzliche Milch und Pflanzenöl in einen Mixer geben und glatt pürieren. Anschließend zu den trockenen Zutaten geben und alles zu einem glatten Teig rühren.",
      "Ein Drittel des Teigs in eine kleine Schüssel umfüllen. Den Backkakao und 60 ml pflanzliche Milch dazugeben und gut unterrühren, bis eine gleichmäßige Kakaomasse entstanden ist.",
      "Zuerst den hellen Teig in die Kastenform füllen, dann den dunklen Teig darauf geben. Mit einem Löffel von unten nach oben durch den Teig fahren, um einen Marmor-Swirl zu erzeugen.",
      "Die übrige Banane der Länge nach halbieren und mit der Schnittfläche nach oben auf den Teig legen. Das Bananenbrot ca. 60 Minuten bei 180 °C backen, bis ein Holzstäbchen sauber herauskommt. Falls die Oberfläche zu dunkel wird, mit Alufolie abdecken. Ca. 10 Minuten in der Form abkühlen lassen, dann stürzen und auf einem Gitter vollständig auskühlen lassen.",
    ],
    tip: "Sehr reife, fast schwarze Bananen verwenden – sie sind süßer und sorgen für einen intensiveren Bananengeschmack.",
  },
  {
    id: 3,
    category: "Frühstück",
    title: "Vegane Pancakes mit Zitrone & pflanzlichem Joghurt",
    source: "Zucker & Jagdwurst",
    prep: "30 Min.",
    bake: "ca. 20 Min.",
    form: "12 Pancakes",
    description:
      "Fluffige vegane Pancakes mit frischer Zitronennote – serviert mit pflanzlichem Joghurt, Beeren und Nüssen. Perfekt für ein entspanntes Frühstück.",
    ingredients: {
      "Für den Teig": [
        "300 g Mehl",
        "150 ml pflanzliche Milch",
        "1 Pck (15 g) Backpulver",
        "180 g pflanzlicher Joghurt",
        "4 EL brauner Zucker",
        "1 Zitrone (Abrieb und Saft)",
        "1 Prise Salz",
        "pflanzliches Öl zum Ausbacken",
      ],
      Toppings: [
        "frische Beeren",
        "frische Minze",
        "Nüsse (z. B. Pekannüsse, Haselnüsse)",
        "pflanzlicher Joghurt",
      ],
    },
    steps: [
      "Die Zitrone heiß waschen und gut putzen.",
      "Alle Zutaten für den Teig in einer Schüssel vermischen und den Abrieb sowie den Saft der Zitrone hinzugeben. Den Teig 10 Minuten stehen lassen.",
      "Etwas pflanzliches Öl in einer kleinen Pfanne erhitzen und die Pancakes auf kleiner Stufe nach und nach von beiden Seiten ausbacken (2–3 EL Teig pro Pancake). Die Pancakes erst wenden, wenn kleine Bläschen auf der Oberfläche zu sehen sind und der Rand sich abrundet.",
      "Mit pflanzlichem Naturjoghurt, Minzblättern, etwas Zitronenabrieb und Nüssen servieren.",
    ],
    tip: "Den Teig wirklich 10 Minuten ruhen lassen – das Backpulver aktiviert sich und die Pancakes werden deutlich fluffiger.",
  },
  {
    id: 13,
    category: "Soßen",
    title: "Cremige Erdnuss-Sauce",
    source: "Cookmate",
    prep: "5 Min.",
    bake: "0 Min.",
    form: "2 Portionen",
    description:
      "Schnelle cremige Erdnuss-Sauce mit Ingwer, Knoblauch und Sriracha – perfekt zu Udon-Nudeln, Bowls oder als Dip.",
    ingredients: {
      "Für die Sauce": [
        "30 g Erdnussbutter",
        "2 Knoblauchzehen, fein gerieben",
        "10 g Ingwer, fein gerieben",
        "2 TL Reisessig",
        "2 TL Sesamöl (geröstet)",
        "2 TL Thai-Chilisauce (Sriracha)",
        "1 TL Agavendicksaft",
        "2 EL Wasser",
      ],
    },
    steps: [
      "Knoblauch schälen und fein reiben.",
      "Ingwer schälen und fein reiben.",
      "Erdnussbutter, Knoblauch, Ingwer, Reisessig, Sesamöl, Sriracha, Agavendicksaft und Wasser in einer Schüssel glattrühren.",
    ],
    tip: "Mit mehr Wasser verdünnen für eine leichtere Sauce, weniger Wasser für einen dickeren Dip. Wer es weniger scharf mag, einfach weniger Sriracha verwenden.",
  },
  {
    id: 4,
    category: "Kochen",
    title: "Vegane Kidney-Bohnen-Wraps",
    source: null,
    prep: "20 Min.",
    bake: "10 Min.",
    form: "2 Portionen",
    description:
      "Herzhafte Wraps mit würziger Bohnenmasse, knackigem Gemüse und einem Spritzer Limette – schnell, sättigend und voller Protein.",
    ingredients: {
      "Haupt-Zutaten": [
        "2 große Wraps",
        "400 g Kidneybohnen (Dose, abgespült)",
        "1 Zwiebel",
        "frische Petersilie",
        "3 EL Haferflocken",
        "2 EL Ahornsirup",
        "3 EL Sojasauce",
        "1 EL Senf",
        "1 EL Tomatenmark",
        "Pfeffer, Paprikapulver",
      ],
      "Für die Füllung": [
        "Salat",
        "Tomaten",
        "Gurke",
        "rote Zwiebeln (optional eingelegt)",
        "Limette",
        "Sriracha Mayo (optional)",
      ],
    },
    steps: [
      "Kidneybohnen abspülen und grob mit einer Gabel oder einem Stampfer zerdrücken.",
      "Zwiebel und frische Petersilie fein hacken und zu den Bohnen geben.",
      "Haferflocken, Ahornsirup, Sojasauce, Senf, Tomatenmark sowie Pfeffer und Paprikapulver dazugeben und gut verrühren.",
      "Salat, Tomaten, Gurke und rote Zwiebeln in dünne Streifen oder Scheiben schneiden.",
      "Bohnenmasse auf die Wraps verteilen – nicht zu viel, damit sie sich gut rollen lassen.",
      "In etwas Öl zuerst mit der Bohnenseite nach unten anbraten, bis sie knusprig ist. Dann wenden.",
      "Mit Salat, Gemüse, Petersilie und einem Spritzer Limette belegen.",
      "Optional Sriracha Mayo dazugeben, einrollen und heiß genießen!",
    ],
    tip: "Für extra Crunch Rucola, geröstete Kürbiskerne oder geröstete Zwiebeln dazugeben. Für mehr Schärfe Sriracha, Chiliflocken oder eingelegte Jalapeños verfeinern.",
  },
  {
    id: 5,
    category: "Backen",
    title: "Vegane Zimtschnecken",
    source: "Zucker & Jagdwurst",
    prep: "30 Min.",
    bake: "20 Min. (+ 2,5 Std. Ruhezeit)",
    form: "12 Portionen",
    description:
      "Fluffige vegane Zimtschnecken mit butterweichem Hefeteig und einer großzügigen Zimt-Zucker-Füllung – gelingsicher und unwiderstehlich.",
    ingredients: {
      "Für den Hefeteig": [
        "250 g pflanzliche Milch",
        "10 g frische Hefe",
        "500 g Weizenmehl (Type 550)",
        "100 g Zucker",
        "8 g Salz",
        "100 g vegane Butter",
      ],
      "Für die Füllung": [
        "150 g vegane Butter (weich)",
        "100 g brauner Zucker",
        "4 EL Zimt",
        "Salz",
      ],
      "Ansonsten": [
        "100 g pflanzliche Milch zum Bestreichen",
      ],
    },
    steps: [
      "Für den Hefeteig die pflanzliche Milch lauwarm erwärmen, einen Esslöffel Zucker einrühren und die Hefe darin auflösen. Die Mischung 15 Minuten stehen lassen, bis sie sichtbar Blasen schlägt.",
      "Mehl, restlichen Zucker, Salz und die Hefemilch in einer großen Schüssel 8 Minuten zu einem glatten Teig verkneten. Zu einer runden Kugel formen, abdecken und 30 Minuten bei Raumtemperatur ruhen lassen. Vegane Butter würfeln und 5 Minuten unter den Teig kneten. Erneut abdecken und weitere 90 Minuten ruhen lassen.",
      "Für die Füllung vegane Butter mit braunem Zucker, Zimt und Salz glattrühren.",
      "Den Ofen auf 180 °C (Ober-/Unterhitze) vorheizen und eine rechteckige Auflaufform einfetten. Den Hefeteig auf der bemehlten Arbeitsfläche ca. 5 mm dick zu einem Rechteck ausrollen, die Füllung gleichmäßig verteilen. Von der längeren Seite aufrollen und in 12 gleich dicke Scheiben schneiden.",
      "Die Schnecken mit etwas Abstand in die Form legen, erneut abdecken und 30 Minuten ruhen lassen. Dünn mit pflanzlicher Milch bestreichen und ca. 20 Minuten bei 180 °C backen.",
      "Nach dem Backen noch heiß mit etwas pflanzlicher Milch bestreichen und abkühlen lassen.",
    ],
    tip: "Die Hefe sollte wirklich schäumen, bevor es weitergeht – das ist das Zeichen, dass sie aktiv ist. Kalte Hefe oder zu heiße Milch (über 40 °C) lässt den Teig nicht aufgehen.",
  },
  {
    id: 6,
    category: "Salate",
    title: "Einfacher mediterraner Nudelsalat",
    source: "Kitchen Stories",
    prep: "20 Min.",
    bake: "10 Min.",
    form: "2 Portionen",
    description:
      "Schneller mediterraner Nudelsalat mit Rucola, getrockneten Tomaten, Paprika und gerösteten Pinienkernen – lauwarm am besten.",
    ingredients: {
      "Zutaten": [
        "250 g kurze Pasta (z. B. Penne)",
        "125 g Cocktailtomaten",
        "100 g getrocknete Tomaten in Öl",
        "150 g gegrillte Paprika (rot)",
        "100 g Rucola",
        "1 rote Zwiebel",
        "60 g Pinienkerne",
        "4 EL Öl der getrockneten Tomaten",
        "2 EL Balsamicoessig (weiß)",
        "Salz",
        "Pfeffer",
      ],
    },
    steps: [
      "Nudeln in reichlich siedendem Salzwasser nach Packungsanweisung ca. 8–10 Minuten al dente kochen. Abgießen und abkühlen lassen.",
      "Rote Zwiebel halbieren und in feine Ringe schneiden. Getrocknete Tomaten abtropfen lassen und dabei das Öl auffangen. Tomaten in Streifen schneiden. Cocktailtomaten halbieren und gegrillte Paprika in mundgerechte Stücke schneiden.",
      "Pinienkerne in einer kleinen Pfanne goldbraun anrösten.",
      "Gekochte Pasta mit Zwiebelringen, Cocktailtomaten, Paprika, getrockneten Tomaten, gerösteten Pinienkernen und Rucola vermengen. Das aufgefangene Öl und den Balsamicoessig hinzufügen. Kräftig salzen und pfeffern.",
    ],
    tip: "Lauwarm servieren – dann entfalten die Aromen sich am besten. Das Öl der getrockneten Tomaten gibt dem Salat extra Geschmack, unbedingt auffangen!",
  },
  {
    id: 12,
    category: "Salate",
    title: "Linsen-Ofengemüse-Salat",
    source: "@koro_de",
    prep: "15 Min.",
    bake: "30 Min.",
    form: "3 Portionen",
    description:
      "Herzhafter Salat mit geröstetem Ofengemüse, Linsen, Datteln und einem cremigen Tahini-Joghurt-Dressing – perfektes Picknick-Mitbringsel.",
    ingredients: {
      "Für den Salat": [
        "2 Dosen Linsen (je 240 g Abtropfgewicht)",
        "3–4 große Zucchini",
        "5 mittelgroße Karotten",
        "2 große rote Zwiebeln",
        "6 EL Olivenöl",
        "2 TL Kreuzkümmel",
        "2 TL Paprikapulver",
        "1 TL Zimt",
        "1 TL Knoblauchpulver (optional)",
        "Salz, Pfeffer",
        "100 g Mandeln",
        "50 g gehackte Datteln",
        "1 großer Bund Petersilie",
      ],
      "Für das Tahini-Joghurt Dressing": [
        "250 g pflanzlicher Joghurt",
        "5–6 EL Tahini",
        "1 EL Olivenöl",
        "4 EL Zitronensaft",
        "½ TL Kreuzkümmel",
        "1 EL Ahornsirup oder Agavendicksaft",
        "1 kleine Knoblauchzehe, fein gerieben",
        "5–8 EL Wasser",
        "Salz",
      ],
    },
    steps: [
      "Backofen auf 220 °C Umluft vorheizen und ein Blech mit Backpapier belegen. Karotten längs halbieren und in mundgerechte Stücke schneiden, Zucchini in Scheiben, Zwiebeln in große Stücke. Alles auf das Blech geben, mit Olivenöl, Kreuzkümmel, Paprikapulver, Zimt, Knoblauchpulver, Salz und Pfeffer gut mischen und 25–30 Minuten rösten, bis alles weich und goldbraun ist.",
      "Mandeln grob hacken und in einer Pfanne ohne Öl 3–4 Minuten rösten, bis sie duften. Beiseitestellen.",
      "Linsen in ein Sieb geben, kalt abspülen und gut abtropfen lassen.",
      "Für das Dressing Joghurt, Tahini, Zitronensaft, Ahornsirup, Knoblauch und eine Prise Salz verrühren. Mit Wasser auf die gewünschte Konsistenz bringen.",
      "Petersilie grob hacken.",
      "Geröstetes Gemüse 5 Minuten abkühlen lassen und dann mit den Linsen mischen. Datteln und die Hälfte der Petersilie unterheben.",
      "Auf Teller geben, großzügig Dressing darüber träufeln und mit Mandeln, restlicher Petersilie und Granatapfel toppen.",
    ],
    tip: "Der Salat schmeckt auch kalt sehr gut – ideal zum Vorbereiten. Das Dressing separat aufbewahren und erst kurz vor dem Servieren darüber geben.",
  },
  {
    id: 7,
    category: "Kochen",
    title: "Knusprige Tofu-Nuggets",
    source: "@andiverwuerzt",
    prep: "20 Min. (+ Einfrierzeit)",
    bake: "25–30 Min.",
    form: "12 Stück",
    description:
      "Außen goldbraun, innen saftig – der Geheimtrick ist das Einfrieren des Tofus. Dadurch bekommt er die perfekte, poröse Nugget-Textur.",
    ingredients: {
      "Für die Nuggets": [
        "400 g Naturtofu (z. B. Taifun)",
        "800 ml Gemüsebrühe (gesalzen)",
      ],
      "Ummantelung": [
        "140 ml Sojamilch",
        "2 EL Apfelessig",
        "40 g Maisstärke",
      ],
      "Panade": [
        "100 g Semmelbrösel (Vollkorn, fein & grob gemischt)",
        "1 TL Paprikapulver (geräuchert)",
        "1 TL Oregano (gerebelt)",
        "½ TL Zwiebelpulver",
        "½ TL Knoblauchpulver",
        "⅓ TL Salz",
      ],
    },
    steps: [
      "Den Tofu einfrieren – das ist der wichtigste Schritt! Dabei bilden sich Eiskristalle, die Wasser aus der Struktur drücken und kleine Hohlräume hinterlassen. Nach dem Auftauen sorgt genau diese poröse Struktur für die perfekte Nugget-Konsistenz.",
      "Den Tofu auftauen lassen (z. B. morgens in ein Sieb im Spülbecken legen) und dann 5 Minuten in der Gemüsebrühe kochen. Dadurch wird er entwässert und gleichzeitig gewürzt. Herausnehmen, etwas abkühlen lassen und leicht ausdrücken.",
      "Die Panierstraße vorbereiten: eine Schüssel mit Maisstärke, eine mit Sojamilch und Apfelessig verrührt (ergibt eine Art Buttermilch), eine dritte mit der gemischten Panade.",
      "Den Tofu in 12 Stücke reißen – wirklich reißen, nicht schneiden! So haften die Brösel besser.",
      "Die Nuggets zuerst in der Maisstärke wälzen, leicht abklopfen, in die Sojamilch-Mischung tunken und dann panieren. Für extra Knusprigkeit: nochmals kurz in die Milch tunken und ein zweites Mal panieren.",
      "Backofen auf 200 °C Umluft vorheizen. Nuggets auf ein Backblech legen (optional mit Ölspray besprühen) und 15 Minuten backen. Umdrehen und weitere 10–15 Minuten backen, bis sie goldbraun und kross sind. Alternativ in Öl frittieren oder in der Heißluftfritteuse garen.",
    ],
    tip: "Für maximale Knusprigkeit den Tofu zweimal panieren und vor dem Backen mit Ölspray besprühen. Die Sojamilch-Apfelessig-Mischung kurz stehen lassen – sie dickt etwas ein und haftet besser.",
  },
  {
    id: 8,
    category: "Kochen",
    title: "Knusprige Enoki-Pilze",
    source: "@veganewunder",
    prep: "15 Min.",
    bake: "10 Min.",
    form: "1 Portion",
    description:
      "Außen kross, innen zart – frittierte Enoki-Pilze in würzigem Teig. Besser als Fried Chicken, versprochen.",
    ingredients: {
      "Für den Teig": [
        "200 g Enoki-Pilze",
        "100 g Mehl (Weizen- oder Reismehl, für extra Crunch)",
        "50 g Speisestärke",
        "1 TL Backpulver",
        "ca. 150 ml eiskaltes Wasser oder Sprudelwasser",
      ],
      "Würz-Mischung": [
        "1 TL Paprikapulver (edelsüß)",
        "½ TL geräuchertes Paprikapulver",
        "1 TL Knoblauchpulver",
        "½ TL Cayennepfeffer oder Chiliflocken",
        "1 TL Salz",
        "½ TL schwarzer Pfeffer",
      ],
      "Zum Anrichten": [
        "vegane Mayo mit etwas Chili-Sauce oder Sriracha verrührt",
        "Limettenspalten (optional)",
      ],
    },
    steps: [
      "Die Enoki-Pilze vom harten Strunk trennen und in kleine Büschel zerteilen, sodass sie wie Chicken-Strips aussehen.",
      "Mehl, Speisestärke, Backpulver und alle Gewürze in einer Schüssel vermischen. Mit dem eiskalten Wasser zu einem dickflüssigen Teig verrühren. Der Teig sollte schwer vom Löffel laufen – nicht zu dünn, damit er schön haftet.",
      "Öl in einem Topf oder einer tiefen Pfanne erhitzen. Die Enoki-Büschel in den Teig tauchen, kurz abtropfen lassen und direkt ins heiße Öl geben. Bei mittlerer bis hoher Hitze goldbraun und knusprig ausbacken, dabei einmal wenden.",
      "Die frittierten Pilze herausnehmen und auf Küchenpapier abtropfen lassen. Mit der Chili-Mayo und optional Limettenspalten servieren.",
    ],
    tip: "Eiskaltes Wasser oder Sprudelwasser im Teig ist der Trick für maximale Knusprigkeit – der Temperaturunterschied zum heißen Öl sorgt für den perfekten Crunch. Sofort servieren, solange sie heiß sind!",
  },
  {
    id: 9,
    category: "Kochen",
    title: "Neapolitanischer Pizzateig",
    source: "Waldis Pizza",
    prep: "30 Min. (+ 10–26 Std. Gehzeit)",
    bake: "60–90 Sek.",
    form: "3–5 Pizzen (à 200–280 g)",
    description:
      "Der echte neapolitanische Pizzateig – wenig Hefe, lange Fermentation, perfekter Rand. Mit diesem Rezept gelingt die klassische Pizza Napoletana auch zuhause.",
    ingredients: {
      "Für den Teig": [
        "1 kg Pizzamehl Typ 00",
        "620 ml Wasser (16–22 °C)",
        "1,5 g frische Hefe (oder Trockenhefe: ⅓ der Frischhefemenge)",
        "30 g feines Meersalz",
      ],
      "Außerdem": [
        "Semola (Hartweizengrieß) zum Ausformen",
      ],
    },
    steps: [
      "Wasser in die Schüssel oder den Kneter geben, Salz darin auflösen und etwa 10 % des Mehls hinzugeben. Dann die Hefe dazugeben – wichtig: die Hefe sollte nicht länger als 5 Minuten direkten Kontakt mit dem Salz haben, sonst verliert sie an Triebkraft.",
      "Langsam das restliche Mehl einarbeiten und so lange kneten, bis ein glatter, elastischer Teig entsteht. Der Teig sollte kompakt, aber weich und leicht klebrig sein. Knetzeit: ca. 10 Minuten in der Maschine oder 20 Minuten von Hand. Fenstertest: Ein kleines Stück Teig zwischen den Fingern auseinanderziehen – wenn sich eine dünne, durchscheinende Haut formen lässt ohne zu reißen, ist der Teig fertig.",
      "Fermentation Phase 1 – Stockgare: Den Teig zu einer großen runden Kugel formen, abdecken und ca. 2 Stunden bei Raumtemperatur ruhen lassen.",
      "Anschließend 200–280 g Teiglinge abstechen und zu glatten, runden Kugeln formen (ähnlich wie Mozzarella formen). Fermentation Phase 2 – Stückgare: Die Teigkugeln in einer abgedeckten Box mindestens 8 bis maximal 24 Stunden ruhen lassen. Bei längerer Gehzeit am besten im Kühlschrank – mindestens 3 Stunden vor der Verarbeitung bei Raumtemperatur akklimatisieren lassen.",
      "Pizza formen: Den Teigling vorsichtig auf Semola legen. Mit den Fingern von der Mitte nach außen drücken – nie auf den Rand drücken und nie mit dem Nudelholz ausrollen! Den Teig dabei immer wieder leicht drehen, bis sich ein gleichmäßiger Boden formt. Überschüssiges Semola beiseiteschieben, die Pizza belegen und auf den Pizzaschieber legen.",
      "Neapolitanische Pizza backen: Im Pizzaofen bei 430–480 °C für 60–90 Sekunden backen, bis der Boden gleichmäßig gart, der Rand schön aufgeht und die typischen Leo-Flecken entstehen. Im Heimofen: so heiß wie möglich (max. Temperatur) auf einem Pizzastein oder Stahlblech backen.",
    ],
    tip: "Für den echten neapolitanischen Geschmack eine Gesamtgehzeit von 12–24 Stunden einplanen. 280 g Teiglinge ergeben die perfekte Größe für eine Pizza pro Person. Der Fenstertest zeigt, ob der Teig ausreichend geknetet ist.",
  },
  {
    id: 10,
    category: "Soßen",
    title: "Aromatische Erdnusssoße",
    source: "@veganewunder",
    prep: "5 Min.",
    bake: "10 Min.",
    form: "1 Portion",
    description:
      "Cremige Erdnusssoße in 15 Minuten – passt zu Currys, Bowls, Asia-Nudeln und als Dip. Mit Kokosmilch, Tomate und einem Spritzer Limette.",
    ingredients: {
      "Zutaten": [
        "2 EL Öl",
        "1 grob gehackte Tomate",
        "1–2 TL rote Chilipaste (optional)",
        "4 EL + 120 ml flüssige Kokosmilch (keine Kokoscreme)",
        "4 EL geröstete, gemahlene Erdnüsse",
        "4 TL Palmzucker oder andere Süße",
        "2 EL helle oder dunkle Sojasoße",
        "½ Limette, Saft",
      ],
    },
    steps: [
      "Tomaten anbraten: Das Öl in einem Wok oder einer Pfanne erhitzen. Die gehackten Tomaten hinzufügen und mit einem Spatel zerdrücken.",
      "Aromatisieren: Die Hitze etwas reduzieren und die Chilipaste einrühren. Kurz anbraten, bis sie duftet.",
      "Erdnusspaste herstellen: 4 EL Kokosmilch und die gemahlenen Erdnüsse einrühren. Unter Rühren kurz köcheln lassen, bis sich eine dicke Erdnusspaste bildet.",
      "Konsistenz anpassen: Nach und nach bis zu 120 ml weitere Kokosmilch einrühren, bis die gewünschte Konsistenz erreicht ist. Bei Bedarf etwas Wasser hinzugeben, um die Soße weiter zu verdünnen.",
      "Abschmecken: Zucker, Sojasoße und Limettensaft einrühren. Alles gut vermengen und noch einmal kurz köcheln lassen, bis die Soße schön cremig ist.",
    ],
    tip: "Flüssige Kokosmilch verwenden, keine Kokoscreme – sonst wird die Soße zu schwer. Die Konsistenz lässt sich jederzeit mit etwas Wasser anpassen.",
  },
  {
    id: 11,
    category: "Kochen",
    title: "Pasta mit rauchigem Ofen-Lauch",
    source: "@veganbyleagreen",
    prep: "10 Min.",
    bake: "20 Min.",
    form: "2 Portionen",
    description:
      "Lauch im Ofen geröstet, mit cremiger Béchamel und bissfester Pasta – getoppt mit Röstzwiebeln und Schnittlauch einfach gigantisch gut.",
    ingredients: {
      "Zutaten": [
        "2 Stangen Lauch",
        "200 g Hartweizenpasta",
        "30 g vegane Butter",
        "1–2 Knoblauchzehen",
        "1,5 EL Mehl",
        "350 ml Pflanzendrink",
        "1 EL Mandelmus",
        "2–3 EL Hefeflocken",
        "1 TL scharfer Senf",
        "Zitronensaft",
        "Olivenöl",
        "Salz, Pfeffer",
      ],
      "Toppings": [
        "Röstzwiebeln",
        "Schnittlauch",
      ],
    },
    steps: [
      "Lauch gründlich waschen, Wurzeln und dunkelgrünen Teil abschneiden (dunkelgrüne Reste für später aufbewahren). Halbieren, nochmals spülen, trocken tupfen und mit reichlich Olivenöl und Salz einreiben. Bei 180 °C Umluft 20 Minuten im Ofen backen.",
      "Währenddessen die Pasta in reichlich gesalzenem Wasser bissfest kochen. Die dunkelgrünen Lauchreste in feine Streifen schneiden.",
      "Vegane Butter in einer Pfanne schmelzen und die Lauchringe (dunkelgrüner Teil) 2–3 Minuten anbraten. Knoblauch dazu pressen.",
      "Mehl über den Lauch pudern und 350 ml Pflanzendrink aufgießen. Gut verrühren. Mandelmus, Hefeflocken und Senf hinzugeben. Béchamel salzen und pfeffern und mit etwas Pastakochwasser cremig verrühren. Mit Zitronensaft und Salz abschmecken.",
      "Die oberste Schicht des gebackenen Lauchs entfernen und die Stangen mit einer Gabel in feine Streifen ziehen.",
      "Pasta, Soße und Ofen-Lauch vermengen und mit Röstzwiebeln und Schnittlauch getoppt heiß genießen.",
    ],
    tip: "Etwas Pastakochwasser aufheben – die Stärke darin macht die Béchamel besonders cremig. Den Lauch wirklich großzügig mit Olivenöl einreiben, damit er im Ofen schön röstig wird.",
  },
];

const categories = [...new Set(recipes.map((r) => r.category))];

/* ── APP ────────────────────────────────────────────────────── */
export default function Kochbuch() {
  const [view, setView] = useState("home");
  const [selCat, setSelCat] = useState(null);
  const [selRecipe, setSelRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const filtered = selCat ? recipes.filter((r) => r.category === selCat) : recipes;

  const searchResults = recipes.filter((r) => {
    const q = searchQuery.toLowerCase();
    const allIngredients = Object.values(r.ingredients).flat().join(" ").toLowerCase();
    return (
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      allIngredients.includes(q)
    );
  });

  const goHome = () => { setView("home"); setSelCat(null); setSelRecipe(null); setSearchActive(false); setSearchQuery(""); };
  const goBack = () => {
    if (view === "recipe") { setSelRecipe(null); setView(selCat ? "category" : searchActive ? "home" : "home"); }
    else goHome();
  };

  return (
    <div style={a.wrap}>
      <GlobalStyle />

      {/* NAV */}
      <nav style={a.nav}>
        {view !== "home" ? (
          <button style={a.navBack} onClick={goBack}>
            <span style={a.navBackArrow}>‹</span>
            <span style={a.navBackTxt}>Zurück</span>
          </button>
        ) : (
          <button style={a.logo} onClick={goHome}>
            <span style={a.logoMark}>JP</span>
            <span style={a.logoName}>Kochbuch</span>
          </button>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {view === "home" && (
            <button style={a.searchBtn} onClick={() => { setSearchActive(!searchActive); setSearchQuery(""); }}>
              {searchActive ? "✕" : "🔍"}
            </button>
          )}
          <span style={a.vegTag}>vegan</span>
        </div>
      </nav>

      {/* SEARCH BAR */}
      {view === "home" && searchActive && (
        <div style={a.searchBar}>
          <input
            autoFocus
            style={a.searchInput}
            type="text"
            placeholder="Rezept oder Zutat suchen …"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      <main style={a.main}>

        {/* HOME */}
        {view === "home" && (
          <>
            {/* SEARCH RESULTS */}
            {searchActive && searchQuery.length > 0 ? (
              <section style={a.sec}>
                <p style={a.secLabel}>
                  {searchResults.length} Ergebnis{searchResults.length !== 1 ? "se" : ""} für „{searchQuery}"
                </p>
                {searchResults.length > 0 ? (
                  <div style={a.cardList}>
                    {searchResults.map((r) => (
                      <Card key={r.id} recipe={r}
                        onClick={() => { setSelRecipe(r); setView("recipe"); }} />
                    ))}
                  </div>
                ) : (
                  <div style={a.emptyState}>
                    <p style={a.emptyIcon}>🔍</p>
                    <p style={a.emptyTxt}>Kein Rezept gefunden.</p>
                    <p style={a.emptyHint}>Versuch es mit einem anderen Begriff oder einer Zutat.</p>
                  </div>
                )}
              </section>
            ) : (
              <>
            <header style={a.hero}>
              <p style={a.eyebrow}>100 % pflanzlich · {recipes.length} Rezept{recipes.length !== 1 ? "e" : ""}</p>
              <h1 style={a.h1}>Plant Based.<br /><em style={a.h1em}>Einfach gut essen.</em></h1>
            </header>

            <section style={a.sec}>
              <p style={a.secLabel}>Kategorien</p>
              <div style={a.catList}>
                {categories.map((cat) => {
                  const n = recipes.filter((r) => r.category === cat).length;
                  return (
                    <button key={cat} style={a.catRow}
                      onClick={() => { setSelCat(cat); setView("category"); }}>
                      <span style={a.catName}>{cat}</span>
                      <span style={a.catRight}>
                        <span style={a.catCount}>{n}</span>
                        <span style={a.chevron}>›</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section style={a.sec}>
              <p style={a.secLabel}>Alle Rezepte</p>
              <div style={a.cardList}>
                {recipes.map((r) => (
                  <Card key={r.id} recipe={r}
                    onClick={() => { setSelRecipe(r); setView("recipe"); }} />
                ))}
              </div>
            </section>
            </>
            )}
          </>
        )}

        {/* CATEGORY */}
        {view === "category" && (
          <>
            <header style={{ ...a.hero, paddingTop: 28, paddingBottom: 28 }}>
              <p style={a.eyebrow}>{selCat}</p>
              <h1 style={{ ...a.h1, fontSize: 32 }}>
                {filtered.length} Rezept{filtered.length !== 1 ? "e" : ""}
              </h1>
            </header>
            <section style={a.sec}>
              <div style={a.cardList}>
                {filtered.map((r) => (
                  <Card key={r.id} recipe={r}
                    onClick={() => { setSelRecipe(r); setView("recipe"); }} />
                ))}
              </div>
            </section>
          </>
        )}

        {/* RECIPE */}
        {view === "recipe" && selRecipe && <Detail recipe={selRecipe} />}

      </main>

      {view === "home" && (
        <footer style={a.foot}>
          <span style={a.footMark}>JP</span>
          <span>Basel, Schweiz</span>
        </footer>
      )}
    </div>
  );
}

/* ── CARD ───────────────────────────────────────────────────── */
function Card({ recipe, onClick }) {
  return (
    <button style={a.card} onClick={onClick}>
      <div style={a.cardInner}>
        <div style={a.cardLeft}>
          <span style={a.cardCat}>{recipe.category}</span>
          <p style={a.cardTitle}>{recipe.title}</p>
          <p style={a.cardDesc}>{recipe.description}</p>
          <div style={a.cardMeta}>
            <span style={a.cardTime}>⏱ {recipe.prep}</span>
            <span style={a.cardDot}>·</span>
            <span style={a.cardTime}>🔥 {recipe.bake}</span>
          </div>
        </div>
        <span style={a.cardChev}>›</span>
      </div>
    </button>
  );
}

/* ── DETAIL ─────────────────────────────────────────────────── */
function Detail({ recipe }) {
  const [checked, setChecked] = useState(new Set());
  const [activeStep, setActiveStep] = useState(null);
  const toggle = (s) => setChecked(p => { const n = new Set(p); n.has(s) ? n.delete(s) : n.add(s); return n; });

  return (
    <div style={d.wrap}>

      {/* Header */}
      <header style={d.header}>
        <p style={d.eyebrow}>{recipe.category}</p>
        <h1 style={d.title}>{recipe.title}</h1>
        <p style={d.desc}>{recipe.description}</p>
        {recipe.source && <p style={d.source}>Quelle: {recipe.source}</p>}
        <div style={d.chips}>
          {[["Vorbereitung", recipe.prep], ["Backzeit", recipe.bake], ["Form", recipe.form]].map(([l, v]) => (
            <div key={l} style={d.chip}>
              <span style={d.chipL}>{l}</span>
              <span style={d.chipV}>{v}</span>
            </div>
          ))}
        </div>
      </header>

      {/* ZUTATEN */}
      <section style={d.section}>
        <p style={d.secLabel}>Zutaten</p>
        {Object.entries(recipe.ingredients).map(([grp, items]) => (
          <div key={grp} style={{ marginBottom: 20 }}>
            <p style={d.grpLabel}>{grp}</p>
            {items.map((ing) => {
              const done = checked.has(ing);
              return (
                <button key={ing} style={{ ...d.ingRow, opacity: done ? 0.35 : 1 }} onClick={() => toggle(ing)}>
                  <span style={{ ...d.ingBox, background: done ? "var(--green)" : "transparent", borderColor: done ? "var(--green)" : "var(--grey2)" }}>
                    {done && <span style={{ color: "#fff", fontSize: 10, fontWeight: 700, lineHeight: 1 }}>✓</span>}
                  </span>
                  <span style={{ textDecoration: done ? "line-through" : "none", color: "var(--black)", fontSize: 15 }}>{ing}</span>
                </button>
              );
            })}
          </div>
        ))}
        <p style={d.hint}>Antippen zum Abhaken</p>
      </section>

      {/* ZUBEREITUNG */}
      <section style={d.section}>
        <p style={d.secLabel}>Zubereitung</p>
        {recipe.steps.map((step, i) => {
          const active = activeStep === i;
          return (
            <button key={i}
              style={{ ...d.step, borderColor: active ? "var(--green)" : "var(--grey2)", background: active ? "var(--green-l)" : "#fff" }}
              onClick={() => setActiveStep(active ? null : i)}>
              <span style={{ ...d.stepN, background: active ? "var(--green)" : "var(--grey1)", color: active ? "#fff" : "var(--grey4)" }}>{i + 1}</span>
              <span style={d.stepTxt}>{step}</span>
            </button>
          );
        })}
        {recipe.tip && (
          <div style={d.tip}>
            <p style={d.tipLabel}>Tipp</p>
            <p style={d.tipTxt}>{recipe.tip}</p>
          </div>
        )}
      </section>

    </div>
  );
}

/* ── STYLES ─────────────────────────────────────────────────── */
const a = {
  wrap: { fontFamily: "'Manrope', sans-serif", minHeight: "100vh", background: "#fff", color: "var(--black)", display: "flex", flexDirection: "column" },

  /* Nav – iOS-style with prominent back */
  nav: { height: 52, borderBottom: "1px solid var(--grey2)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", position: "sticky", top: 0, background: "#fff", zIndex: 100 },
  navBack: { background: "none", border: "none", display: "flex", alignItems: "center", gap: 2, padding: "8px 0", color: "var(--green)" },
  navBackArrow: { fontSize: 26, lineHeight: 1, marginTop: -1 },
  navBackTxt: { fontSize: 16, fontWeight: 500 },
  logo: { background: "none", border: "none", display: "flex", alignItems: "center", gap: 8, padding: 0 },
  logoMark: { width: 28, height: 28, borderRadius: 7, background: "var(--green)", color: "#fff", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" },
  logoName: { fontSize: 15, fontWeight: 600, color: "var(--black)" },
  vegTag: { fontSize: 11, fontWeight: 600, letterSpacing: "0.6px", textTransform: "uppercase", color: "var(--green)", background: "var(--green-l)", borderRadius: 4, padding: "3px 8px" },
  searchBtn: { background: "none", border: "none", fontSize: 18, padding: "4px 6px", color: "var(--grey4)", lineHeight: 1 },
  searchBar: { padding: "10px 20px 6px", borderBottom: "1px solid var(--grey2)", background: "#fff", position: "sticky", top: 52, zIndex: 90 },
  searchInput: { width: "100%", border: "1px solid var(--grey2)", borderRadius: 10, padding: "10px 14px", fontSize: 16, fontFamily: "'Manrope', sans-serif", color: "var(--black)", background: "var(--grey1)", outline: "none" },
  emptyState: { textAlign: "center", padding: "60px 20px" },
  emptyIcon: { fontSize: 36, marginBottom: 12 },
  emptyTxt: { fontSize: 17, fontWeight: 600, color: "var(--black)", marginBottom: 8 },
  emptyHint: { fontSize: 14, color: "var(--grey4)" },

  main: { flex: 1, width: "100%", maxWidth: 640, margin: "0 auto", padding: "0 0 40px" },

  hero: { padding: "36px 20px 32px", borderBottom: "1px solid var(--grey2)" },
  eyebrow: { fontSize: 12, color: "var(--grey4)", marginBottom: 12, fontWeight: 500 },
  h1: { fontFamily: "'Instrument Serif', serif", fontSize: 40, fontWeight: 400, lineHeight: 1.1 },
  h1em: { fontStyle: "italic", color: "var(--green)" },

  sec: { padding: "28px 20px 0" },
  secLabel: { fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--grey4)", marginBottom: 14 },

  catList: { borderTop: "1px solid var(--grey2)" },
  catRow: { display: "flex", alignItems: "center", width: "100%", background: "none", border: "none", borderBottom: "1px solid var(--grey2)", padding: "16px 0", textAlign: "left" },
  catName: { fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "var(--black)", flex: 1 },
  catRight: { display: "flex", alignItems: "center", gap: 8 },
  catCount: { fontSize: 13, color: "var(--grey4)" },
  chevron: { fontSize: 20, color: "var(--grey3)" },

  cardList: { display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--grey2)" },
  card: { background: "#fff", border: "none", borderBottom: "1px solid var(--grey2)", textAlign: "left", width: "100%" },
  cardInner: { display: "flex", alignItems: "center", gap: 12, padding: "18px 0" },
  cardLeft: { flex: 1, display: "flex", flexDirection: "column", gap: 5 },
  cardCat: { fontSize: 10, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--green)" },
  cardTitle: { fontFamily: "'Instrument Serif', serif", fontSize: 19, lineHeight: 1.2, color: "var(--black)" },
  cardDesc: { fontSize: 13, color: "var(--grey4)", lineHeight: 1.5 },
  cardMeta: { display: "flex", alignItems: "center", gap: 6, marginTop: 2 },
  cardTime: { fontSize: 12, color: "var(--grey4)" },
  cardDot: { color: "var(--grey3)", fontSize: 12 },
  cardChev: { fontSize: 22, color: "var(--grey3)", flexShrink: 0 },

  foot: { borderTop: "1px solid var(--grey2)", padding: "16px 20px", display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: "var(--grey4)" },
  footMark: { width: 20, height: 20, borderRadius: 5, background: "var(--green)", color: "#fff", fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" },
};

const d = {
  wrap: { paddingBottom: 60 },
  header: { padding: "28px 20px 24px", borderBottom: "1px solid var(--grey2)" },
  eyebrow: { fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--green)", marginBottom: 10 },
  title: { fontFamily: "'Instrument Serif', serif", fontSize: 32, fontWeight: 400, lineHeight: 1.1, marginBottom: 10 },
  desc: { fontSize: 14, color: "var(--grey4)", lineHeight: 1.6, marginBottom: 6 },
  source: { fontSize: 12, color: "var(--grey3)", fontStyle: "italic", marginBottom: 20 },
  chips: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 },
  chip: { border: "1px solid var(--grey2)", borderRadius: 8, padding: "8px 12px", display: "flex", flexDirection: "column", gap: 2 },
  chipL: { fontSize: 10, fontWeight: 700, letterSpacing: "0.6px", textTransform: "uppercase", color: "var(--grey4)" },
  chipV: { fontSize: 13, fontWeight: 600, color: "var(--black)" },

  section: { padding: "28px 20px 0" },
  secLabel: { fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--grey4)", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--grey2)" },

  grpLabel: { fontSize: 11, fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase", color: "var(--grey3)", marginBottom: 8 },
  ingRow: { display: "flex", alignItems: "center", gap: 12, width: "100%", background: "none", border: "none", borderBottom: "1px solid var(--grey1)", padding: "12px 0", textAlign: "left", fontFamily: "'Manrope', sans-serif", transition: "opacity 0.2s", minHeight: 48 },
  ingBox: { width: 20, height: 20, borderRadius: 5, border: "1.5px solid", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.15s" },
  hint: { fontSize: 11, color: "var(--grey3)", marginTop: 14, fontStyle: "italic" },

  step: { display: "flex", gap: 12, alignItems: "flex-start", width: "100%", border: "1px solid", borderRadius: 10, padding: "14px", marginBottom: 8, textAlign: "left", transition: "all 0.15s", fontFamily: "'Manrope', sans-serif", minHeight: 52 },
  stepN: { width: 24, height: 24, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, flexShrink: 0, transition: "all 0.15s" },
  stepTxt: { fontSize: 14, lineHeight: 1.65, color: "var(--black)", paddingTop: 2 },

  tip: { marginTop: 20, borderLeft: "2px solid var(--green)", paddingLeft: 14 },
  tipLabel: { fontSize: 10, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--green)", marginBottom: 6 },
  tipTxt: { fontSize: 13, lineHeight: 1.65, color: "var(--grey4)" },
};
