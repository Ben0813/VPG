import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

const PrivacyPolicyPage = () => {
  //scroll to the top when the page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-rich text-khaki font-rajdhani">
      <Header />
      <main className="flex-grow pt-24 p-4">
        <h1 className="text-6xl text-khaki mb-2 text-center mt-4">
          Politique de Confidentialité
        </h1>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">
            Identification de l'entreprise
          </h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Garage Automobile Vincent Parrot est une entreprise spécialisée dans
            les services d'entretien, de réparation et de vente de véhicules
            automobiles. Notre siège social est situé au 20 rue de l'ECF, 5000
            Namur, France. Pour toute question ou demande concernant notre
            politique de confidentialité, veuillez nous contacter à l'adresse
            suivante : info@vincentparrotgarage.com.
          </p>
        </section>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">
            Collecte et utilisation des informations
          </h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Chez Garage Automobile Vincent Parrot, nous nous engageons à
            respecter la confidentialité et la sécurité des informations
            personnelles que vous nous fournissez. Nous collectons et utilisons
            vos informations dans le cadre de la fourniture de nos services,
            notamment pour répondre à vos commentaires et demandes de contact.
            Les informations que nous collectons peuvent inclure votre nom,
            votre adresse e-mail, votre numéro de téléphone et toute autre
            information que vous choisissez de nous fournir.
          </p>
        </section>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">Conservation des données</h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Nous conservons vos données personnelles pendant une durée limitée,
            uniquement aussi longtemps que nécessaire pour atteindre les
            finalités pour lesquelles elles ont été collectées, à moins que la
            loi ne nous oblige à les conserver plus longtemps. Après cette
            période, nous nous engageons à supprimer ou anonymiser vos données
            afin de protéger votre vie privée.
          </p>
        </section>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">Partage des données</h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Nous ne vendons, ne louons, ni ne partageons vos données
            personnelles avec des tiers à des fins commerciales, sauf si nous
            obtenons votre consentement préalable ou si la loi nous y oblige.
            Dans certains cas, nous pouvons partager vos informations avec des
            prestataires de services tiers qui agissent en notre nom pour
            fournir des services spécifiques, tels que l'hébergement de notre
            site web ou l'envoi d'e-mails en notre nom. Ces prestataires de
            services sont tenus de respecter la confidentialité de vos
            informations et ne sont autorisés à les utiliser qu'aux fins
            spécifiques pour lesquelles nous les avons engagés.
          </p>
        </section>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">Vos droits</h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Conformément aux lois applicables sur la protection des données,
            vous avez certains droits concernant vos données personnelles. Vous
            avez le droit d'accéder à vos données personnelles, de les rectifier
            si elles sont inexactes, de demander leur suppression, de limiter
            leur traitement, de vous opposer au traitement de vos données à des
            fins de marketing direct, de demander la portabilité de vos données,
            et de retirer votre consentement à tout moment lorsque celui-ci a
            été donné. Pour exercer ces droits ou pour toute question ou
            préoccupation concernant la manière dont nous traitons vos données,
            veuillez nous contacter à l'adresse e-mail suivante :
            info@vincentparrotgarage.com.
          </p>
        </section>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">Sécurité des données</h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Nous mettons en œuvre des mesures de sécurité appropriées pour
            protéger vos données personnelles contre tout accès non autorisé,
            toute divulgation, toute altération ou toute destruction non
            autorisée. Nous nous engageons à maintenir un niveau élevé de
            sécurité pour garantir la confidentialité de vos informations.
            Cependant, veuillez noter qu'aucune méthode de transmission de
            données sur Internet ou de stockage électronique n'est totalement
            sécurisée. Par conséquent, bien que nous nous efforcions de protéger
            vos données personnelles, nous ne pouvons garantir la sécurité
            absolue de vos informations.
          </p>
        </section>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">Cookies</h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Notre site web n'utilise pas de cookies pour le suivi ou la
            personnalisation. Un cookie est un petit fichier texte qui est
            stocké sur votre appareil lorsque vous visitez un site web. Il est
            utilisé pour améliorer votre expérience de navigation en
            enregistrant certaines informations relatives à vos préférences et à
            votre utilisation du site web. Cependant, notre site web peut
            contenir des liens vers des sites tiers qui peuvent utiliser des
            cookies. Nous vous encourageons à consulter les politiques de
            confidentialité de ces sites tiers pour comprendre comment ils
            collectent, utilisent et partagent vos informations.
          </p>
        </section>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">
            Modifications de la politique de confidentialité
          </h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Toute modification sera publiée sur
            cette page et sera effective dès sa publication. Nous vous
            encourageons à consulter régulièrement cette page pour prendre
            connaissance des éventuelles modifications. Votre utilisation
            continue de notre site web après la publication des modifications
            constitue votre acceptation de ces modifications.
          </p>
        </section>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">Coordonnées</h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Si vous avez des questions, des préoccupations ou des demandes
            concernant notre politique de confidentialité ou notre traitement de
            vos données personnelles, veuillez nous contacter à l'adresse e-mail
            suivante : info@vincentparrotgarage.com.
          </p>
          <p className="text-white mt-4 mb-4">Mise à jour le 14 juillet 2023</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
