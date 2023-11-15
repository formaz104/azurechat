import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
import { AI_NAME } from "@/features/theme/customise";
import { FC } from "react";
import { NewChat } from "../../chat-menu/new-chat";

interface Prop {}

export const StartNewChat: FC<Prop> = (props) => {
  return (
    <div className="grid grid-cols-5 w-full items-center container mx-auto max-w-3xl justify-center h-full gap-9">
      <div className="col-span-2 gap-5 flex flex-col flex-1">
        <img src="/ai-icon.png" className="w-36" />
      </div>
      <Card className="col-span-3 flex flex-col gap-5 p-5 ">
        <Typography variant="h4" className="text-primary">
          {AI_NAME}
        </Typography>
        <div className="flex flex-col gap-2">
          <p className="overflow-auto">
            Welcome to {AI_NAME}. <br />
            En utilisant ChatGPT MH, veuillez prendre en compte les points suivants :<br />

            Usage Professionnel Seulement : ChatGPT MH est mis à disposition pour des besoins professionnels et ne doit pas être utilisé à des fins personnelles.<br />
            Exactitude des Informations : Les réponses fournies par ChatGPT MH peuvent comporter des erreurs. Bien qu'utile, cet outil ne doit pas être la seule source de décision ou d'information.<br />
Base de Connaissances : Les réponses de ChatGPT MH sont basées sur des données accumulées jusqu'en 2021. Il est donc possible qu'il ne dispose pas d'informations actualisées après cette date.<br />
Confidentialité : Il est strictement interdit d'indiquer ou de partager des données personnelles, client, ou sensibles (notamment classées C3 & C4) avec ChatGPT MH. Assurez-vous toujours de protéger les données et informations critiques.<br />
Utilisation des Données : Les questions posées à ChatGPT MH et les réponses obtenues pourront être utilisées à des fins internes d'apprentissage et d'évolution de la solution, tout en respectant les règles de confidentialité établies.<br />
Coût et Proportionnalité : L'utilisation de ChatGPT MH représente un coût direct pour MH. Son usage doit donc être proportionné et justifié par des besoins professionnels. Cependant, nous encourageons vivement l'exploration et l'expérimentation responsable de cette technologie pour découvrir son potentiel.<br />
Durée et Interruption : L'usage de ChatGPT MH au sein de notre organisation constitue une expérimentation pour une durée initiale de 3 mois, renouvelable. La direction se réserve le droit d'interrompre son utilisation à tout moment, sans préavis.<br />
Propriété : Il n’est pas autorisé d’entrer dans ChatGPT des données potentiellement déjà protégées par un droit d’auteur externe à MH (contenus d’autres sites internet, contenus d’un tiers prestataire dont MH n’aurait pas la propriété). L’utilisateur ne doit pas non plus utiliser une base de données externe à MH sans s’assurer auparavant de la licéité de son utilisation.<br /> 

En accédant à et en utilisant ChatGPT MH, vous reconnaissez avoir pris connaissance de cette clause de non-responsabilité et vous engagez à respecter les directives mentionnées ci-dessus..<br />
          </p>
          <p>You can start a new chat with me by clicking the button below.</p>
        </div>
        <div className="-mx-5 -mb-5 p-5 flex flex-col border-t bg-muted">
          <NewChat />
        </div>
      </Card>
    </div>
  );
};
